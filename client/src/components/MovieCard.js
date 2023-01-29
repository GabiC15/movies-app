import React from "react";
import { Box, Rating } from "@mui/material";
import moment from "moment";
import { alpha } from "@mui/material/styles";

export default function MovieCard({ movie }) {
  let date = moment(movie.release_date, "YYYY-MM-DD").locale("es").fromNow();
  date = date[0].toUpperCase() + date.slice(1);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          borderRadius: "5px",
          padding: ".6rem",
          transition: "250ms all",
          "&:hover": {
            backgroundColor: alpha("#000000", 0.15),
          },
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="Imagen"
          style={{
            borderRadius: "5px",
            marginBottom: "0.5rem",
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />

        <Rating
          size="small"
          precision={0.5}
          name="simple-controlled"
          value={movie.vote_average / 2}
          readOnly
        />
        <div
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            display: "flex",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {movie.title}
          </span>
        </div>
        <p
          style={{
            display: "inline-block",
            margin: 0,
            fontSize: 12,
            color: "grey",
          }}
        >
          {date}
        </p>
      </Box>
    </>
  );
}
