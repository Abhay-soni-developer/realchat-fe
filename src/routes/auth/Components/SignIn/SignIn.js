import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/styles/withStyles'
import styles from './styles'
import { Link as RouterLink } from 'react-router-dom'
import CustomTextField from 'common/components/CustomTextField'
import { CustomCard, CustomCardHeader } from 'common/components/CustomCard'
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
                <div>

                    <CustomCardHeader title={'Sign In'} subheader={['Not a member yet? ', <Link component={RouterLink} to='/auth/sign-up' color='inherit'>{'Sign up here'}</Link>]} />

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

                                function setValueOfField(fieldName, value, shouldValidate = true) {
                                    props.setFieldValue(fieldName, value, shouldValidate)
                                }

                                return (
                                    <form noValidate>
                                        <CustomTextField
                                            textFieldProps={{
                                                name: 'email',
                                                type: 'email',
                                                required: true,
                                                error: Boolean(props.errors.email && props.touched.email),
                                                helperText: Boolean(props.errors.email && props.touched.email) && props.errors.email
                                            }}

                                            label={'Email'}
                                            getValue={setValueOfField}
                                            InputProps={{
                                                onBlur: props.handleBlur
                                            }}
                                        />


                                        <CustomTextField
                                            textFieldProps={{
                                                name: 'password',
                                                type: 'password',
                                                required: true,
                                                error: Boolean(props.touched.password && props.errors.password),
                                                helperText: Boolean(props.touched.password && props.errors.password) && props.errors.password
                                            }}

                                            label={'Password'}
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
                </div>
            </CustomCard>
        )
    }

}

export default withStyles(styles)(SignIn)