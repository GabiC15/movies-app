import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Box, Grid, Pagination, Stack } from "@mui/material";
import { Container } from "@mui/system";
import PopularCard from "../components/PopularCard";
import { MoviesApi } from "./../services/MoviesApi";
import DropdownSelector from "./../components/DropdownSelector";
import MovieCard from "./../components/MovieCard";
import "./Home.css";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState(null);
  const [latestMovies, setLatestMovies] = useState(null);
  const [page, setPages] = useState(1);

  function handlePag(_, page) {
    setPages(page);
  }

  useEffect(() => {
    MoviesApi.getPopularMovies().then((data) => {
      setPopularMovies(data);
    });
  }, []);

  useEffect(() => {
    MoviesApi.getLatestMovies(page).then((data) => {
      setLatestMovies(data);
    });
  }, [page]);

  return (
    <>
      <MainLayout>
        <Box className="Populars">
          <Container>
            <Box className="PopularRow">
              {popularMovies &&
                popularMovies.results
                  .slice(0, 6)
                  .map((m, i) => <PopularCard key={i} movie={m} />)}
            </Box>
          </Container>
        </Box>
        <Box sx={{ backgroundColor: "#0085ff" }}>
          <Container>
            <DropdownSelector />
            <DropdownSelector />
            <DropdownSelector />
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
            {latestMovies &&
              latestMovies.results.map((m, i) => (
                <Grid item md={2} sm={4} xs={6} align="center">
                  <MovieCard key={i} movie={m} />
                </Grid>
              ))}
          </Grid>

          <Stack alignItems="center">
            <Pagination
              count={latestMovies?.total_pages ?? 1}
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
