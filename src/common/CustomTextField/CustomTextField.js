import React from 'react'
import { TextField, withStyles } from '@material-ui/core'
import styles from './styles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const CustomTextField = function (props) {
    const { classes } = props
    return (
        <div className={classes.container}>
            {props.label && <div>
                <Typography 
                    variant={props.labelVariant}
                    color={props.error?'error':'initial'}
                    classes={{
                        root: classes.label,
                    }}>
                        {props.label}{props.required && '*'}
                </Typography>
            </div>}
            
            <TextField

                {...props}

                inputProps={{
                    className:
                        classes.inputStyle,
                    ...props.inputProps
                }}

                InputProps={{
                    disableUnderline: false,
                    classes:
                        { root: classes.inputField },
                    ...props.InputProps
                }}

                fullWidth
                classes={{ root: classes.field }}
                label=''
            />
        </div>
    )
}

CustomTextField.defaultProps = {
    label: undefined,
    required: false,
    labelVariant: 'body1',
    error: false
}

CustomTextField.proptype = {
    label: PropTypes.string,
    required: PropTypes.bool,
    labelVariant: PropTypes.string,
    inputProps: PropTypes.object,
    InputProps: PropTypes.object,

}

export default withStyles(styles)(CustomTextField)
