import axios from "axios";

export const MoviesApi = axios.create({
  baseURL: process.env.THEMOVIEDB_URL,
  params: { api_key: process.env.THEMOVIEDB_API_KEY, language: "es-AR" },
});
