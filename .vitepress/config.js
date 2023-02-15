import vuetify from "vite-plugin-vuetify";

export default {
  title: "Timeline Creators",
  themeConfig: {
    siteTitle: false,
    socialLinks: [
      { icon: "github", link: "https://github.com/mark-when/timelinecreators" },
    ],
  },
  appearance: false,
  vite: {
    plugins: [vuetify({ autoImport: true, styles: true })],
    ssr: {
      noExternal: ["vuetify"],
    },
  },
};
