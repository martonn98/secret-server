import Cryptr from 'cryptr';

const config = useRuntimeConfig();
const cryptr = new Cryptr(config.aesKey);

export const encrypt = (text: string): string => {
  return cryptr.encrypt(text);
};

export const decrypt = (encryptedText: string): string => {
  return cryptr.decrypt(encryptedText);
};
