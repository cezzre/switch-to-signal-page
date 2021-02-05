<template>
  <p>
    <span v-html="$t('helpTheWorld')"></span>
    <br />
    <span v-html="$t('chooseSignal')"></span>
  </p>

  <PictureGenerator />

  <p>
    <span v-html="$t('whoami')"></span>
    <br />
    <span v-html="$t('buyMeARamen')"></span>
  </p>

  <GithubCorner />
</template>

<script lang="ts">
import GithubCorner from "./components/GithubCorner.vue";
import PictureGenerator from "./components/PictureGenerator.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    GithubCorner,
    PictureGenerator,
  },
});
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
