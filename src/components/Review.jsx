import React, { useEffect, useState } from 'react'
import { ArrowBack, KeyboardDoubleArrowUp, Movie } from '@mui/icons-material'
import { Box, IconButton, Pagination, Stack } from '@mui/material'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SearchBar from './SearchBar'
import { REACT_APP_API_KEY } from '../config'
import { fetchFromAPI } from './fetchFromAPI'
import ReviewContent from './ReviewContent'
import Footer from './Footer'

const Review = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [reviews, setReviews] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [totalPages, setTotalPages] = useState()

    const handleChange = (e, p) => {
        e.preventDefault()
        setPageNumber(p)
    }

    useEffect(() => {
        fetchFromAPI(`movie/${id}/reviews?api_key=${REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`)
            .then((data) => setReviews(data.results));

        fetchFromAPI(`movie/${id}/reviews?api_key=${REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`)
            .then((data) => setTotalPages(data.total_pages));

        window.scrollTo(0, 0)
    }, [id, pageNumber]);

    return (
        <Box
            p={2}
            sx={{ flex: 2, height: reviews.length <= 1 ? '100vh' : 'fit-content' }}
        >
            <Stack direction='row' alignItems='center' justifyContent='center'>
                <IconButton type='button' onClick={() => navigate(-1)} sx={{ p: '10px', color: 'yellow' }}>
                    <ArrowBack fontSize='large' />
                </IconButton>
                <Link to='/'>
                    <IconButton type='submit' sx={{ p: '10px', color: 'darkOrange' }}>
                        <Movie fontSize='large' />
                    </IconButton>
                </Link>
                <SearchBar />
            </Stack>

            <Stack direction='column' justifyContent='center' gap={5} p='0 15%' mt={5}>
                <ReviewContent reviews={reviews} />
            </Stack>

            <Pagination
                count={totalPages}
                onChange={handleChange}
                color='primary'
                sx={{ margin: 'auto', alignItems: 'center', width: 'fit-content', backgroundColor: 'darkGrey', marginTop: '5em', borderRadius: '2em' }}
            />

            <IconButton type='button' onClick={() => window.scrollTo(0, 0)}>
                <KeyboardDoubleArrowUp fontSize='large' sx={{ position: 'fixed', bottom: '5%', right: '5%', backgroundColor: 'gold', borderRadius: '50%', color: 'black', p: '0.2em' }} />
            </IconButton>

            <Footer />
        </Box>
    )
}

export default Review