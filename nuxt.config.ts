// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Secret Server',
    },
  },
  css: ['@formkit/themes/genesis'],
  nitro: {
    plugins: ['~/server/index.ts'],
  },
  modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt'],
  runtimeConfig: {
    aesKey: process.env.AES_KEY,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbName: process.env.DB_NAME,
  },
  tailwindcss: {
    viewer: false,
  },
});
