import { handleApi } from "./api.js";
import { handlePages } from "./pages.js";

export default {
  async fetch(request, env) {
    if (new URL(request.url).pathname.startsWith("/api/")) return handleApi(request, env.DB, env);
    return (await handlePages(request, env.DB)) ?? env.ASSETS.fetch(request);
  },
};
