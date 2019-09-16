import React, { lazy, Suspense } from 'react'
import Container from '@material-ui/core/Container'
import { Navbar } from 'common/components/Navbar'
import { Switch, Route } from 'react-router-dom'
import CustomCircularProgress from 'common/components/Animation/CustomCircularProgress'
import { withStyles } from '@material-ui/styles'
import style from './style'


const SignIn = lazy(() => import('./Components/SignIn'))
const SignUp = lazy(() => import('./Components/SignUp'))

function AuthPage() {

  return (
    <Container maxWidth="lg">
      <div style={{ minHeight: '5px', marginTop: '70px' }}></div>
      <Navbar navbarTitle='Real Time Chat'
        links={[
          { location: '/auth/sign-in', title: 'sign in', type: 'primary' },
          { location: '/auth/sign-up', title: 'sign up', type: 'secondary' }
        ]} />
      <div>
        <Suspense fallback={<CustomCircularProgress size={100} />}>
          <Switch>
            <Route exact path='/auth/sign-in' component={SignIn} />
            <Route exact path='/auth/sign-up' component={SignUp} />
          </Switch>
        </Suspense>
      </div>
      
    </Container>
  )
}

export default withStyles(style)(AuthPage)