export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "~/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  css: [
    "~/assets/css/tailwind.css",
    "~/assets/scss/base.scss",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/eslint-module"],
  eslint: {},
});
