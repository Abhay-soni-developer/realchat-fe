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
import Step1 from './Step1'


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

    state = {
        numberOfSteps: 3,
        currentStep: 0
    }

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

                                        <Step1 setValueOfField={setValueOfField} {...props}/>

                                        <div className={this.props.classes.currentFrameCount}>
                                            <div className={this.state.currentStep===0?'active':''}/>
                                            <div className={this.state.currentStep===1?'active':''}/>
                                            <div className={this.state.currentStep===2?'active':''}/>
                                        </div>

                                        <div className={this.props.classes.btnContainer}>
                                            <Button
                                                variant="contained"
                                                classes={{
                                                    root: this.props.classes.btnStyle
                                                }}
                                            >
                                                {'PREVIOUS'}
                                            </Button>

                                            <Button
                                                variant="contained"
                                                classes={{
                                                    root: this.props.classes.btnStyle
                                                }}
                                            >
                                                {'NEXT'}
                                            </Button>
                                        </div>
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