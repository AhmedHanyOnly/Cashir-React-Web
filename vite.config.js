import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/React-Cashier-Website/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // تقسيم الـ vendor libraries لملف منفصل
          vendor: ["react", "react-dom", "react-router-dom", "react-bootstrap"],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // 1000 KB
  },
});
