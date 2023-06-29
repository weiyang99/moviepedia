import React, { useEffect, useState } from 'react'
import { KeyboardDoubleArrowUp, Movie } from '@mui/icons-material'
import { Box, IconButton, Pagination, Stack, Typography } from '@mui/material'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import SearchBar from './SearchBar'
import { REACT_APP_API_KEY } from '../config'
import { fetchFromAPI } from './fetchFromAPI'
import ReviewContent from './ReviewContent'
import Footer from './Footer'
import Menu from './Menu'

const Review = () => {
    const { id } = useParams()
    const [reviews, setReviews] = useState([])
    const [totalPages, setTotalPages] = useState()
    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation()
    const pageN = parseInt(location.search.substring(6))

    const handleChange = (e, p) => {
        e.preventDefault()
        setSearchParams({ page: p })
    }

    useEffect(() => {
        fetchFromAPI(`movie/${id}/reviews?api_key=${REACT_APP_API_KEY}&language=en-US&page=${pageN}`)
            .then((data) => setReviews(data.results));

        fetchFromAPI(`movie/${id}/reviews?api_key=${REACT_APP_API_KEY}&language=en-US&page=${pageN}`)
            .then((data) => setTotalPages(data.total_pages));

        window.scrollTo(0, 0)

    }, [id, pageN]);

    return (

        <>
            <Menu />
            <Box
                pt={2}
                sx={{ height: reviews.length <= 1 ? '100vh' : 'fit-content', backgroundColor: '#191919' }}
            >
                <Stack className='fix' direction='row' alignItems='center' justifyContent='center' pt={2.5} mt='-1em' sx={{ backgroundColor: '#191919' }}>
                    {/* <Link to='/'>
                        <IconButton type='submit' sx={{ p: '10px', color: 'darkOrange' }}>
                            <Movie fontSize='large' />
                        </IconButton>
                    </Link> */}
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Typography color='gold' variant='h4' fontWeight='bold' >Moviepedia</Typography>
                    </Link>
                </Stack>

                <Box p={{ xs: '30% 8% 0 8%', sm: '17% 8% 0 8%', md: '12% 8% 0 8%' }}>
                    <Typography
                        variant='h4'
                        fontWeight='bold'
                        pl={2}
                        fontSize={{ xs: '1rem', sm: '1.2rem', md: '1.5rem', lg: '1.8rem' }}
                        sx={{ color: 'white', borderLeft: '7px solid gold' }}
                    >
                        Page: <span style={{ color: 'gold' }}>{pageN}</span>
                    </Typography>
                </Box>

                <Stack direction='column' justifyContent='center' gap={5} p='0 15% 0 15%' mt={5}>
                    <ReviewContent reviews={reviews} />
                </Stack>

                <Pagination
                    count={totalPages}
                    onChange={handleChange}
                    page={pageN}
                    color='primary'
                    sx={{ margin: 'auto', alignItems: 'center', width: 'fit-content', backgroundColor: 'darkGrey', marginTop: '5em', borderRadius: '1em' }}
                />

                <IconButton type='button' onClick={() => window.scrollTo(0, 0)}>
                    <KeyboardDoubleArrowUp fontSize='large' sx={{ position: 'fixed', bottom: '5%', right: '5%', backgroundColor: 'gold', borderRadius: '50%', color: 'black', p: '0.2em', fontSize: { xs: '1.5rem', md: '1.8rem' } }} />
                </IconButton>

                <Footer />
            </Box>
        </>
    )
}

export default Review