import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Type } from "./Context";

const Header = () => {
  const { isTv, setIsTv } = useContext(Type);

  return (
    <Stack
      className="fix"
      direction="row"
      alignItems="center"
      justifyContent="center"
      pt={2.5}
      ml={8}
      top={0}
      sx={{ backgroundColor: "#191919" }}
    >
      <Link to="/" style={{ textDecoration: "none", textAlign: "center" }}>
        {isTv ? (
          <Typography color="gold" variant="h4" fontWeight="bold">
            TVpedia
          </Typography>
        ) : (
          <Typography color="gold" variant="h4" fontWeight="bold">
            Moviepedia
          </Typography>
        )}
      </Link>

      {window.location.pathname === "/" && isTv ? (
        <button className="btn" onClick={() => setIsTv(false)}>
          Movie
        </button>
      ) : (
        <button className="btn" onClick={() => setIsTv(true)}>
          Tv
        </button>
      )}
    </Stack>
  );
};

export default Header;
