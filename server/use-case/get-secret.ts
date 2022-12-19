import { SecretResponseBody } from '../interface';
import secret from '../model/secret';
import { decrypt } from '../utils/crypto';

export const getSecretUseCase = async (hash: string): Promise<SecretResponseBody> => {
  const updatedSecret = await secret.findOneAndUpdate(
    { hash: hash },
    { $inc: { remainingViews: -1 } },
    { new: true },
  );

  if (!updatedSecret) {
    throw createError({
      statusCode: 404,
      message: 'secret not found',
    });
  }
  if (updatedSecret.remainingViews === 0) {
    await secret.deleteOne({ hash: updatedSecret.hash });
  }

  const response: SecretResponseBody = {
    hash: updatedSecret.hash,
    secretText: decrypt(updatedSecret.hash),
    createdAt: updatedSecret.createdAt,
    expiresAt: updatedSecret.expiresAt,
    remainingViews: updatedSecret.remainingViews,
  };
  return response;
};
