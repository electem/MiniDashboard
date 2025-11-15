import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {},   // <-- forces JS rollup, avoids native binaries
    commonjsOptions: {
      include: [/node_modules/], 
    }
  }
});
