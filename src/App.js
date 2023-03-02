import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SearchFeed from './components/SearchFeed';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
          {/* <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} /> */}
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
