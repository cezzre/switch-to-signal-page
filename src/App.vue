<template>
  <p>
    Help the world switch to a better messenger that puts
    <u>privacy and security first</u>. <br />Choose
    <a href="https://signal.org" target="_blank">Signal</a> and
    <strong>set this profile picture</strong> elsewhere to help your friends
    switch too.
  </p>

  <PictureGenerator />

  <p>
    I'm not affiliated with Signal, I'm just a person tired of corporates mining
    on my data.<br />If I was helpful, please consider
    <a
      href="https://www.buymeacoffee.com/cezzre"
      title="buy me a ramen"
      target="_blank"
      >buying me a 🍜 ramen</a
    >.
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
