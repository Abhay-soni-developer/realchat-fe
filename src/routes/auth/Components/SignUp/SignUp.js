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
import { Formik } from 'formik'
import StepCount from './StepCount'
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
                                dob: undefined,
                                gender: undefined,
                                countryCode: undefined,
                                mobileNumber: undefined,
                                newsletter: undefined
                            }}

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

                                        <StepCount currentStep={this.state.currentStep} numberOfSteps={this.state.numberOfSteps}/>

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
                                                disabled={this.state.currentStep === this.state.numberOfSteps - 1}
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