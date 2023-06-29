import React from 'react'
import { Box, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

const ReviewContent = ({ reviews }) => {
    return (
        <>
            {reviews.map((item, idx) => (
                <Box key={idx} border='1px solid white' borderRadius={1} p={3}>
                    <Box>
                        <Typography color='gold' variant='h5' fontSize={{ xs: '1.2rem', md: '1.5rem' }}>{item.author}</Typography>
                        <Typography color='white' variant='p' fontSize={{ xs: '0.65rem', md: '0.8rem' }}>@ {item.author_details.username}</Typography>
                    </Box>

                    <Typography color='white' variant='p' fontSize={{ xs: '0.8rem', md: '1rem' }} mt={2} sx={{ display: 'flex', alignItems: 'center' }}>Rating: {item.author_details.rating ? item.author_details.rating : '-'} <StarIcon sx={{ marginLeft: '0.2em', color: 'gold', fontSize: { xs: '1rem', md: '1.3rem' } }} /></Typography>

                    <Typography color='lightgrey' variant='h6' fontSize={{ xs: '0.65rem', sm: '0.75rem', md: '0.85rem', lg: '0.95rem' }} m='1em 0'>{item.content}</Typography>

                    <Typography color='darkgrey' variant='h6' fontSize={{ xs: '0.6rem', md: '0.7rem' }}>Last Updated: {item.updated_at}</Typography>
                </Box>
            ))}
        </>
    )
}

export default ReviewContent