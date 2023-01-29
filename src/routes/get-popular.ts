import axios from "axios";
import express, { Request, Response } from "express";
import { MoviesApi } from "../services/api";

const router = express.Router();

router.get("/api/popular", async (req: Request, res: Response) => {
  const response = await MoviesApi.get("/trending/all/week");

  res.status(200).send(response.data);
});

export { router as getPopularRouter };
