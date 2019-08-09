import React from 'react'
import { Typography, Link, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import styles from './styles'
import { Link as RouterLink } from 'react-router-dom'
import CustomTextField from 'common/CustomTextField'
import CustomCard from 'common/CustomCard'
import CustomCardHeader from 'common/CustomCardHeader'
import { Formik } from 'formik';
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Invalid Email')
        .required('email is Required to Login'),

    password: yup
    .string()
    .required('Password is Required to Login')
})

class SignIn extends React.Component {

    render() {
        return (
            <CustomCard>
                <React.Fragment>

                    <CustomCardHeader title={'Sign In'} subheader={['Not a member yet? ', <Link component={RouterLink} to='/path' color='inherit'>{'Sign up here'}</Link>]} />

                    <div className={this.props.classes.formContainer}>
                        <Formik
                            validationSchema={loginValidationSchema}
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            onSubmit={(values, actions) => {

                            }}

                            render={props => {
                                console.log('---->>----', props)
                                console.log(Boolean(props.errors.email && props.touched.email));

                                return (
                                    <form noValidate>
                                        <CustomTextField
                                            name='email'
                                            type='email'
                                            value={props.values.email}
                                            required
                                            label={'Email'}
                                            error={Boolean(props.errors.email && props.touched.email)}
                                            helperText={Boolean(props.errors.email && props.touched.email) && props.errors.email}
                                            onChange={
                                                (e) => props.handleChange(e)
                                            }
                                            InputProps={{
                                                onBlur: (e) => {
                                                    props.handleBlur(e)
                                                }}}
                                        />


                                        <CustomTextField
                                            name='password'
                                            type='password'
                                            required
                                            label={'Password'}
                                            error={Boolean(props.touched.password && props.errors.password)}
                                            helperText={Boolean(props.touched.password && props.errors.password) && props.errors.password}
                                            onChange={
                                                (e) => props.handleChange(e)
                                            }
                                            InputProps={{
                                                onBlur: (e) => {
                                                    props.handleBlur(e)
                                                }}}
                                        />


                                        <Button
                                            variant="contained"
                                            fullWidth
                                            type='submit'
                                            classes={{
                                                root: this.props.classes.btnStyle
                                            }}
                                        >

                                            {'SIGN IN'}
                                        </Button>
                                    </form>
                                )
                            }}
                        />

                        <Typography variant='h6' gutterBottom align='center' classes={{ root: this.props.classes.subheader, h6: this.props.classes.h6 }}>
                            <Link component={RouterLink} underline='always' color='inherit' to='/forgot-password'>Forgot password?</Link>
                        </Typography>
                    </div>
                </React.Fragment>
            </CustomCard>
        )
    }

}

export default withStyles(styles)(SignIn)