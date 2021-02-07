<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="lang in langs" :key="lang" :value="lang">
        {{ langNames[lang] }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import messages from "../messages";
import ISO6391 from "iso-639-1";

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const langs = Object.keys(messages).sort();
const langNames = langs.reduce((langNames, lang) => {
  return {
    ...langNames,
    [lang]: `${capitalizeFirstLetter(
      ISO6391.getNativeName(lang),
    )} / ${ISO6391.getName(lang)}`,
  };
}, {} as Record<string, string>);

export default defineComponent({
  name: "LanguageSelect",
  data() {
    return {
      langs,
      langNames,
    };
  },
});
</script>

<style lang="scss">
.locale-changer {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
</style>
