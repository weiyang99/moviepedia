import React from 'react'
import { Card, CardMedia } from '@mui/material'
import NoPic from './NoPic'

const MovieCard = ({ movie }) => {
    if (!movie.i) return <NoPic />

    return (
        <Card sx={{ width: 200, height: 300 }}>
            <CardMedia image={movie.i.imageUrl} sx={{ width: '100%', height: '100%' }} />
        </Card>
    )
}

export default MovieCard