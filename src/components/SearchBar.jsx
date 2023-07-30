import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Stack } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}?page=1`);

      setSearchTerm("");
    }
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      mt={{ xs: 12, sm: 5 }}
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
          placeholder="Search Shows..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ fontSize: "1.1rem" }}
        />
        <IconButton type="submit" sx={{ p: "0px", color: "darkOrange" }}>
          <Search />
        </IconButton>
      </Paper>
    </Stack>
  );
};

export default SearchBar;
