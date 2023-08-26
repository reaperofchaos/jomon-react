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
import { passwordIsSecure } from "../helpers/password-validation.helpers";
import AccountErrorMessage from "./account-error-message";

const CreateAccountForm = () => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const submit = () => {
    console.log("Clicked");
  };
  const userNameIsEmpty: boolean = user === "";
  const securePassword: boolean = passwordIsSecure(password);
  const passwordsDoNotMatch: boolean = confirmPassword !== password;
  const isDisabled: boolean =
    passwordsDoNotMatch || userNameIsEmpty || !securePassword;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "15px",
      }}
    >
      <Typography variant="h6">Create Account Form</Typography>
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
          id="password"
          aria-describedby="my-helper-text"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormHelperText id="my-helper-text">Type your password.</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="confirm-password">Password: </InputLabel>
        <Input
          id="confirm-password"
          aria-describedby="my-helper-text"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <FormHelperText id="my-helper-text">Type your password.</FormHelperText>
      </FormControl>
      {isDisabled && (
        <AccountErrorMessage
          password={password}
          username={user}
          confirmPassword={confirmPassword}
        />
      )}
      <Button disabled={isDisabled} onClick={() => submit()}>
        Create Account
      </Button>
    </Box>
  );
};
export default CreateAccountForm;
