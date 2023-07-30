import { Box, Stack, Typography } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import CancelIcon from "@mui/icons-material/Cancel";
import React, { useContext, useEffect, useState } from "react";
import { fetchFromAPI } from "./fetchFromAPI";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Type } from "./Context";

const Menu = () => {
  const [genres, setGenres] = useState([]);
  const { isTv, setIsTv } = useContext(Type);

  const menu = document.querySelector(".menu");

  const handleClick = () => {
    menu.classList.toggle("menu-drop");
  };

  useEffect(() => {
    if (!isTv) {
      fetchFromAPI(
        `genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      ).then((data) => setGenres(data.genres));
    } else {
      fetchFromAPI(
        `genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      ).then((data) => setGenres(data.genres));
    }
  }, []);

  return (
    <>
      <Box className="menu" sx={{ height: "100%" }}>
        <SearchBar />

        <CancelIcon
          type="button"
          onClick={handleClick}
          fontSize="inherit"
          sx={{
            color: "white",
            position: "absolute",
            top: "6%",
            left: { xs: "5%", sm: "13%" },
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
            cursor: "pointer",
          }}
        />

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={3}
          flexWrap="wrap"
          p="10%"
        >
          {genres.map((item, idx) => (
            <Link
              onClick={handleClick}
              key={idx}
              to={`/genre/${item.id}/${item.name}?page=1`}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="h6"
                fontSize={{ xs: "0.9rem", xl: "1.2rem" }}
                fontWeight="bold"
                color="white"
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Box>

      <ListIcon
        type="button"
        onClick={handleClick}
        fontSize="inherit"
        sx={{
          color: "white",
          position: "fixed",
          top: "4.8%",
          left: { xs: "5%", sm: "13%" },
          fontSize: { xs: "2.5rem", sm: "2.5rem" },
          cursor: "pointer",
          zIndex: "9",
        }}
      />
    </>
  );
};

export default Menu;
