import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { Box, FormControl, IconButton, InputLabel, NativeSelect, Pagination, Stack, Typography } from '@mui/material'
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
    const [filter, setFilter] = useState('popularity.desc')

    const handleChange = (e, p) => {
        e.preventDefault()
        setPageNumber(p)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setFilter(e.target.value)
    }

    useEffect(() => {
        fetchFromAPI(`discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&sort_by=${filter}&page=${pageNumber}&with_genres=${id}`)
            .then((data) => setMovies(data.results));

        fetchFromAPI(`discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&sort_by=${filter}&page=${pageNumber}&with_genres=${id}`)
            .then((data) => setTotalPages(data.total_pages));
    }, [id, pageNumber, filter])

    useEffect(() => {
        setPageNumber(1)
    }, [id, filter])

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
                    pl={2}
                    sx={{ color: 'white', borderLeft: '7px solid gold' }}
                >
                    Genre: <span style={{ color: 'gold' }}>{genre}</span>
                </Typography>

                <Stack direction='row' justifyContent='space-between' alignItems='center' mb={10} mt={2}>
                    <Typography
                        variant='h4'
                        fontWeight='bold'
                        pl={2}
                        sx={{ color: 'white', borderLeft: '7px solid gold' }}
                    >
                        Page: <span style={{ color: 'gold' }}>{pageNumber}</span>
                    </Typography>

                    <FormControl autoWidth>
                        <InputLabel variant="standard" sx={{ color: 'orange', fontSize: '1.3rem', fontWeight: 'bold' }}>
                            Sort By:
                        </InputLabel>
                        <NativeSelect
                            defaultValue={'popularity.desc'}
                            sx={{ color: 'white' }}
                            onClick={handleClick}
                        >
                            <option style={{ backgroundColor: '#121212' }} value={'popularity.desc'} >Popularity</option>
                            <option style={{ backgroundColor: '#121212' }} value={'release_date.desc'} >Release Date</option>
                            <option style={{ backgroundColor: '#121212' }} value={'vote_count.desc'} >Vote Count</option>
                        </NativeSelect>
                    </FormControl>
                </Stack>

                <Movies movies={movies} />

                <Pagination
                    count={totalPages}
                    onChange={handleChange}
                    page={pageNumber}
                    color='primary'
                    sx={{ margin: 'auto', alignItems: 'center', width: 'fit-content', backgroundColor: 'darkGrey', marginTop: '5em', borderRadius: '2em' }}
                />

                <Footer />
            </Box >
        </>
    )
}

export default Genre