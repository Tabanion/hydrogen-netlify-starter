import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain:
      process.env?.PUBLIC_STORE_DOMAIN || 'sparks-4342.myshopify.com',
    storefrontToken:
      process.env?.PUBLIC_STOREFRONT_API_TOKEN ||
      '5da351baa4820c47c48ec31ae30e3a29',
    storefrontApiVersion: '2023-01',
    storefrontId: process.env?.PUBLIC_STOREFRONT_ID || 'sparks-4342',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
