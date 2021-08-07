import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt"],
      manifest: {
        name: "Corpolingo",
        short_name: "Corpolingo",
        icons: [
          {
            src: "/logo.png",
            sizes: "200x200",
            type: "image/png",
          },
        ],
        lang: "en",
      },
    }),
  ],

  server: {
    watch: {
      usePolling: true,
    },
  },
});
