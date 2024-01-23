import { createDirectus, rest, staticToken } from "@directus/sdk";

export const directus = createDirectus("https://api.b.army")
  .with(rest())
  .with(staticToken("-QNbixYKRQnu27R-BFYIukyHOFTWndnC"));
