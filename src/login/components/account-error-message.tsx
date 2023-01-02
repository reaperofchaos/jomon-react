import { Box, List, ListItem, Typography } from "@mui/material";
import { containsNumbers, containsSpecialChar, containsUpperCase, passwordIsNotTooShort, passwordIsSecure } from "../helpers/password-validation.helpers";
import { AccountErrorMessageProps } from "../types";
import CircleIcon from '@mui/icons-material/Circle';

const AccountErrorMessage = ({password, username, confirmPassword}: AccountErrorMessageProps
)=>{

    if(username !== "" && password !== "" && !passwordIsSecure(password)){
        return <Box>
            <List>
                <ListItem>
                    <CircleIcon fontSize="small"/>
                    <Typography sx={{color: passwordIsNotTooShort(password) ? 'green': 'red'}}>The Password should be more than 6 characters long</Typography>
                </ListItem>
                <ListItem>
                    <CircleIcon fontSize="small"/>
                    <Typography sx={{color: containsUpperCase(password) ? 'green': 'red'}}>The Password needs at least one uppercase letter</Typography>
                </ListItem>
                <ListItem>
                    <CircleIcon fontSize="small"/>
                    <Typography sx={{color: containsNumbers(password) ? 'green': 'red'}}>The Password needs at least one number</Typography>
                </ListItem>
                <ListItem>
                    <CircleIcon fontSize="small"/>
                    <Typography sx={{color: containsSpecialChar(password) ? 'green': 'red'}}>The Password needs at least one special character (!,@,#,$,%,^,&,*,~,`,?)</Typography>
                </ListItem>
            </List>
        </Box>
    }

    if(confirmPassword !== password){
        return <Box>
            <Typography>The passwords do not match</Typography>
        </Box>
    }

    if(username === ""){
        return <Box>
            <Typography>Please provide a user name</Typography>
        </Box>
    }
    return (<Box></Box>)
}

export default AccountErrorMessage; 