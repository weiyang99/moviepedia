import { useState, useEffect, useContext } from "react";
import { Box, Typography, Stack, Pagination } from "@mui/material";
import { Link, useLocation, useParams, useSearchParams, } from "react-router-dom";
import Result from "./Result";
import { fetchFromAPI } from "./fetchFromAPI";
import Footer from "./Footer";
import Menu from "./Menu";
import { Type } from "./Context";

const SearchShowFeed = () => {
  const { searchShowTerm } = useParams();
  const [shows, setShows] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isTv, setIsTv } = useContext(Type);

  const location = useLocation();
  const pageN = parseInt(location.search.substring(6));

  const handleChange = (e, p) => {
    e.preventDefault();
    setSearchParams({ page: p });
  };

  useEffect(() => {
    if (!isTv) {
      fetchFromAPI(
        `search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchShowTerm}&language=en-US&page=${pageN}`
      ).then((data) => setShows(data.results));

      fetchFromAPI(
        `search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchShowTerm}&language=en-US&page=${pageN}`
      ).then((data) => setTotalPages(data.total_pages));
    } else {
      fetchFromAPI(
        `search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${searchShowTerm}&language=en-US&page=${pageN}`
      ).then((data) => setShows(data.results));

      fetchFromAPI(
        `search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${searchShowTerm}&language=en-US&page=${pageN}`
      ).then((data) => setTotalPages(data.total_pages));
    }

    window.scrollTo(0, 0);
  }, [searchShowTerm, pageN]);

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
          bgcolor="#191919"
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
            Search Results for:{" "}
            <span style={{ color: "gold" }}>{searchShowTerm}</span>
          </Typography>

          <Typography
            variant="h4"
            fontWeight="bold"
            pl={2}
            mb={8}
            fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.5rem", lg: "1.8rem" }}
            sx={{ color: "white", borderLeft: "7px solid gold" }}
          >
            Page: <span style={{ color: "gold" }}>{pageN}</span>
          </Typography>

          <Result res={shows} />

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

export default SearchShowFeed;
