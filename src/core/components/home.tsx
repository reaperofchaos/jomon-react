import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Home = () => (
  <Box sx={{ background: "green" }}>
    <Typography
      variant="h3"
      sx={{
        marginBottom: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      Jomon Database
    </Typography>
  </Box>
);

export default Home;
