import express, { Request, Response } from "express";
import { MoviesApi } from "../services/api";

const router = express.Router();

router.get("/api/latest", async (req: Request, res: Response) => {
  const { page, genre } = req.query;
  const response = await MoviesApi.get("/discover/movie", {
    params: {
      page: page ?? 1,
      with_genres: genre,
    },
  });

  res.status(200).send(response.data);
});

export { router as getLatestRouter };
