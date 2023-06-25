import { useState, useEffect } from 'react'
import { Box, IconButton, Typography, Stack, Pagination } from '@mui/material'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
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
    const [totalPages, setTotalPages] = useState()
    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation()
    const pageN = parseInt(location.search.substring(6))

    const handleChange = (e, p) => {
        e.preventDefault()
        setSearchParams({ page: p })
    }

    useEffect(() => {
        fetchFromAPI(`search/movie?api_key=${REACT_APP_API_KEY}&query=${searchTerm}&language=en-US&page=${pageN}`)
            .then((data) => setMovies(data.results));

        fetchFromAPI(`search/movie?api_key=${REACT_APP_API_KEY}&query=${searchTerm}&language=en-US&page=${pageN}`)
            .then((data) => setTotalPages(data.total_pages));

    }, [searchTerm, pageN])

    return (
        <>
            <Menu />

            <Box>
                <Stack className='fix' direction='row' alignItems='center' justifyContent='center' pt={2.5} bgcolor='#191919'>
                    <Link to='/'>
                        <IconButton type='submit' sx={{ p: '10px', color: 'darkOrange' }}>
                            <Movie fontSize='large' />
                        </IconButton>
                    </Link>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Typography color='gold' variant='h4' fontWeight='bold' mr={3}>Moviepedia</Typography>
                    </Link>
                    <SearchBar />
                </Stack>

                <Box p='10% 8% 0 8%' sx={{ flex: 2, height: movies.length < 8 ? '100vh' : 'fit-content', backgroundColor: '#191919' }}>
                    <Typography
                        variant='h4'
                        fontWeight='bold'
                        mb={2}
                        pl={2}
                        sx={{ color: 'white', borderLeft: '7px solid gold' }}
                    >
                        Search Results for: <span style={{ color: 'gold' }}>{searchTerm}</span>
                    </Typography>

                    <Typography
                        variant='h4'
                        fontWeight='bold'
                        pl={2}
                        mb={10}
                        sx={{ color: 'white', borderLeft: '7px solid gold' }}
                    >
                        Page: <span style={{ color: 'gold' }}>{pageN}</span>
                    </Typography>

                    <Movies movies={movies} />

                    <Pagination
                        count={totalPages}
                        onChange={handleChange}
                        page={pageN}
                        color='primary'
                        sx={{ margin: 'auto', alignItems: 'center', width: 'fit-content', backgroundColor: 'darkGrey', marginTop: '5em', borderRadius: '2em' }}
                    />

                    <Footer />
                </Box>
            </Box >
        </>
    )

}

export default SearchFeed