import type { WebAppManifest } from "@remix-pwa/dev";
import { json } from "@remix-run/node";

export const loader = () => {
  return json(
    {
      short_name: "ShakerDIY",
      name: "ShakerDIY",
      start_url: "/recipes",
      display: "standalone",
      background_color: "#71907b",
      theme_color: "#fbf6d9",
    } as WebAppManifest,
    {
      headers: {
        "Cache-Control": "public, max-age=600",
        "Content-Type": "application/manifest+json",
      },
    }
  );
};
