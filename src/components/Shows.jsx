import { Stack, Box } from "@mui/material";
import ShowCard from "./ShowCard";
import Loader from "./Loader";

const Shows = ({ shows }) => {
  if (!shows?.length) return <Loader />;

  for (let i = 0; i < shows.length; i++) {
    if (!shows[i]?.poster_path) {
      delete shows[i];
    }
  }

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3}>
      {shows.map((item, idx) => (
        <Box key={idx}>{item.id && <ShowCard show={item} />}</Box>
      ))}
    </Stack>
  );
};

export default Shows;
