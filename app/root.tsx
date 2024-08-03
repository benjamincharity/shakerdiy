// ~/root.tsx
import type { LinksFunction, MetaFunction } from "@vercel/remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwindStylesUrl from "./styles/tailwind.css"; // Import CSS as a URL

export const meta: MetaFunction = () => {
  return [
    { name: "charset", content: "utf-8" },
    { name: "title", content: "Serverless Reporting" },
    {
      name: "description",
      content:
        "A serverless reporting application built with Remix and Vercel.",
    },
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
    { rel: "stylesheet", href: tailwindStylesUrl },
  ];
};

export default function App() {
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
