import React from 'react'
import styles from './styles'
import withStyles from '@material-ui/core/styles/withStyles'
import CustomTextField from 'common/components/CustomTextField'
import DatePicker from 'common/components/DatePicker'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import FormLabel from '@material-ui/core/FormLabel'



function Step2(props) {

    const { setValueOfField, classes } = props

    return (
        <>
            <DatePicker
                name='dob'
                label='Date of Birth'
                fullWidth
                required
                value={props.values.dob}
                onChange={(date) => { setValueOfField('dob', date) }}
                InputProps={{
                    disableUnderline: true,
                    classes: { root: classes.dobFieldInput, focused: classes.dobFieldInputFocused }
                }}
            />

            <div className={classes.genderSelectContainer}>
                <FormLabel component="legend" required>Gender</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={props.values.gender}
                    onChange={props.handleChange} row
                    classes={{root: classes.genderRadioBtnContainer}}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </div>
        </>
    )
}

export default withStyles(styles)(Step2)
