import React, { useEffect, useState } from 'react'
import { Typography, Box, Stack, IconButton, CardMedia, Card } from '@mui/material'
import { Link, useParams } from 'react-router-dom';
import { REACT_APP_API_KEY } from '../config';
import { fetchFromAPI } from './fetchFromAPI';
import { Movie } from '@mui/icons-material';
import SearchBar from './SearchBar';
import Footer from './Footer';
import SimilarMovies from './SimilarMovies';
import Menu from './Menu';

const MovieDetails = () => {
    const { id } = useParams()
    const [movieDetails, setMovieDetails] = useState([])
    const [casts, setCasts] = useState([])

    useEffect(() => {
        fetchFromAPI(`movie/${id}?api_key=${REACT_APP_API_KEY}&language=en-US`)
            .then((data) => setMovieDetails(data))

        fetchFromAPI(`movie/${id}/credits?api_key=${REACT_APP_API_KEY}&language=en-US`)
            .then((data) => setCasts(data.cast))

        window.scrollTo(0, 0)
    }, [id]);


    return (
        <>
            <Menu />

            <Box>
                <Stack className='fix' direction='row' alignItems='center' justifyContent='center' pt={2.5} sx={{ backgroundColor: '#191919' }}>
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

                <Box pt={12}>
                    <Stack direction='row' alignItems='center' justifyContent='center' gap={5} py={25} position='relative'>

                        <Box className='bg' width='100%' height='100%' style={{ backgroundImage: movieDetails.backdrop_path && `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`, backgroundColor: movieDetails.backdrop_path || '#191919' }} />

                        <Card sx={{ width: 300, height: 400 }}>
                            <CardMedia image={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} sx={{ height: '100%' }}>
                            </CardMedia>
                        </Card >
                        <Stack direction='column' width='50%'>
                            <Typography variant='h4' fontWeight='bold' color='white'>{movieDetails.original_title}</Typography>
                            <Typography variant='p' color='lightgrey' fontSize='0.85rem' mt={2}>{movieDetails.runtime} mins</Typography>
                            <Typography variant='p' color='white' fontSize='0.9rem' fontWeight='700' mt={2}>Overview:</Typography>
                            <Typography variant='p' color='lightgrey' lineHeight='1.05rem' fontSize='0.85rem' mt={1}>{movieDetails.overview}</Typography>
                            <Stack direction='row' gap={2}>

                                <Stack direction='column' width='50%'>
                                    <Typography variant='p' color='white' fontSize='0.9rem' fontWeight='700' mt={2}>Released: <span className='details'>{movieDetails.release_date}</span></Typography>

                                    <Typography variant='p' color='white' fontSize='0.9rem' fontWeight='700' mt={2}>Genre: {movieDetails.genres?.map((item, idx) => (
                                        <span className='details' key={idx}>{item.name}. </span>))}</Typography>

                                    <Typography variant='p' color='white' fontSize='0.9rem' fontWeight='700' mt={2}>Casts: {casts.slice(0, 5)?.map((item, idx) => (
                                        <Link to={`/cast/${item.id}/${item.original_name}`} className='details-cast' key={idx} >{item.original_name}. </Link>))}</Typography>
                                </Stack>

                                <Stack direction='column' width='50%'>
                                    <Typography variant='p' color='white' fontSize='0.9rem' fontWeight='700' mt={2}>Duration: <span className='details'>{movieDetails.runtime} mins</span></Typography>

                                    <Typography variant='p' color='white' fontSize='0.9rem' fontWeight='700' mt={2}>Country: {movieDetails.production_countries?.map((item, idx) => (
                                        <span className='details' key={idx}>{item.name}. </span>))}</Typography>

                                    <Typography variant='p' color='white' fontSize='0.9rem' fontWeight='700' mt={2}>Production: {movieDetails.production_companies?.map((item, idx) => (
                                        <span className='details' key={idx}>{item.name}. </span>))}</Typography>
                                </Stack>

                            </Stack>

                            <Link style={{ textDecoration: 'none', marginTop: '1em' }} to={`/review/${id}/${movieDetails.original_title}`}>
                                <Typography className='button' variant='p' fontSize='0.9rem' fontWeight='700' color='gold'>
                                    Reviews
                                </Typography>
                            </Link>
                        </Stack>
                    </Stack >
                </Box >
                <Box sx={{ backgroundColor: '#191919' }}>
                    <SimilarMovies id={id} />
                </Box>

                <Footer />
            </Box >
        </>
    )
}

export default MovieDetails