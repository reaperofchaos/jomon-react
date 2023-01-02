import React from 'react';
import {Box, Typography} from '@mui/material'
import NavigationBar from './components/navigation-bar';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from './selectors/configuration.selectors';
import AccountLoginForms from '../login/components/account-login-forms';
function App() {
  const isLoggedIn = useSelector(selectIsAuthorized);
  if(!isLoggedIn){
    return (
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Typography variant="h3" sx={{marginBottom: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>Not Logged In!</Typography>
        <AccountLoginForms />
      </Box>
    )
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <NavigationBar />
      <Typography variant="h3" sx={{marginBottom: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>Jomon Database</Typography>
    </Box>
  );
}

export default App;
