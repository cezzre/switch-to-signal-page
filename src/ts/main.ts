import { createApp } from "vue/dist/vue.esm-browser";
import { Canvg } from "canvg";

const defaultImage =
  "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEAAAEALAAAAAABAAEAAAICTAEAOw==";

const app = createApp({
  data() {
    return {
      textTop: "Download Signal",
      textBottom: "on signal.org",
      colorAccent: "#3A76F0",
      colorBackground: "#FFFFFF",
      imageData: defaultImage,
      isDefaultImage: true,
    };
  },
  methods: {
    flipColors: function () {
      const { colorBackground, colorAccent } = this;
      this.colorBackground = colorAccent;
      this.colorAccent = colorBackground;
    },
    editTextTop: function () {
      const textTop = prompt("Edit top text", this.textTop);
      if (textTop) {
        this.textTop = textTop;
      }
    },
    editTextBottom: function () {
      const textBottom = prompt("Edit bottom text", this.textBottom);
      if (textBottom) {
        this.textBottom = textBottom;
      }
    },
    useImage: function ({ target }) {
      if (target.files?.[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.isDefaultImage = false;
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(target.files[0]);
      }
    },
    downloadImage: async () => {
      const svg = document.querySelector("#picture");
      const data = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      await Canvg.fromString(ctx, data).render();
      canvas.toBlob((blob) => {
        const pngUrl = URL.createObjectURL(blob);
        var download = document.createElement("a");
        download.href = pngUrl;
        download.download = "MyNewProfilePicture.png";
        download.click();
      });
    },
  },
});

app.mount("#root");
