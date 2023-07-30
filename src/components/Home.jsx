import { IconButton, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { fetchFromAPI } from "./fetchFromAPI";
import Footer from "./Footer";
import Shows from "./Shows";
import Menu from "./Menu";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import Header from "./Header";
import { Type } from "./Context";

const Home = () => {
  const { isTv, setIsTv } = useContext(Type);

  const [showsT, setShowsT] = useState([]);
  const [showsP, setShowsP] = useState([]);

  useEffect(() => {
    if (!isTv) {
      fetchFromAPI(
        `trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
      ).then((data) => setShowsT(data.results.slice(0, 10)));

      fetchFromAPI(
        `movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      ).then((data) => setShowsP(data.results.slice(0, 10)));
    } else {
      fetchFromAPI(
        `trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}`
      ).then((data) => setShowsT(data.results.slice(0, 10)));

      fetchFromAPI(
        `tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      ).then((data) => setShowsP(data.results.slice(0, 10)));
    }
  }, [isTv]);

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      p="0 8%"
      sx={{ backgroundColor: "#191919" }}
    >
      <Menu />

      <Header />

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={5}
        mt={{ xs: 20, md: 25 }}
        pl={2}
        pr={2}
        sx={{
          color: "white",
          borderLeft: "7px solid gold",
          borderRight: "7px solid gold",
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        Top 10 Trending
      </Typography>

      <Shows shows={showsT} />

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={5}
        mt={25}
        pl={2}
        pr={2}
        sx={{
          color: "white",
          borderLeft: "7px solid gold",
          borderRight: "7px solid gold",
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        Top 10 Popular
      </Typography>

      <Shows shows={showsP} />

      <IconButton type="button" onClick={() => window.scrollTo(0, 0)}>
        <KeyboardDoubleArrowUp
          fontSize="large"
          sx={{
            position: "fixed",
            bottom: "5%",
            right: "5%",
            backgroundColor: "gold",
            borderRadius: "50%",
            color: "black",
            p: "0.2em",
            fontSize: { xs: "1.5rem", md: "1.8rem" },
          }}
        />
      </IconButton>

      <Footer />
    </Stack>
  );
};

export default Home;
