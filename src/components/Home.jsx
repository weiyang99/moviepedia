import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { REACT_APP_API_KEY } from '../config'
import { fetchFromAPI } from './fetchFromAPI'
import Footer from './Footer'
import Movies from './Movies'
import SearchBar from './SearchBar'

// change page


const Home = () => {
    const [moviesT, setMoviesT] = useState([])
    const [moviesP, setMoviesP] = useState([])
    const [moviesTR, setMoviesTR] = useState([])
    const [moviesUC, setMoviesUC] = useState([])

    useEffect(() => {
        fetchFromAPI(`trending/movie/week?api_key=${REACT_APP_API_KEY}`)
            .then((data) => setMoviesT(data.results))
    }, [])

    useEffect(() => {
        fetchFromAPI(`movie/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`)
            .then((data) => setMoviesP(data.results))
    }, [])

    useEffect(() => {
        fetchFromAPI(`movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`)
            .then((data) => setMoviesTR(data.results))
    }, [])

    useEffect(() => {
        fetchFromAPI(`movie/upcoming?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`)
            .then((data) => setMoviesUC(data.results))
    }, [])

    return (
        <Stack
            direction='column'
            alignItems='center'
            justifyContent='center'
        >
            <Box>
                <Typography color='gold' variant='h1' mt={5}>Moviepedia</Typography>
                <SearchBar />
            </Box>

            <Typography
                variant='h4'
                fontWeight='bold'
                mb={5}
                mt={5}
                sx={{ color: 'gold' }}
            >
                Trending
            </Typography>

            <Movies movies={moviesT} />

            <Typography
                variant='h4'
                fontWeight='bold'
                mb={5}
                mt={15}
                sx={{ color: 'gold' }}
            >
                Popular
            </Typography>

            <Movies movies={moviesP} />

            <Typography
                variant='h4'
                fontWeight='bold'
                mb={5}
                mt={15}
                sx={{ color: 'gold' }}
            >
                Top Rated
            </Typography>

            <Movies movies={moviesTR} />

            <Typography
                variant='h4'
                fontWeight='bold'
                mb={5}
                mt={15}
                sx={{ color: 'gold' }}
            >
                Upcoming
            </Typography>

            <Movies movies={moviesUC} />

            <Footer />
        </Stack>
    )
}

export default Home