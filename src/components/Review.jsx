import React, { useEffect, useState } from 'react'
import { Movie } from '@mui/icons-material'
import { Box, IconButton, Pagination, Stack } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import SearchBar from './SearchBar'
import { REACT_APP_API_KEY } from '../config'
import { fetchFromAPI } from './fetchFromAPI'
import ReviewContent from './ReviewContent'
import Footer from './Footer'

const Review = () => {
    const { id } = useParams()
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
    }, [id, pageNumber]);

    return (
        <Box
            p={2}
            sx={{ flex: 2, height: reviews.length <= 1 ? '100vh' : 'fit-content' }}
        >
            <Stack direction='row' alignItems='center' justifyContent='center'>
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

            <Footer />
        </Box>
    )
}

export default Review