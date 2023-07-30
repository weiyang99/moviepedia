import React, { useContext } from "react";
import { Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { Type } from "./Context";

const ShowCard = ({ show }) => {
  const { isTv, setIsTv } = useContext(Type);

  return (
    <Link to={`/show/${show.id}/${!isTv ? show.original_title : show.name}`}>
      <Card
        className="card"
        sx={{
          width: { xs: 120, sm: 150, md: 180, lg: 200 },
          height: { xs: 170, sm: 200, md: 250, lg: 300 },
        }}
      >
        <CardMedia
          className="card_media"
          image={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
          sx={{ height: "100%" }}
        />
      </Card>
    </Link>
  );
};

export default ShowCard;
