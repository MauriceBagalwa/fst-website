// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: ["nuxt-svgo", "nuxt-icons", "nuxt-icon", "@vueuse/motion/nuxt"],
  svgo: {
    autoImportPath: "./assets/svg/images/",
  },
  app: {
    head: {
      meta: [
        {
          charset: "utf-8",
          // name: "viewport",
          // content: "width=device-width, initial-scale=1",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
});
