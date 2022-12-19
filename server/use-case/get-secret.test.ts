import { describe, expect, it } from 'vitest';
import { getSecretUseCase } from './get-secret';

describe('get secret test', async () => {
  it('should throw error if hash doesnt exists', async () => {
    expect(await getSecretUseCase('asd')).toThrowError();
  });
});
