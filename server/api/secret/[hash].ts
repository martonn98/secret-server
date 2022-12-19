import { getSecretUseCase } from '~~/server/use-case/get-secret';

export default defineEventHandler(
  async (event) => await getSecretUseCase(event.context.params.hash),
);
