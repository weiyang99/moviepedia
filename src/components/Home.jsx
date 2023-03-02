import { Stack, Typography } from '@mui/material'
import React from 'react'
import SearchBar from './SearchBar'

const Home = () => {
    return (
        <Stack
            direction='column'
            alignItems='center'
            justifyContent='center'
            height='100vh'
        >
            <Typography color='gold' variant='h1' mb={5}>Moviepedia</Typography>
            <SearchBar />
        </Stack>
    )
}

export default Home