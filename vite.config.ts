import preact from "@preact/preset-vite";
import autoprefixer from "autoprefixer";
import { visualizer } from "rollup-plugin-visualizer";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import tailwindConfig from "./tailwind.config.js";

export default defineConfig({
  base: "/",
  plugins: [preact(), visualizer()],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  css: {
    postcss: {
      plugins: [tailwind(tailwindConfig), autoprefixer],
    },
  },
});
