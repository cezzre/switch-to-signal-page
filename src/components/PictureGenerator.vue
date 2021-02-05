<template>
  <div
    class="image"
    :style="{
      '--color-accent': colorAccent,
      '--color-background': colorBackground,
    }"
  >
    <a
      title="Invert colours"
      href="#"
      class="button switch"
      @click.prevent="flipColors"
    ></a>
    <a
      title="Download image"
      href="#"
      class="button download"
      @click.prevent="downloadImage"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-download"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
    </a>
    <div class="upload">
      <input type="file" @change="useImage" accept="image/*" />
      <svg
        class="camera"
        :class="{ default: isDefaultImage === true }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        :stroke="colorBackground"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
        ></path>
        <circle cx="12" cy="13" r="4"></circle>
      </svg>
    </div>

    <svg
      id="picture"
      width="1000"
      height="1000"
      viewBox="0 0 2000 2000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="100%" height="100%" :fill="colorAccent"></rect>
        <image
          preserveAspectRatio="xMidYMid slice"
          :href="imageData"
          x="0"
          y="0"
          height="2000"
          width="2000"
        ></image>
        <path
          d="M-42.345-42.345h2084.69v2084.69H-42.345V-42.345zM1000 417.712c-321.684.203-582.085 261.011-582.085 582.492a583.713 583.713 0 0089.379 309.468l-55.99 239.023 238.82-55.99c272.21 171.226 631.764 89.583 802.99-182.423 171.225-272.006 89.786-631.559-182.22-802.987A583.715 583.715 0 001000 417.712z"
          :fill="colorBackground"
        ></path>
        <path
          d="M827.96 304.308l16.084 65.151a650.698 650.698 0 00-179.98 74.517l-34.408-57.618a707.706 707.706 0 01198.304-82.05zm344.08 0l-16.084 65.151a650.698 650.698 0 01179.98 74.517l34.815-57.618a712.796 712.796 0 00-198.711-82.05zM386.357 629.453a711.572 711.572 0 00-82.05 198.507l65.151 16.084a650.697 650.697 0 0174.517-179.98l-57.618-34.611zM350.524 1000a648.457 648.457 0 017.33-97.32L291.48 892.5a716.662 716.662 0 000 214.796l66.372-9.976a650.493 650.493 0 01-7.33-97.32zm1019.82 613.439l-34.408-57.415a647.033 647.033 0 01-179.777 74.517l16.085 65.151a713.203 713.203 0 00198.1-82.253zM1649.476 1000a650.493 650.493 0 01-7.33 97.32l66.373 9.976a716.661 716.661 0 000-214.795l-66.372 10.18a648.458 648.458 0 017.33 97.319zm46.217 171.836l-65.151-16.084a649.475 649.475 0 01-74.517 180.184l57.618 34.611a710.35 710.35 0 0082.05-198.71zm-598.373 470.31a649.68 649.68 0 01-194.64 0l-9.976 66.373a715.239 715.239 0 00214.592 0l-9.976-66.373zm425.519-256.94a647.644 647.644 0 01-137.632 137.428l39.905 54.157a722.974 722.974 0 00151.883-151.273l-54.156-40.312zm-137.632-908.044a648.661 648.661 0 01137.632 137.632l54.156-40.312a721.956 721.956 0 00-151.476-151.477l-40.312 54.157zM477.16 614.794a648.661 648.661 0 01137.632-137.632l-40.312-54.157a721.956 721.956 0 00-151.476 151.477l54.156 40.312zm1136.482 14.659l-57.618 34.611a647.032 647.032 0 0174.517 179.777l65.15-16.084a710.35 710.35 0 00-82.049-198.304zM902.68 357.854a649.68 649.68 0 01194.64 0l9.976-66.373a715.24 715.24 0 00-214.592 0l9.976 66.373zM511.57 1594.708l-138.65 32.168 32.372-138.65-65.355-15.27-32.372 138.65a67.187 67.187 0 0050.085 80.828 70.241 70.241 0 0030.54 0l138.65-31.964-15.27-65.762zm-157.789-181.61l65.559 15.067 22.396-96.098a643.774 643.774 0 01-72.278-176.315l-65.15 16.084a719.309 719.309 0 0065.965 170.411L353.78 1413.1zm313.54 145.37l-96.097 22.395 15.27 65.558 70.648-16.49a710.556 710.556 0 00170.41 65.965l16.085-65.152a644.794 644.794 0 01-175.705-72.684l-.61.407z"
          :fill="colorAccent"
        ></path>
        <path
          fill="transparent"
          id="top"
          d="M210 1000c0-436.305 353.695-790 790-790s790 353.695 790 790H210z"
        ></path>
        <path
          id="bottom"
          fill="bottom"
          d="M210 1000c0 436.305 353.695 790 790 790s790-353.695 790-790H210z"
        ></path>
        <text
          @click="editTextTop"
          font-family="Inter"
          font-weight="800"
          font-size="250"
          letter-spacing="-10"
          dx="100"
          dy="10"
          :fill="colorAccent"
          class="text"
          width="1000"
        >
          <textPath href="#top">
            {{ textTop }}
          </textPath>
        </text>
        <text
          @click="editTextBottom"
          font-family="Inter"
          font-weight="800"
          font-size="250"
          letter-spacing="-10"
          dx="850"
          dy="140"
          :fill="colorAccent"
          class="text"
          width="1000"
        >
          <textPath href="#bottom">
            {{ textBottom }}
          </textPath>
        </text>
        <text
          font-family="Inter"
          font-weight="600"
          font-size="50"
          y="93%"
          x="25"
          :fill="colorAccent"
        >
          <tspan x="25" dy="50">Create yours</tspan>
          <tspan x="25" dy="50">on signal.cezz.re</tspan>
        </text>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Canvg } from "canvg";

const defaultImage =
  "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEAAAEALAAAAAABAAEAAAICTAEAOw==";

export default defineComponent({
  name: "PictureGenerator",
  data() {
    return {
      textTop: "Download Signal",
      textBottom: "on signal.org",
      colorAccent: "#3A76F0",
      colorBackground: "#FFFFFF",
      imageData: defaultImage,
      isDefaultImage: true
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
    useImage: function ({ target }: any) {
      if (target.files?.[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            this.isDefaultImage = false;
            this.imageData = e.target.result as string;
          }
        };
        reader.readAsDataURL(target.files[0]);
      }
    },
    downloadImage: async () => {
      const svg = document.querySelector("#picture");

      if (!svg) {
        return;
      }

      const data = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        return;
      }

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
</script>

<style lang="scss" scoped>
.image,
#picture {
  width: 80vw;
  height: 80vw;
  max-width: 20em;
  max-height: 20em;
}

.image {
  margin: 1em;
  display: block;
  position: relative;
}

#picture {
  border-radius: 20em;
  user-select: none;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.08);

  text {
    pointer-events: all;
    cursor: pointer;
  }
}

.upload {
  &,
  .camera {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &,
  input {
    width: 13em;
    height: 13em;
    cursor: pointer;
  }

  input {
    opacity: 0;
  }

  .camera {
    width: 3em;
    height: 3em;
    opacity: 0;
    transition: opacity 0.15s linear;
    pointer-events: none;
  }

  &:hover .camera,
  .camera.default {
    opacity: 0.8;
  }
}

.button {
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  bottom: 0;
  display: flex;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
}

.switch {
  left: 0;
  background: var(--color-background);
  border: 2px solid var(--color-accent);

  &:before {
    content: "";
    display: block;
    background: var(--color-accent);
    position: absolute;
    border-radius: 100%;
    width: 1em;
    height: 1em;
  }
}

.download {
  right: 0;
  background: #fff;
  border: 2px solid #3a76f0;
}
</style>
