import React from "react";
import { Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

const ShowCard = ({ show }) => {
  return (
    <Link to={`/show/${show.id}/${show.original_title}`}>
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
