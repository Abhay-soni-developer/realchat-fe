import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { ThemeProvider } from "@material-ui/styles"
import datePickerTheme from './datePickerTheme'
import PropTypes from 'prop-types'



DatePicker.propTypes = {
    value: PropTypes.instanceOf(Date).isRequired,
    onChange: PropTypes.func.isRequired
}

DatePicker.defaultProps = {
    label: "label",
    format: "MM/dd/yyyy",
    autoOk: true,
    variant: "dialog",
    disableFuture: true,
    inputVariant: "filled",
    InputAdornmentProps: {position: "end"}
}

function DatePicker(props) {

    return (
        <ThemeProvider theme={datePickerTheme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    {...props}
                />
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    )
}

export default DatePicker