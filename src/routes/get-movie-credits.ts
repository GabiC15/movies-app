import express, { Request, Response } from "express";
import { MoviesApi } from "../services/api";

const router = express.Router();

router.get("/api/credits/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const response = await MoviesApi.get(`/movie/${id}/credits`);

  res.status(200).send(response.data);
});

export { router as getCreditsRouter };
