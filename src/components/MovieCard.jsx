import React from 'react'
import { Card, CardMedia } from '@mui/material'

const MovieCard = ({ movie: { i: { imageUrl } } }) => {
    return (
        <Card sx={{ width: 200, height: 300 }}>
            <CardMedia image={imageUrl} sx={{ width: '100%', height: '100%' }} />
        </Card>
    )
}

export default MovieCard