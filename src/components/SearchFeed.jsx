import { useState, useEffect } from 'react'
import { Box, IconButton, Typography, Stack, Pagination } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { Movie } from '@mui/icons-material'

import Movies from './Movies'
import { fetchFromAPI } from './fetchFromAPI'
import { REACT_APP_API_KEY } from '../config'
import SearchBar from './SearchBar'
import Footer from './Footer'
import Menu from './Menu'

const SearchFeed = () => {
    const { searchTerm } = useParams()
    const [movies, setMovies] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [totalPages, setTotalPages] = useState()

    const handleChange = (e, p) => {
        e.preventDefault()
        setPageNumber(p)
    }

    useEffect(() => {
        fetchFromAPI(`search/movie?api_key=${REACT_APP_API_KEY}&query=${searchTerm}&language=en-US&page=${pageNumber}`)
            .then((data) => setMovies(data.results));

        fetchFromAPI(`search/movie?api_key=${REACT_APP_API_KEY}&query=${searchTerm}&language=en-US&page=${pageNumber}`)
            .then((data) => setTotalPages(data.total_pages));
    }, [searchTerm, pageNumber])

    return (
        <>
            <Menu />

            <Box
                p='0 8%'
                sx={{ flex: 2, height: movies.length < 8 ? '100vh' : 'fit-content' }}
            >
                <Stack direction='row' alignItems='center' justifyContent='center' pt={2.5}>
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
                    pl={2}
                    sx={{ color: 'white', borderLeft: '7px solid gold' }}
                >
                    Search Results for: <span style={{ color: 'gold' }}>{searchTerm}</span>
                </Typography>

                <Movies movies={movies} />

                <Pagination
                    count={totalPages}
                    onChange={handleChange}
                    color='primary'
                    sx={{ margin: 'auto', alignItems: 'center', width: 'fit-content', backgroundColor: 'darkGrey', marginTop: '5em', borderRadius: '2em' }}
                />

                <Footer />
            </Box >
        </>
    )

}

export default SearchFeed