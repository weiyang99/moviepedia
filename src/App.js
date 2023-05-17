import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import SearchFeed from './components/SearchFeed';
import MovieDetails from './components/MovieDetails';
import Review from './components/Review';
import Genre from './components/Genre';
import CastDetails from './components/CastDetails';

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
          <Route path='/movie/:id/:title' element={<MovieDetails />} />
          <Route path='/review/:id/:title' element={<Review />} />
          <Route path='/genre/:id/:genre' element={<Genre />} />
          <Route path='/cast/:id/:name' element={<CastDetails />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
