import axios from "axios";

export const MoviesApi = {
  api: axios.create({
    baseURL: `http://localhost:${process.env.PORT}/api`,
  }),

  getPopularMovies: async function () {
    const res = await this.api.get("/popular");

    return res.data;
  },
  getLatestMovies: async function ({ page, genre }) {
    const res = await this.api.get("/latest", {
      params: {
        page,
        genre,
      },
    });

    return res.data;
  },

  getMovieDetail: async function (id) {
    const res = await this.api.get(`/detail/${id}`);

    return res.data;
  },
  getMovieProviders: async function (id) {
    const res = await this.api.get(`/providers/${id}`);

    return res.data.results;
  },
  getMovieCredits: async function (id) {
    const res = await this.api.get(`/credits/${id}`);

    return res.data;
  },
  getMovieSimilars: async function (id) {
    const res = await this.api.get(`/similars/${id}`);

    return res.data;
  },
};
