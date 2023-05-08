import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

//For build configs mainly.
// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
});
