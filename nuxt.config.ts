export default defineNuxtConfig({
  compatibilityDate: "2025-02-17",
  devtools: { enabled: true },
  ssr: false,

  postcss: {
    plugins: {
      // postCSS плагины

      "autoprefixer": {},
      "postcss-pxtorem": {},
      "postcss-apply": {},
      "postcss-preset-env": {},
      "postcss-nested": {},
      "postcss-custom-media": {},
    },
  },
});
