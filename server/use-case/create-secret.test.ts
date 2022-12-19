import { describe, expect, it } from 'vitest';
import { createSecretUseCase } from './create-secret';

describe('create secret test', async () => {
  it('should throw error for an invalid request body', async () => {
    const requestBody = {
      secret: 'asd',
    };

    expect(await createSecretUseCase(requestBody)).toThrowError();
  });
});
