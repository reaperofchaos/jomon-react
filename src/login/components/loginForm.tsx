import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuthorized } from "../../core/reducers/configuration.reducers";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const submit = () => {
    console.log("something was clicked");
    dispatch(getAuthorized({ user, password }));
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "15px",
      }}
    >
      <Typography variant="h6">Login Form</Typography>
      <FormControl>
        <InputLabel htmlFor="user-name">Username: </InputLabel>
        <Input
          id="user-name"
          aria-describedby="my-helper-text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <FormHelperText id="my-helper-text">
          Type your user name.
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password: </InputLabel>
        <Input
          id="user-name"
          aria-describedby="my-helper-text"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormHelperText id="my-helper-text">Type your password.</FormHelperText>
      </FormControl>
      <Button onClick={() => submit()}>Submit</Button>
    </Box>
  );
};

export default LoginForm;
