import { Stack, Box } from '@mui/material'
import MovieCard from './MovieCard'
import Loader from './Loader'

const Movies = ({ movies }) => {
    if (!movies?.length) return <Loader />

    for (let i = 0; i < movies.length; i++) {
        if (!movies[i]?.poster_path) {
            delete movies[i]
        }
    }

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