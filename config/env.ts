import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}` });

export const { API_URL } = process.env;
