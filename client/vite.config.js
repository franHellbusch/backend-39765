import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Ruta de la carpeta "src"
const srcPath = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@\/(.*)/,
        replacement: `${srcPath}/$1`,
      },
    ],
  },
});
