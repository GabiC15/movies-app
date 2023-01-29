import axios from "axios";

export const MoviesApi = {
  api: axios.create({
    baseURL: "http://localhost:3001/api",
  }),

  getPopularMovies: async function () {
    const res = await this.api.get("/popular");

    return res.data;
  },
  getLatestMovies: async function (page) {
    console.log(page);
    const res = await this.api.get("/latest", {
      params: {
        page,
      },
    });

    return res.data;
  },

  getMovieDetail: async function (id) {
    const res = await this.api.get(`/detail/${id}`);

    return res.data;
  },
};
