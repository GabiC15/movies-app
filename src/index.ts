import express, { json } from "express";
import env from "dotenv";
import cors from "cors";
env.config();
import { getPopularRouter } from "./routes/get-popular";
import { getLatestRouter } from "./routes/get-latest";
import { getMovieDetailRouter } from "./routes/get-movie-detail";
import { getProvidersRouter } from "./routes/get-movie-providers";
import { getCreditsRouter } from "./routes/get-movie-credits";
import { getSimilarsRouter } from "./routes/get-movie-similars";

const app = express();
const port = 3001;

app.use(json());
app.use(cors());

app.use(getPopularRouter);
app.use(getLatestRouter);
app.use(getMovieDetailRouter);
app.use(getProvidersRouter);
app.use(getCreditsRouter);
app.use(getSimilarsRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
