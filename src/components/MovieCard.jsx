import React from 'react'
import { Card, CardContent, CardMedia } from '@mui/material'
import NoPic from './NoPic'

const MovieCard = ({ movie }) => {
    if (!movie.i) return <NoPic movie={movie} />

    return (
        <Card className='card' sx={{ width: 200, height: 300 }}>
            <CardMedia className='card_media' image={movie.i.imageUrl} sx={{ width: '100%', height: '100%' }}>
                <CardContent className='card_content'>{movie.l}</CardContent>
            </CardMedia>
        </Card>
    )
}

export default MovieCard