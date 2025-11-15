import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["rollup"], // prevent native rollup imports
  },
  build: {
    rollupOptions: {},   // triggers JS version, avoids native binary
  },
});
