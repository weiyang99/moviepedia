import { Stack, Box } from "@mui/material";
import ResultCard from "./ResultCard";
import Loader from "./Loader";

const Result = ({ res }) => {
  if (!res?.length) return <Loader />;

  for (let i = 0; i < res.length; i++) {
    if (!res[i]?.poster_path && !res[i]?.profile_path) {
      delete res[i];
    }
  }

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3}>
      {res.map((item, idx) => (
        <Box key={idx}>{item.id && <ResultCard result={item} />}</Box>
      ))}
    </Stack>
  );
};

export default Result;
