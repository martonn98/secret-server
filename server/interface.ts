export interface SecretResponseBody {
  hash: string;
  secretText: string;
  createdAt: Date;
  expiresAt: Date;
  remainingViews: number;
}

export interface PostSecretRequestBody {
  secret: string;
  expireAfterViews: number;
  expireAfter?: number;
}

export function instanceOfPostSecretRequestBody(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
): data is PostSecretRequestBody {
  return 'secret' in data && 'expireAfterViews' in data;
}
