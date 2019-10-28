import React from 'react'
import { TextField, withStyles } from '@material-ui/core'
import styles from './styles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

class CustomTextField extends React.Component {

    state = {
        value: ''
    }

    constructor(props) {
        super(props)
        this.interval = null
    }

    static defaultProps = {
        label: undefined,
        labelVariant: 'body1',
        error: false,
        getValue: () => { },
        textFieldProps: {
            required: false,
        }
    }

    static propTypes = {
        label: PropTypes.string,
        required: PropTypes.bool,
        labelVariant: PropTypes.string,
        inputProps: PropTypes.object,
        InputProps: PropTypes.object,
        getValue: PropTypes.func,
        textFieldProps: PropTypes.shape({
            required: PropTypes.bool,
            name: PropTypes.string,
            type: PropTypes.string,
            error: PropTypes.bool
        })
    }

    onTyping = (e) => {
        const value = e.target.value
        clearInterval(this.interval)

        this.setState(prevState => {
            return { ...prevState, value }
        }, () => {
            this.interval = setTimeout(() => {
                this.props.getValue(this.props.textFieldProps.name, value)
            }, 500);
        })
    }

    render() {
        const props = this.props
        const { classes } = props

        return (
            <div className={classes.container}>
                {Boolean(props.label) && <div>
                    <Typography
                        variant={props.labelVariant}
                        color={props.textFieldProps.error ? 'error' : 'initial'}
                        classes={{
                            root: classes.label,
                        }}>
                        {props.label}{props.textFieldProps.required && '*'}
                    </Typography>
                </div>}

                <TextField

                    {...props.textFieldProps}

                    inputProps={{
                        className: classes.inputStyle,
                        ...props.inputProps
                    }}

                    InputProps={{
                        disableUnderline: false,
                        classes:
                            { root: classes.inputField },
                        ...props.InputProps
                    }}

                    fullWidth
                    onChange={this.onTyping}
                    value={this.state.value}
                    classes={{ root: classes.field }}
                    label=''
                />
            </div>
        )
    }
}


export default withStyles(styles)(CustomTextField)
