import { addMinutes } from 'date-fns';
import { instanceOfPostSecretRequestBody, SecretResponseBody } from '../interface';
import secret from '../model/secret';
import { encrypt } from '../utils/crypto';

export const createSecretUseCase = async (body: unknown): Promise<SecretResponseBody> => {
  if (instanceOfPostSecretRequestBody(body)) {
    const encryptedSecret = encrypt(body.secret);
    const now = new Date();

    const createdDocument = await secret.create({
      hash: encryptedSecret,
      createdAt: now,
      expiresAt: body.expireAfter ? addMinutes(now, body.expireAfter) : null,
      remainingViews: body.expireAfterViews,
    });

    const response: SecretResponseBody = {
      hash: encryptedSecret,
      secretText: body.secret,
      createdAt: createdDocument.createdAt,
      expiresAt: createdDocument.expiresAt,
      remainingViews: body.expireAfterViews,
    };
    return response;
  }

  throw createError({
    statusCode: 400,
    message: 'invalid body',
  });
};
