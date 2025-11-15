import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Force Rollup to use JS implementation
    // avoids native *.node modules that Vercel blocks
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
        warn(warning);
      }
    }
  },
  optimizeDeps: {
    // Avoid scanning optional native dependencies
    exclude: ["rollup"],
  },
});
