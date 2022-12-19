import { createSecretUseCase } from '../use-case/create-secret';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await createSecretUseCase(body);
});
