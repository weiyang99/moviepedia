import { Box, Stack, Typography } from '@mui/material'
import ListIcon from '@mui/icons-material/List';
import CancelIcon from '@mui/icons-material/Cancel';
import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from './fetchFromAPI';
import { REACT_APP_API_KEY } from '../config';

const Menu = () => {
    const [genres, setGenres] = useState([])
    const menu = document.querySelector('.menu')

    const handleClick = () => {
        menu.classList.toggle('menu-drop')
    };

    useEffect(() => {
        fetchFromAPI(`genre/movie/list?api_key=${REACT_APP_API_KEY}&language=en-US`)
            .then((data) => setGenres(data.genres))
    }, [])

    return (
        <>
            <Box className='menu'>
                <CancelIcon type='button' onClick={handleClick} fontSize='inherit' sx={{ color: 'white', position: 'absolute', top: '14%', left: '13%', fontSize: '3rem', cursor: 'pointer' }} />
                <Stack direction='row' justifyContent='center' alignItems='center' gap={5} flexWrap='wrap' p='10% 15%'>
                    {genres.map((item, idx) => (
                        <Typography key={idx} variant='h6' fontWeight='bold' color='white'>{item.name}</Typography>
                    ))}
                </Stack>
            </Box>

            <ListIcon type='button' onClick={handleClick} fontSize='inherit' sx={{ color: 'white', position: 'absolute', top: '7%', left: '13%', fontSize: '3rem', cursor: 'pointer' }} />
        </>
    )
}

export default Menu