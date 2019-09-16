import React from 'react'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import { Link as RouterLink } from 'react-router-dom'
import CustomTextField from 'common/components/CustomTextField'
import { CustomCard, CustomCardHeader } from 'common/components/CustomCard'
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

                                function setValueOfField(fieldName, value, shouldValidate = true) {
                                    props.setFieldValue(fieldName, value, shouldValidate)
                                }

                                return (
                                    <form noValidate>

                                        <div style={{ display: 'flex' }}>
                                            <CustomTextField
                                                textFieldProps={{
                                                    name: 'fname',
                                                    required: true,
                                                    error: Boolean(props.errors.fname && props.touched.fname),
                                                    helperText: Boolean(props.errors.fname && props.touched.fname) && props.errors.fname
                                                }}

                                                label='First Name'
                                                getValue={setValueOfField}
                                                InputProps={{
                                                    onBlur: props.handleBlur
                                                }}

                                            />
                                            <div style={{ width: '20px' }}></div>
                                            <CustomTextField
                                                textFieldProps={{
                                                    name: 'lname',
                                                    error: Boolean(props.errors.lname && props.touched.lname),
                                                    helperText: Boolean(props.errors.lname && props.touched.lname) && props.errors.lname
                                                }}

                                                label='Last Name'
                                                getValue={setValueOfField}
                                                InputProps={{
                                                    onBlur: props.handleBlur
                                                }}

                                            />
                                        </div>

                                        <CustomTextField
                                            textFieldProps={{
                                                name: 'email',
                                                required: true,
                                                error: Boolean(props.errors.email && props.touched.email),
                                                helperText: Boolean(props.errors.email && props.touched.email) && props.errors.email
                                            }}

                                            label='Email'

                                            getValue={setValueOfField}
                                            InputProps={{
                                                onBlur: props.handleBlur
                                            }}
                                        />

                                        <CustomTextField
                                            textFieldProps={{
                                                name: 'password',
                                                required: true,
                                                error: Boolean(props.touched.password && props.errors.password),
                                                helperText: Boolean(props.touched.password && props.errors.password) && props.errors.password,
                                            }}
                                            label='Password'
                                            getValue={setValueOfField}
                                            InputProps={{
                                                onBlur: props.handleBlur
                                            }}
                                        />

                                        <Button
                                            variant="contained"
                                            fullWidth
                                            type='submit'
                                            classes={{
                                                root: this.props.classes.btnStyle
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