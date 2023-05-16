import React from 'react'
import { Box, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

const ReviewContent = ({ reviews }) => {
    return (
        <>
            {reviews.map((item, idx) => (
                <Box key={idx} border='1px solid white' borderRadius={1} p={3}>
                    <Box>
                        <Typography color='gold' variant='h5'>{item.author}</Typography>
                        <Typography color='white' variant='p' fontSize='0.8rem'>@ {item.author_details.username}</Typography>
                    </Box>

                    <Typography color='white' variant='p' mt={2} sx={{ display: 'flex', alignItems: 'center' }}>Rating: {item.author_details.rating ? item.author_details.rating : <>-</>} <StarIcon fontSize='small' sx={{ marginLeft: '0.2em', color: 'gold' }} /></Typography>

                    <Typography color='lightgrey' variant='h6' fontSize='0.9rem' m='1em 0'>{item.content}</Typography>

                    <Typography color='darkgrey' variant='h6' fontSize='0.9rem'>{item.updated_at}</Typography>
                </Box>
            ))}
        </>
    )
}

export default ReviewContent