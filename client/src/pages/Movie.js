import React, { useEffect, useState } from "react";
import { MoviesApi } from "../services/MoviesApi";
import MainLayout from "./../layouts/MainLayout";
import { Container } from "@mui/system";
import { Box, Button, Rating } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import "./Movie.css";

export default function Movie() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    MoviesApi.getMovieDetail(315162).then(setMovie);
  }, []);

  if (movie) {
    console.log(movie);
  }
  return (
    <>
      <MainLayout>
        {movie && (
          <div
            style={{
              background: `left no-repeat url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
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
                      <img
                        src="https://image.tmdb.org/t/p/original/peURlLlr8jggOwK53fJ5wdQl05y.jpg"
                        alt="Provider"
                      />
                      <img
                        src="https://image.tmdb.org/t/p/original/peURlLlr8jggOwK53fJ5wdQl05y.jpg"
                        alt="Provider"
                      />
                      <img
                        src="https://image.tmdb.org/t/p/original/peURlLlr8jggOwK53fJ5wdQl05y.jpg"
                        alt="Provider"
                      />
                      <img
                        src="https://image.tmdb.org/t/p/original/peURlLlr8jggOwK53fJ5wdQl05y.jpg"
                        alt="Provider"
                      />
                    </Box>
                  </Box>
                </Box>
              </Container>
            </div>
          </div>
        )}
      </MainLayout>
    </>
  );
}
