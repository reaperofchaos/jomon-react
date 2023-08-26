import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  //   const error: unknown = useRouteError();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
      <Link to="/">Home</Link>
    </Box>
  );
};

export default ErrorPage;
