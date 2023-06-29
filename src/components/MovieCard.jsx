import React from 'react'
import { Card, CardContent, CardMedia } from '@mui/material'
// import NoPic from './NoPic'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    // if (!movie.poster_path) return <NoPic movie={movie} />

    return (
        <Link to={`/movie/${movie.id}/${movie.original_title}`}>
            <Card className='card' sx={{ width: { xs: 120, sm: 150, md: 180, lg: 200 }, height: { xs: 170, sm: 200, md: 250, lg: 300 } }}>
                <CardMedia className='card_media' image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} sx={{ height: '100%' }} />
            </Card>
        </Link >
    )
}

export default MovieCard