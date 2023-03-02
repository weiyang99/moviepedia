import { Stack, Box } from '@mui/material'
import MovieCard from './MovieCard'

const Movies = ({ movies }) => {
    if (!movies?.length) return 'Loading...'

    return (
        <Stack
            direction='row'
            flexWrap='wrap'
            justifyContent='start'
            gap={2}
        >
            {movies.map((item, idx) => (
                <Box key={idx}>
                    {item.id && <MovieCard movie={item} />}
                    {/* {item.id.channelId && <ChannelCard channelDetail={item} />} */}
                </Box>
            ))}
        </Stack>
    )
}

export default Movies