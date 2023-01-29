import React from "react";
import { alpha, Container } from "@mui/system";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: alpha("#000000", 0.05),
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p>Copyright 2023</p>
        </Container>
      </Box>
    </>
  );
}
