import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton, Stack } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (searchTerm) {
            navigate(`/search/${searchTerm}`)

            setSearchTerm('')
        }
    }

    return (
        <Stack direction="row" alignItems="center" justifyContent='center' pt={5} pb={5} sx={{ background: '#121212', top: 0 }}>
            <Paper
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    borderRadius: 10,
                    border: '1px solid #e3e3e3',
                    pl: 2,
                    pt: 0.5,
                    boxShadow: 'none',
                    width: 400
                }}
            >
                <input
                    className='search-bar'
                    placeholder='Search Movies...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ fontSize: '1.1rem' }}
                />
                <IconButton type='submit' sx={{ p: '7px', color: 'darkOrange' }}>
                    <Search />
                </IconButton>
            </Paper>
        </Stack >
    )
}

export default SearchBar