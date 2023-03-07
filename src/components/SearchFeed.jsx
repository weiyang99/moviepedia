import { useState, useEffect } from 'react'
import { Box, IconButton, Typography, Stack } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { Movie } from '@mui/icons-material'

import Movies from './Movies'
import { fetchFromAPI } from './fetchFromAPI'
import { REACT_APP_API_KEY } from '../config'
import SearchBar from './SearchBar'
import Footer from './Footer'

const SearchFeed = () => {
    const { searchTerm } = useParams()
    const [movies, setMovies] = useState([])

    // change the page

    useEffect(() => {
        fetchFromAPI(`search/movie?api_key=${REACT_APP_API_KEY}&query=${searchTerm}&language=en-US&page=1`)
            .then((data) => setMovies(data.results))
    }, [searchTerm])

    return (
        <Box
            p={2}
            sx={{ flex: 2 }
            }
        >
            <Stack direction='row' alignItems='center' justifyContent='center'>
                <Link to='/'>
                    <IconButton type='submit' sx={{ p: '10px', color: 'darkOrange' }}>
                        <Movie fontSize='large' />
                    </IconButton>
                </Link>
                <SearchBar />
            </Stack>
            <Typography
                variant='h4'
                fontWeight='bold'
                mb={10}
                sx={{ color: 'white' }}
            >
                Search Results for: <span style={{ color: 'gold' }}>{searchTerm}</span>
            </Typography>

            <Movies movies={movies} />
            <Footer />
        </Box>
    )

}

export default SearchFeed