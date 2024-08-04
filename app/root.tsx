import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import { ManifestLink } from "@remix-pwa/sw";
import { ReactNode } from "react";
import { LoaderFunctionArgs } from "@remix-run/router";

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

export const meta: MetaFunction<typeof loader> = () => {
  return [
    { name: "charset", content: "utf-8" },
    { name: "title", content: "ShakerDIY" },
    {
      name: "description",
      content: "A DIY cocktail recipe app built with Remix and Vercel",
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
  ];
};

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ManifestLink />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
