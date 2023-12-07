import Prismic from "prismic-javascript";

export const API_URL = process.env.PRISMIC_API_ENDPOINT;
export const API_TOKEN = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN;

export const client = Prismic.client(API_URL, { accessToken: API_TOKEN });
