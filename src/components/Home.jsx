import { IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { REACT_APP_API_KEY } from '../config'
import { fetchFromAPI } from './fetchFromAPI'
import Footer from './Footer'
import Movies from './Movies'
import SearchBar from './SearchBar'
import Menu from './Menu';
import { KeyboardDoubleArrowUp, Movie } from '@mui/icons-material'

// change page


const Home = () => {
    const [moviesT, setMoviesT] = useState([])
    const [moviesP, setMoviesP] = useState([])
    const [moviesUC, setMoviesUC] = useState([])

    useEffect(() => {
        fetchFromAPI(`trending/movie/week?api_key=${REACT_APP_API_KEY}`)
            .then((data) => setMoviesT(data.results))

        fetchFromAPI(`movie/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`)
            .then((data) => setMoviesP(data.results))

        fetchFromAPI(`movie/upcoming?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`)
            .then((data) => setMoviesUC(data.results))
    }, [])

    return (
        <Stack
            direction='column'
            alignItems='center'
            justifyContent='center'
            p='0 8%'
            sx={{ backgroundColor: '#191919' }}
        >
            <Menu />

            <Stack className='fix' direction='row' alignItems='center' justifyContent='center' pt={2.5} pb={2.5} top={0} sx={{ backgroundColor: '#191919' }}>
                <IconButton sx={{ p: '10px', color: 'darkOrange' }}>
                    <Movie fontSize='large' />
                </IconButton>

                <Typography color='gold' variant='h4' fontWeight='bold' mr={3}>Moviepedia</Typography>

                <SearchBar />
            </Stack>

            <Typography
                variant='h4'
                fontWeight='bold'
                mb={5}
                mt={30}
                pl={2}
                pr={2}
                sx={{ color: 'white', borderLeft: '7px solid gold', borderRight: '7px solid gold' }}
            >
                Top 20 Trending
            </Typography>

            <Movies movies={moviesT} />

            <Typography
                variant='h4'
                fontWeight='bold'
                mb={5}
                mt={25}
                pl={2}
                pr={2}
                sx={{ color: 'white', borderLeft: '7px solid gold', borderRight: '7px solid gold' }}
            >
                Top 20 Popular
            </Typography>

            <Movies movies={moviesP} />

            <Typography
                variant='h4'
                fontWeight='bold'
                mb={5}
                mt={25}
                pl={2}
                pr={2}
                sx={{ color: 'white', borderLeft: '7px solid gold', borderRight: '7px solid gold' }}
            >
                Top 20 Upcoming
            </Typography>

            <Movies movies={moviesUC} />

            <IconButton type='button' onClick={() => window.scrollTo(0, 0)}>
                <KeyboardDoubleArrowUp fontSize='large' sx={{ position: 'fixed', bottom: '5%', right: '5%', backgroundColor: 'gold', borderRadius: '50%', color: 'black', p: '0.2em' }} />
            </IconButton>

            <Footer />
        </Stack >
    )
}

export default Home