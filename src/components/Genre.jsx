import React, { useContext, useEffect, useState } from "react";
import Menu from "./Menu";
import {
  Box,
  FormControl,
  InputLabel,
  NativeSelect,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { fetchFromAPI } from "./fetchFromAPI";
import Shows from "./Shows";
import Footer from "./Footer";
import { Type } from "./Context";

const Genre = () => {
  const { id, genre } = useParams();
  const [shows, setShows] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [filter, setFilter] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isTv, setIsTv } = useContext(Type);

  const location = useLocation();
  const pageN = parseInt(location.search.substring(6));

  const handleChange = (e, p) => {
    e.preventDefault();
    setSearchParams({ page: p });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
    setSearchParams({ page: 1 });
  };

  useEffect(() => {
    if (!isTv) {
      fetchFromAPI(
        `discover/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&sort_by=${
          !filter ? "popularity.desc" : filter
        }&page=${pageN}&with_genres=${id}`
      ).then((data) => setShows(data.results));
      fetchFromAPI(
        `discover/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&sort_by=${
          !filter ? "popularity.desc" : filter
        }&page=${pageN}&with_genres=${id}`
      ).then((data) => setTotalPages(data.total_pages));
    } else {
      fetchFromAPI(
        `discover/tv?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&sort_by=${
          !filter ? "popularity.desc" : filter
        }&page=${pageN}&with_genres=${id}`
      ).then((data) => setShows(data.results));
      fetchFromAPI(
        `discover/tv?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&sort_by=${
          !filter ? "popularity.desc" : filter
        }&page=${pageN}&with_genres=${id}`
      ).then((data) => setTotalPages(data.total_pages));
    }
  }, [id, filter, pageN]);

  return (
    <>
      <Menu />

      <Box>
        <Stack
          className="fix"
          direction="row"
          alignItems="center"
          justifyContent="center"
          pt={2.5}
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

        <Box
          p={{ xs: "30% 8% 0 8%", sm: "20% 8% 0 8%", md: "15% 8% 0 8%" }}
          sx={{
            flex: 2,
            height: shows.length < 8 ? "100vh" : "fit-content",
            backgroundColor: "#191919",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            pl={2}
            fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.5rem", lg: "1.8rem" }}
            sx={{ color: "white", borderLeft: "7px solid gold" }}
          >
            Genre: <span style={{ color: "gold" }}>{genre}</span>
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={8}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              pl={2}
              fontSize={{
                xs: "1rem",
                sm: "1.2rem",
                md: "1.5rem",
                lg: "1.8rem",
              }}
              sx={{ color: "white", borderLeft: "7px solid gold" }}
            >
              Page: <span style={{ color: "gold" }}>{pageN}</span>
            </Typography>

            <FormControl autoWidth>
              <InputLabel
                variant="standard"
                sx={{
                  color: "orange",
                  fontSize: { xs: "1rem", sm: "1.2rem" },
                  fontWeight: "bold",
                }}
              >
                Sort By:
              </InputLabel>
              <NativeSelect
                defaultValue={!filter ? "popularity.desc" : filter}
                sx={{ color: "white" }}
                onChange={handleClick}
              >
                <option
                  style={{ backgroundColor: "#121212" }}
                  value={"popularity.desc"}
                >
                  Popularity
                </option>
                <option
                  style={{ backgroundColor: "#121212" }}
                  value={"release_date.desc"}
                >
                  Release Date
                </option>
                <option
                  style={{ backgroundColor: "#121212" }}
                  value={"vote_count.desc"}
                >
                  Vote Count
                </option>
              </NativeSelect>
            </FormControl>
          </Stack>

          <Shows shows={shows} />

          <Pagination
            count={totalPages}
            onChange={handleChange}
            page={pageN}
            color="primary"
            sx={{
              margin: "auto",
              alignItems: "center",
              width: "fit-content",
              backgroundColor: "darkGrey",
              marginTop: "5em",
              borderRadius: "1em",
            }}
          />

          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Genre;
