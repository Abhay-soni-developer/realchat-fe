import React from 'react'
import styles from './styles'
import withStyles from '@material-ui/core/styles/withStyles'
import CustomTextField from 'common/components/CustomTextField'

function Step1(props) {

    const { setValueOfField } = props

    return (
        <>
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
        </>
    )
}

export default withStyles(styles)(Step1)
