import React, { useState, useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { fetchFromAPI } from "./fetchFromAPI";
import Result from "./Result";
import { Type } from "./Context";

const SimilarShows = ({ id }) => {
  const [similarShows, setSimilarShows] = useState([]);
  const { isTv, setIsTv } = useContext(Type);

  useEffect(() => {
    if (!isTv) {
      fetchFromAPI(
        `movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      ).then((data) => setSimilarShows(data.results));
    } else {
      fetchFromAPI(
        `tv/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      ).then((data) => setSimilarShows(data.results));
    }
  }, [id]);

  return (
    <Box padding="0 8%" pt={15}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={5}
        pl={2}
        fontSize={{ xs: "1.5rem", lg: "1.8rem" }}
        sx={{ color: "white", borderLeft: "7px solid gold" }}
      >
        Recommendations
      </Typography>
      <Result res={similarShows} />
    </Box>
  );
};

export default SimilarShows;
