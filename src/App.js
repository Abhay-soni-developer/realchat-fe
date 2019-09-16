import React from 'react'
import { AppTheme } from 'themes'
import { ThemeProvider } from '@material-ui/styles'
import { Switch, Route, Redirect } from 'react-router-dom'
import UserPage from './routes/user'
import AuthPage from './routes/auth';
import Snackbar from './common/components/Snackbar/Snackbar'


function App(props) {


  return (
    <ThemeProvider theme={AppTheme}>
      <Switch>
        <Route path='/auth' component={AuthPage} />
        <Route exact path='/user/chat-screen' component={UserPage} />
        <Redirect to='/auth/sign-in' />
      </Switch>
      <Snackbar />
    </ThemeProvider >
  );
}

export default App;

