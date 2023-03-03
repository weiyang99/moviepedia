import { Card, CardMedia } from '@mui/material'
import React from 'react'
import noPic from './utils/nopic.jpg'

const NoPic = () => {
    return (
        <Card sx={{ width: 200, height: 300 }}>
            <CardMedia image={noPic} alt='noPic' style={{ width: '100%', height: '70%', marginTop: '2em' }} />
        </Card>
    )
}

export default NoPic