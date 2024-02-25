import { defineConfig } from "vite"
import solid from "vite-plugin-solid"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solid()],
  build: {
    lib: {
      entry: "./src/index.tsx",
      name: "BeholdWidget",
      fileName: (format, entryName) => {
        const extension = format === "es" ? "js" : "cjs"
        return `${entryName}.${extension}`
      },
    },
    emptyOutDir: false,
    rollupOptions: {
      external: ["solid"],
      output: {
        globals: {
          solid: "Solid",
        },
      },
    },
  },
})
