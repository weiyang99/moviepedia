import { Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import noPic from './utils/nopic.jpg'

const NoPic = ({ movie }) => {
    return (
        <Card className='card' sx={{ width: 200, height: 300 }}>
            <CardMedia className='card_media' image={noPic} alt='noPic' style={{ width: '100%', height: '70%', marginTop: '2em' }}>
                <CardContent className='card_content_noPic'>{movie.l}</CardContent>
            </CardMedia>
        </Card>
    )
}

export default NoPic