import React from 'react'
import { Typography, Link, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import styles from './styles'
import { Link as RouterLink } from 'react-router-dom'
import CustomTextField from 'common/CustomTextField'
import CustomCard from 'common/CustomCard'
import CustomCardHeader from 'common/CustomCardHeader'
import * as yup from 'yup'
import { Formik } from 'formik';

const signUpValidationSchema = yup.object().shape({
    fname: yup
        .string()
        .required('first name is required'),

    lname: yup
        .string(),

    email: yup
        .string()
        .email('Invalid Email')
        .required('Email is Required'),

    password: yup
        .string()
        .required('Password is Required')
})


class SignUp extends React.Component {

    render() {
        return (
            <CustomCard>
                <React.Fragment>
                    <CustomCardHeader title={'Sign Up'} subheader={[<Link component={RouterLink} to='/sign-up' color='inherit'>{'Already have an account'}</Link>]} />
                    <div className={this.props.classes.formContainer}>
                        <Formik

                            validationSchema={signUpValidationSchema}

                            initialValues={{
                                fname: undefined,
                                lname: undefined,
                                email: undefined,
                                password: undefined
                            }}

                            render={props => {
                                return (
                                    <form noValidate>

                                        <div style={{ display: 'flex' }}>
                                            <CustomTextField
                                                name='fname'
                                                required
                                                label='First Name'
                                                onChange={
                                                    (e) => props.handleChange(e)
                                                }
                                                InputProps={{
                                                    onBlur: (e) => {
                                                        props.handleBlur(e)
                                                    }
                                                }}
                                                error={Boolean(props.errors.fname && props.touched.fname)}
                                                helperText={Boolean(props.errors.fname && props.touched.fname) && props.errors.fname}
                                            />
                                            <div style={{ width: '20px' }}></div>
                                            <CustomTextField
                                                name='lname'
                                                label='Last Name'
                                                onChange={
                                                    (e) => props.handleChange(e)
                                                }
                                                inputProps={{
                                                    onBlur: (e) => {
                                                        props.handleBlur(e)
                                                    }
                                                }}
                                                error={Boolean(props.errors.lname && props.touched.lname)}
                                                helperText={Boolean(props.errors.lname && props.touched.lname) && props.errors.lname}
                                            />
                                        </div>

                                        <CustomTextField name='email'
                                            required
                                            label='Email'
                                            error={Boolean(props.errors.email && props.touched.email)}
                                            helperText={Boolean(props.errors.email && props.touched.email) && props.errors.email}
                                            onChange={
                                                (e) => props.handleChange(e)
                                            }
                                            InputProps={{
                                                onBlur: (e) => {
                                                    props.handleBlur(e)
                                                }
                                            }}
                                        />

                                        <CustomTextField
                                            name='password'
                                            required
                                            label='Password'
                                            error={Boolean(props.touched.password && props.errors.password)}
                                            helperText={Boolean(props.touched.password && props.errors.password) && props.errors.password}
                                            onChange={
                                                (e) => props.handleChange(e)
                                            }
                                            InputProps={{
                                                onBlur: (e) => {
                                                    props.handleBlur(e)
                                                }
                                            }}
                                        />

                                        <Button
                                            variant="contained"
                                            fullWidth
                                            type='submit'
                                            classes={{
                                                root: this.props.classes.btnStyle
                                            }}
                                            onChange={
                                                (e) => props.handleChange(e)
                                            }
                                            InputProps={{
                                                onBlur: (e) => {
                                                    props.handleBlur(e)
                                                }
                                            }}
                                        >
                                            {'SIGN UP'}
                                        </Button>
                                    </form>
                                )
                            }
                            } />

                        <Typography variant='h6' gutterBottom align='center' classes={{ root: this.props.classes.subheader, h6: this.props.classes.h6 }}>
                            <Link component={RouterLink} underline='always' color='inherit' to='/forgot-password'>Forgot password?</Link>
                        </Typography>
                    </div>
                </React.Fragment>
            </CustomCard>
        )
    }

}

export default withStyles(styles)(SignUp)