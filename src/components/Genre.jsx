import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { Box, IconButton, Pagination, Stack, Typography } from '@mui/material'
import { Movie } from '@mui/icons-material'
import { Link, useParams } from 'react-router-dom'
import SearchBar from './SearchBar'
import { fetchFromAPI } from './fetchFromAPI'
import { REACT_APP_API_KEY } from '../config'
import Movies from './Movies'
import Footer from './Footer'

const Genre = () => {
    const { id, genre } = useParams()
    const [movies, setMovies] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [totalPages, setTotalPages] = useState()

    const handleChange = (e, p) => {
        e.preventDefault()
        setPageNumber(p)
    }

    useEffect(() => {
        fetchFromAPI(`movie/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`)
            .then((data) => setMovies(data.results));

        fetchFromAPI(`movie/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`)
            .then((data) => setTotalPages(data.total_pages));
    }, [genre, pageNumber])

    // for (let i = 0; i < movies.length; i++) {
    //     if (movies[i]?.genre_ids.includes(id)) {
    //         delete movies[i]
    //     }
    // }

    // console.log(id)
    // console.log(movies)

    return (
        <>
            <Menu />

            <Box
                p='0 8%'
                sx={{ flex: 2, height: movies.length < 8 ? '100vh' : 'fit-content', backgroundColor: '#191919' }}
            >
                <Stack direction='row' alignItems='center' justifyContent='center' pt={2.5}>
                    <Link to='/'>
                        <IconButton type='submit' sx={{ p: '10px', color: 'darkOrange' }}>
                            <Movie fontSize='large' />
                        </IconButton>
                    </Link>
                    <SearchBar />
                </Stack>

                <Typography
                    variant='h4'
                    fontWeight='bold'
                    mb={10}
                    pl={2}
                    sx={{ color: 'white', borderLeft: '7px solid gold' }}
                >
                    Genre: <span style={{ color: 'gold' }}>{genre}</span>
                </Typography>

                <Movies movies={movies} />

                <Pagination
                    count={totalPages}
                    onChange={handleChange}
                    color='primary'
                    sx={{ margin: 'auto', alignItems: 'center', width: 'fit-content', backgroundColor: 'darkGrey', marginTop: '5em', borderRadius: '2em' }}
                />

                <Footer />
            </Box>
        </>
    )
}

export default Genre