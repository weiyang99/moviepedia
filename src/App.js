import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import SearchShowFeed from "./components/SearchShowFeed";
import SearchCastFeed from "./components/SearchCastFeed";
import ShowDetails from "./components/ShowDetails";
import Review from "./components/Review";
import Genre from "./components/Genre";
import CastDetails from "./components/CastDetails";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/searchShow/:searchShowTerm" element={<SearchShowFeed />} />
          <Route path="/searchCast/:searchCastTerm" element={<SearchCastFeed />} />
          <Route path="/show/:id/:title" element={<ShowDetails />} />
          <Route path="/review/:id/:title" element={<Review />} />
          <Route path="/genre/:id/:genre" element={<Genre />} />
          <Route path="/cast/:id/:name" element={<CastDetails />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
