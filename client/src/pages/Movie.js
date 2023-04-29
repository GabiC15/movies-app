import React, { useEffect, useState } from "react";
import { MoviesApi } from "../services/MoviesApi";
import "./Movie.css";
import MainLayout from "./../layouts/MainLayout";
import { Container } from "@mui/system";
import { Box, Button, Rating } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import CastCard from "./../components/CastCard";
import PopularCard from "./../components/PopularCard";
import { useParams } from "react-router";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);
  const [providers, setProviders] = useState(null);
  const [credits, setCredits] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    MoviesApi.getMovieDetail(id).then(setMovie);
  }, [id]);

  useEffect(() => {
    MoviesApi.getMovieProviders(id).then(setProviders);
  }, [id]);

  useEffect(() => {
    MoviesApi.getMovieCredits(id).then(setCredits);
  }, [id]);

  useEffect(() => {
    MoviesApi.getMovieSimilars(id).then(setSimilarMovies);
  }, [id]);

  return (
    <>
      <MainLayout>
        {movie && (
          <div
            style={{
              background: `left no-repeat url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              height: "30rem",
            }}
          >
            <div className="Header">
              <Container>
                <Box className="HeaderContainer">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="Poster"
                  />
                  <Box className="MovieDetail">
                    <h1>{movie.title}</h1>
                    <p className="Genres">
                      {movie.release_date} -{" "}
                      {movie.genres
                        .map((e) => e.name)
                        .reduce((a, b) => `${a}, ${b}`)}
                    </p>
                    <Rating
                      name="read-only"
                      value={movie.vote_average / 2}
                      readOnly
                    />
                    <h3 className="SinopsisTitle">Sinopsis</h3>
                    <p className="Sinopsis">{movie.overview}</p>
                    <Button
                      className="TrailerButton"
                      variant="contained"
                      startIcon={<PlayArrow />}
                    >
                      Ver trailer
                    </Button>

                    <h3 className="AvailabilityTitle">Disponible en: </h3>
                    <Box className="WatchProviders">
                      {providers &&
                        providers[Object.keys(providers)[0]]?.rent?.map(
                          (p, i) => (
                            <img
                              src={`https://image.tmdb.org/t/p/w400/${p.logo_path}`}
                              style={{
                                height: "2.7rem",
                                width: "2.7rem",
                              }}
                              alt="Provider"
                            />
                          )
                        )}
                    </Box>
                  </Box>
                </Box>
              </Container>
            </div>
          </div>
        )}

        <Container>
          <Box className="CastContainer">
            <h2>Reparto</h2>

            <Box className="Slider">
              {credits &&
                credits.cast.map((c, i) => <CastCard actor={c} key={i} />)}
            </Box>
          </Box>
        </Container>

        <Container className="SimilarContainer">
          <h2>Similares</h2>
          <Box className="Slider">
            {similarMovies &&
              similarMovies.results.map((m, i) => (
                <PopularCard key={i} movie={m} />
              ))}
          </Box>
        </Container>
      </MainLayout>
    </>
  );
}
