import React from 'react'
import { Card, CardContent, CardMedia } from '@mui/material'
import NoPic from './NoPic'

const MovieCard = ({ movie }) => {
    if (!movie.poster_path) return <NoPic movie={movie} />

    return (
        <Card className='card' sx={{ width: 200, height: 300 }}>
            <CardMedia className='card_media' image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} sx={{ height: '100%' }}>
                <CardContent className='card_content'>{movie.original_title}</CardContent>
            </CardMedia>
        </Card>
    )
}

export default MovieCard