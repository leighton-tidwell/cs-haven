import { default as _cors } from "cors";
import { env } from "./env.config.js";

export const cors = _cors({
  credentials: true,
  origin:
    env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "https://www.cs-haven.com",
});
