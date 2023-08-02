import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Stack } from "@mui/material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCast, setSearchCast] = useState(sessionStorage.getItem('cast'));
  const navigate = useNavigate();

  useEffect(() => {
    if (searchCast === undefined || searchCast === null) {
      setSearchCast(false);
    }

    setSearchCast(JSON.parse(sessionStorage.getItem('cast')));

  }, []);

  useEffect(() => {
    sessionStorage.setItem('cast', JSON.stringify(searchCast));
  }, [searchCast]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm && !searchCast) {
      navigate(`/searchShow/${searchTerm}?page=1`);

      setSearchTerm("");
    }
    else {
      navigate(`/searchCast/${searchTerm}?page=1`);

      setSearchTerm("");
    }
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      mt={{ xs: 12, sm: 6 }}
      sx={{
        top: 0,
      }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          borderRadius: 10,
          border: "1px solid #e3e3e3",
          boxShadow: "none",
          width: 250,
        }}
      >
        <input
          className="search-bar"
          placeholder={searchCast ? "Search Cast..." : "Search Show..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ fontSize: "1.1rem" }}
        />
      </Paper>
      {
        !searchCast
          ?
          <button className="btnCast" style={{ margin: "1em 0 0 0" }} onClick={() => setSearchCast(true)} >Search Cast</button>
          :
          <button className="btnShow" style={{ margin: "1em 0 0 0" }} onClick={() => setSearchCast(false)} >Search Show</button>
      }
    </Stack>
  );
};

export default SearchBar;
