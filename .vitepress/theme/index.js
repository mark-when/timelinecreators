// import DiscordButton from "../../src/DiscordButton.vue";
import DefaultTheme from "vitepress/theme";
// import PageLayout from "../../src/PageLayout.vue";
import "vuetify/styles";
import "./custom.css";

// Vuetify
import { createVuetify } from "vuetify";

export default {
  ...DefaultTheme,
  // Layout: PageLayout,
  enhanceApp(context) {
    DefaultTheme.enhanceApp(context);
    context.app.use(
      createVuetify({
        ssr: true,
      })
    );
  },
};
