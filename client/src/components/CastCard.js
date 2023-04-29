import { Box } from "@mui/material";
import "./CastCard.css";

export default function CastCard({ actor }) {
  return (
    <>
      <Box className="CastCard">
        <img
          src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
          alt="Cast"
        />
        <h4>{actor.original_name}</h4>
        <p>{actor.character}</p>
      </Box>
    </>
  );
}
