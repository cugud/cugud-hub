// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/device",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "dayjs-nuxt",
    "@zadigetvoltaire/nuxt-gtm",
    // 'nuxt-speedkit'
  ],
  dayjs: {
    locales: ["id"],
    plugins: ["utc", "timezone"],
    defaultLocale: "id",
    defaultTimezone: "Asia/Jakarta",
  },
  ssr: true,
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || "http://localhost:3000",
      apiConfig: process.env.API_PUBLIC || "https://bssmnc.visionplus.dev",
      fbAppId: process.env.FB_APP_ID,
      sentryDsn: process.env.SENTRY_DSN,
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      midtransSnap: process.env.MIDTRANS_SNAP,
      midtransClientKey: process.env.MIDTRANS_CLIENT_KEY,
      airsheetBase:
        process.env.AIRSHEET_BASE || "https://airsheet.visionplus.dev",
      airsheetPrefix:
        process.env.AIRSHEET_PREFIX || "api/v1/db/data/v1/p26rhi7gy0nh638",
      airsheetKey: process.env.AIRSHEET_KEY || "asdasd",
      mainAppURL: process.env.MAIN_APP_URL || "https://www.visionplus.id",
    },
  },
  device: {
    refreshOnResize: true,
  },
  googleFonts: {
    families: {
      Inter: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [],
      },
    },
    display: "swap",
  },
  routeRules: {
    "/": {
      prerender: true,
    },
    "/vplus/auth/register": {
      prerender: true,
    },
    "/vplus/auth/remove": {
      prerender: true,
    },
    "/vplus/auth/login": {
      prerender: true,
    },
    "/vplus/auth/change-password": {
      prerender: true,
    },
    "/vplus/pay": {
      prerender: true,
    },
    "/vplus/pay/buy": {
      prerender: true,
    },
    "/vplus/pay/history": {
      prerender: true,
    },
    "/vplus/pay/payment/*": {
      prerender: true,
    },
    "/vplus/redeem/voucher": {
      prerender: true,
    },
    "/vplus/tv/*": {
      prerender: true,
    },
    "/vplus/verify/email": {
      prerender: true,
    },
  },
  veeValidate: {},
  imports: {
    dirs: ["~/types", "~/stores"],
  },
  gtm: {
    id: "GTM-NPXGGTK",
  },
});
