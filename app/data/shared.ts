import * as process from "node:process";

export const isProduction = process.env.VERCEL_ENV === "production";
// export const isProduction = true;

export const DEFAULT_HEADERS = {
  "x-timezone-name": "America/New_York",
  "x-timezone-offset": "-300",
};

export const BASE_API_URL = process.env.VERCEL_URL?.includes("local")
  ? "http://localhost:3000"
  : "https://serverless-reporting.vercel.app";
