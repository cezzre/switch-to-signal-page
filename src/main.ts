import { createApp } from "vue";
import App from "./App.vue";
import messages from "./messages";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: navigator.language.split("-")[0],
  fallbackLocale: "en",
  messages,
});

createApp(App).use(i18n).mount("#root");
