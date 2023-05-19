import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { REACT_APP_API_KEY } from '../config'
import { fetchFromAPI } from './fetchFromAPI'
import Movies from './Movies'

const SimilarMovies = ({ id }) => {
    const [similarMovies, setSimilarMovies] = useState([])

    useEffect(() => {
        fetchFromAPI(`movie/${id}/recommendations?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`)
            .then((data) => setSimilarMovies(data.results))
    }, [id])

    return (
        <Box padding='0 8%' pt={15}>
            <Typography
                variant='h4'
                fontWeight='bold'
                mb={5}
                pl={2}
                sx={{ color: 'white', borderLeft: '7px solid gold' }}
            >
                Recommendations
            </Typography>
            <Movies movies={similarMovies} />
        </Box>
    )
}

export default SimilarMovies