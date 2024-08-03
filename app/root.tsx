// ~/root.tsx
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@vercel/remix";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import mainCss from "~/styles/main.css";
import tailwindStyles from "~/styles/tailwind.css";

export async function loader({ request }: LoaderFunctionArgs) {
  if (request.method === "OPTIONS") {
    const headers = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400",
    });
    return new Response(null, { headers, status: 204 });
  }
  return null;
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { name: "charset", content: "utf-8" },
    { name: "title", content: "Serverless Reporting" },
    {
      name: "description",
      content:
        "A serverless reporting application built with Remix and Vercel.",
    },
    // { name: 'twitter:card', content: 'summary_large_image' },
    // { name: 'twitter:site', content: '@vercel' },
    // { name: 'twitter:creator', content: '@vercel' },
    // { name: 'twitter:title', content: 'Remix on Vercel' },
    // { name: 'twitter:description', content: 'HTML, dynamically rendered in a city near you' },
    // { name: 'twitter:image', content: `https://${data?.host}/og-card.png` },
    // { name: 'twitter:image:alt', content: 'The Vercel and Remix logos' },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Hind:wght@300;400;500;600;700&display=swap",
    },
    { rel: "stylesheet", href: tailwindStyles },
    { rel: "stylesheet", href: mainCss },
  ];
};

// Wrap your app with ThemeProvider.
// `specifiedTheme` is the stored theme in the session storage.
// `themeAction` is the action name that's used to change the theme in the session storage.
export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return <App />;
}

export function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
