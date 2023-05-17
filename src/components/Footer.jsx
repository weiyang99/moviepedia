import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box pb={3} pt={15} sx={{ backgroundColor: '#191919' }}>
            <Typography color='gray' textAlign='center'>
                Done By: Wei Yang
            </Typography>
        </Box>
    )
}

export default Footer