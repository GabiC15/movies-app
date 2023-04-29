import "./Home.css";
import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Box, CircularProgress, Grid, Pagination, Stack } from "@mui/material";
import { Container } from "@mui/system";
import PopularCard from "../components/PopularCard";
import { MoviesApi } from "./../services/MoviesApi";
import DropdownSelector from "./../components/DropdownSelector";
import MovieCard from "./../components/MovieCard";
import genres from "./../consts/genres";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState(null);
  const [latestMovies, setLatestMovies] = useState(null);
  const [genre, setGenre] = useState(null);
  const [page, setPages] = useState(1);
  const navigate = useNavigate();

  function handlePag(_, page) {
    setPages(page);
  }

  useEffect(() => {
    MoviesApi.getPopularMovies().then((data) => {
      setPopularMovies(data);
    });
  }, []);

  useEffect(() => {
    setLatestMovies(null);
    MoviesApi.getLatestMovies({ page, genre }).then((data) => {
      setLatestMovies(data);
    });
  }, [page, genre]);

  return (
    <>
      <MainLayout>
        <Box className="Populars">
          <Container>
            <Box className="PopularRow">
              {popularMovies ? (
                popularMovies.results
                  .slice(0, 6)
                  .map((m, i) => (
                    <PopularCard
                      onClick={() => navigate(`/movie/${m.id}`)}
                      key={i}
                      movie={m}
                    />
                  ))
              ) : (
                <Box
                  sx={{
                    height: "17rem",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
              )}
            </Box>
          </Container>
        </Box>
        <Box sx={{ backgroundColor: "#0085ff" }}>
          <Container>
            <DropdownSelector
              items={genres}
              setValue={setGenre}
              value={genre}
            />
          </Container>
        </Box>

        <Container
          sx={{
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <Grid container spacing={1} sx={{ padding: 0 }}>
            {latestMovies ? (
              latestMovies.results.map((m, i) => (
                <Grid item md={2} sm={4} xs={6} align="center">
                  <MovieCard
                    onClick={() => navigate(`/movie/${m.id}`)}
                    key={i}
                    movie={m}
                  />
                </Grid>
              ))
            ) : (
              <Box
                sx={{
                  height: "20rem",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularProgress />
              </Box>
            )}
          </Grid>

          <Stack alignItems="center">
            <Pagination
              count={200}
              page={page}
              onChange={handlePag}
              sx={{ marginTop: "2rem" }}
            />
          </Stack>
        </Container>
      </MainLayout>
    </>
  );
}
