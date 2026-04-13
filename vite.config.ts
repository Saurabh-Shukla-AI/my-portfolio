import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
const env =
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};
const repoName = env.GITHUB_REPOSITORY?.split("/")[1];
const base = env.GITHUB_ACTIONS === "true" && repoName ? `/${repoName}/` : "/";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
});
