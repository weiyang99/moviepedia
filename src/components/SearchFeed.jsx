import { useState, useEffect } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { Movie } from '@mui/icons-material'

import Movies from './Movies'
import { fetchFromAPI } from './fetchFromAPI'
import SearchBar from './SearchBar'
import { Stack } from '@mui/system'

const SearchFeed = () => {
    const { searchTerm } = useParams()
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchFromAPI(`?q=${searchTerm}`)
            .then((d) => setMovies(d))
    }, [searchTerm])

    console.log(movies)

    return (
        <>
            <Stack direction='row' alignItems='center' justifyContent='center'>
                <Link to='/'>
                    <IconButton type='submit' sx={{ p: '10px', color: 'darkOrange' }}>
                        <Movie fontSize='large' />
                    </IconButton>
                </Link>
                <SearchBar />
            </Stack>
            <Box
                p={2}
                sx={{ overflowY: 'auto', height: '90vh', flex: 2 }
                }
            >
                <Typography
                    variant='h4'
                    fontWeight='bold'
                    mb={2}
                    sx={{ color: 'white' }}
                >
                    Search Results for: <span style={{ color: 'gold' }}>{searchTerm}</span>
                </Typography>

                <Movies movies={movies} />
            </Box>
        </>
    )
}

export default SearchFeed