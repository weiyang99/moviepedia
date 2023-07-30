import React, { useContext, useEffect, useState } from "react";
import { Typography, Box, Stack, CardMedia, Card } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "./fetchFromAPI";
import Footer from "./Footer";
import SimilarShows from "./SimilarShows";
import Menu from "./Menu";
import { Type } from "./Context";

const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState([]);
  const [casts, setCasts] = useState([]);
  const { isTv, setIsTv } = useContext(Type);

  useEffect(() => {
    if (!isTv) {
      fetchFromAPI(
        `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      ).then((data) => setShowDetails(data));

      fetchFromAPI(
        `movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      ).then((data) => setCasts(data.cast));
    } else {
      fetchFromAPI(
        `tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      ).then((data) => setShowDetails(data));

      fetchFromAPI(
        `tv/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      ).then((data) => setCasts(data.cast));
    }

    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Menu />

      <Box>
        <Stack
          className="fix"
          direction="row"
          alignItems="center"
          justifyContent="center"
          // pt={{ xs: 4, md: 5, lg: 2.5 }}
          pt={2}
          sx={{ backgroundColor: "#191919" }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
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
        </Stack>

        <Box pt={10}>
          <Stack
            direction={{ md: "row" }}
            alignItems="center"
            justifyContent="center"
            gap={5}
            py={{ xs: 5, md: 25 }}
            position="relative"
          >
            <Box
              className="bg"
              width="100%"
              height="100%"
              style={{
                backgroundImage:
                  showDetails.backdrop_path &&
                  `url(https://image.tmdb.org/t/p/original/${showDetails.backdrop_path})`,
                backgroundColor: showDetails.backdrop_path || "#191919",
              }}
            />

            <Card
              sx={{
                width: { xs: 200, sm: 250, md: 270 },
                height: { xs: 300, sm: 350, md: 400 },
              }}
            >
              <CardMedia
                image={`https://image.tmdb.org/t/p/w500${showDetails.poster_path}`}
                sx={{ height: "100%" }}
              ></CardMedia>
            </Card>
            <Stack direction="column" width={{ xs: "75%", md: "50%" }}>
              <Typography
                variant="h4"
                fontSize={{ xs: "2rem", md: "2.5rem" }}
                fontWeight="bold"
                color="white"
              >
                {isTv ? showDetails.name : showDetails.original_title}
              </Typography>

              {isTv
                ?
                <Typography
                  variant="p"
                  color="lightgrey"
                  fontSize="0.85rem"
                  mt={2}
                >
                  <p><span style={{ color: "white", fontWeight: '700' }}>No. of Seasons:</span> {showDetails.number_of_seasons}</p>
                  <p><span style={{ color: "white", fontWeight: '700' }}>Total Episodes:</span> {showDetails.number_of_episodes}</p>
                </Typography>
                :
                <Typography
                  variant="p"
                  color="lightgrey"
                  fontSize="0.85rem"
                  mt={2}
                >
                  {showDetails.runtime} mins
                </Typography>
              }

              <Typography
                variant="p"
                color="white"
                fontSize={{ xs: "0.85rem", sm: "0.9rem" }}
                fontWeight="700"
                mt={2}
              >
                Overview:
              </Typography>

              <Typography
                variant="p"
                color="lightgrey"
                lineHeight="1.05rem"
                fontSize={{ xs: "0.7rem", sm: "0.85rem" }}
                mt={1}
              >
                {showDetails.overview}
              </Typography>
              <Stack direction="row" gap={2}>
                <Stack direction="column" width="50%">
                  <Typography
                    variant="p"
                    color="white"
                    fontSize={{ xs: "0.85rem", sm: "0.9rem" }}
                    fontWeight="700"
                    mt={2}
                  >
                    Released:{" "}
                    {
                      isTv
                        ? <span className="details">{showDetails.first_air_date} - {showDetails.last_air_date}</span>
                        : <span className="details">{showDetails.release_date}</span>
                    }
                  </Typography>

                  <Typography
                    variant="p"
                    color="white"
                    fontSize={{ xs: "0.85rem", sm: "0.9rem" }}
                    fontWeight="700"
                    mt={2}
                  >
                    Genre:{" "}
                    {showDetails.genres?.map((item, idx) => (
                      <span className="details" key={idx}>
                        {item.name}.{" "}
                      </span>
                    ))}
                  </Typography>

                  <Typography
                    variant="p"
                    color="white"
                    fontSize={{ xs: "0.85rem", sm: "0.9rem" }}
                    fontWeight="700"
                    mt={2}
                  >
                    Casts:{" "}
                    {casts.slice(0, 5)?.map((item, idx) => (
                      <Link
                        to={`/cast/${item.id}/${item.original_name}`}
                        className="details-cast"
                        key={idx}
                      >
                        {item.original_name}.{" "}
                      </Link>
                    ))}
                  </Typography>
                </Stack>

                <Stack direction="column" width="50%">
                  <Typography
                    variant="p"
                    color="white"
                    fontSize={{ xs: "0.85rem", sm: "0.9rem" }}
                    fontWeight="700"
                    mt={2}
                  >
                    Duration:{" "}
                    {isTv
                      ?
                      <span className="details">{showDetails.episode_run_time} mins / episode </span>
                      :
                      <span className="details">{showDetails.runtime} mins</span>
                    }
                  </Typography>

                  <Typography
                    variant="p"
                    color="white"
                    fontSize={{ xs: "0.85rem", sm: "0.9rem" }}
                    fontWeight="700"
                    mt={2}
                  >
                    Country:{" "}
                    {showDetails.production_countries?.map((item, idx) => (
                      <span className="details" key={idx}>
                        {item.name}.{" "}
                      </span>
                    ))}
                  </Typography>

                  <Typography
                    variant="p"
                    color="white"
                    fontSize={{ xs: "0.85rem", sm: "0.9rem" }}
                    fontWeight="700"
                    mt={2}
                  >
                    Production:{" "}
                    {showDetails.production_companies?.map((item, idx) => (
                      <span className="details" key={idx}>
                        {item.name}.{" "}
                      </span>
                    ))}
                  </Typography>
                </Stack>
              </Stack>

              <Link
                style={{ textDecoration: "none", marginTop: "1em" }}
                to={`/review/${id}/${showDetails.original_title}?page=1`}
              >
                <Typography
                  className="button"
                  variant="p"
                  fontSize={{ xs: "0.85rem", sm: "0.9rem" }}
                  fontWeight="700"
                  color="gold"
                >
                  Reviews
                </Typography>
              </Link>
            </Stack>
          </Stack>
        </Box>
        <Box sx={{ backgroundColor: "#191919" }}>
          <SimilarShows id={id} />
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default ShowDetails;
