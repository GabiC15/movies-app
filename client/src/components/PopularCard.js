import React from "react";
import { Box } from "@mui/material";

export default function PopularCard({ movie, onClick }) {
  return (
    <>
      <Box
        onClick={onClick}
        sx={{
          margin: "1rem 0",
          transition: "all 125ms",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="Imagen"
          style={{
            height: "15rem",
            borderRadius: "5px",
          }}
        />
      </Box>
    </>
  );
}
