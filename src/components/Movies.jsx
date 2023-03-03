import { Stack, Box } from '@mui/material'
import Loader from './Loader'
import MovieCard from './MovieCard'

const Movies = ({ movies }) => {
    if (!movies?.length) return <Loader />

    return (
        <Stack
            direction='row'
            flexWrap='wrap'
            justifyContent='center'
            gap={3}
        >
            {movies.map((item, idx) => (
                <Box key={idx}>
                    {item.id && <MovieCard movie={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Movies