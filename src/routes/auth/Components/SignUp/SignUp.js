import React from 'react'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import styles from './styles'
import { Link as RouterLink } from 'react-router-dom'
import CustomTextField from 'components/CustomTextField'
import { CustomCard, CustomCardHeader } from 'components/CustomCard'
import * as yup from 'yup'
import { Formik } from 'formik'
import Steppers from 'components/Steppers'
import Step1 from './Step1'
import Step2 from './Step2'


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
        .required('Password is Required'),

    profilePhoto: yup
        .string(),

    dob: yup
        .date('Invalid Date format')
        .required('Date of Birth Required'),

    gender: yup
        .string('gender should be a word')
        .matches(/(male|female|other)/, { message: 'gender can only have male, female or other as value' }),

    countryCode: yup
        .string(),

    mobileNumber: yup
        .string(),

    country: yup
        .string()
        .required('Please select a country'),

    state: yup
        .string()
        .required('Please select a state')

})

class SignUp extends React.Component {

    state = {
        numberOfSteps: 3,
        currentStep: 0
    }

    takeToStep = (stepNumber) => {
        if (typeof (stepNumber) === 'number' && stepNumber >= 0 && stepNumber <= this.state.numberOfSteps) {
            this.setState({ ...this.state, currentStep: stepNumber })
        }
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
                                password: undefined,
                                dob: new Date(),
                                gender: undefined,
                                countryCode: undefined,
                                mobileNumber: undefined,
                                newsletter: undefined
                            }}

                            isInitialValid={true}

                            render={props => {

                                function setValueOfField(fieldName, value, shouldValidate = true) {
                                    props.setFieldValue(fieldName, value, shouldValidate)
                                }

                                console.log(props)

                                return (
                                    <form noValidate>
                                        {this.state.currentStep === 0 && (<Step1 setValueOfField={setValueOfField} {...props} />)}
                                        {this.state.currentStep === 1 && (<Step2 setValueOfField={setValueOfField} {...props} />)}
                                        {/* {this.state.stepCount===3 && (<Step3 setValueOfField={setValueOfField} {...props}/>)} */}

                                        <Steppers currentStep={this.state.currentStep} numberOfSteps={this.state.numberOfSteps} />

                                        <div className={this.props.classes.btnContainer}>
                                            <Button
                                                variant="contained"
                                                classes={{
                                                    root: this.props.classes.btnStyle
                                                }}
                                                onClick={() => { this.takeToStep(this.state.currentStep - 1) }}
                                                disabled={this.state.currentStep === 0}
                                            >
                                                {'PREVIOUS'}
                                            </Button>

                                            <Button
                                                variant="contained"
                                                classes={{
                                                    root: this.props.classes.btnStyle
                                                }}
                                                onClick={() => { this.takeToStep(this.state.currentStep + 1) }}
                                                disabled={
                                                    !props.isValid
                                                    // ||
                                                    // Boolean(Object.keys(props.errors).length !== 0)
                                                    // Boolean(this.state.currentStep === this.state.numberOfSteps - 1)
                                                }
                                                style={{ display: !Boolean(this.state.currentStep === this.state.numberOfSteps - 1) ? 'block' : 'none' }}

                                            >
                                                {'NEXT'}
                                            </Button>

                                            <Button
                                                variant="contained"
                                                classes={{
                                                    root: this.props.classes.btnStyle
                                                }}
                                                onClick={() => { this.takeToStep(this.state.currentStep + 1) }}
                                                disabled={
                                                    !props.isValid || props.isSubmitting
                                                    // ||
                                                    // Boolean(Object.keys(props.errors).length !== 0)
                                                }
                                                style={{ display: Boolean(this.state.currentStep === this.state.numberOfSteps - 1) ? 'block' : 'none' }}
                                            >
                                                {'SUBMIT'}
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