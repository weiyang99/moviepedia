import { Box } from '@mui/material'
import React from 'react'
import noResult from './utils/noResult.jpg'

const NoResult = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '10em' }}>
            <img src={noResult} alt='no result' style={{ borderRadius: '50%' }} />
        </Box>
    )
}

export default NoResult