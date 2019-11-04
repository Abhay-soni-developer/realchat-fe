import React, {useEffect, useState} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import DatePicker from "components/DatePicker";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import CustomSelect from "components/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {auth} from 'endpoints'


const styles = theme =>
  createStyles({
    dobFieldInput: {
      backgroundColor: `${theme.fields.inputFieldBackgroundColor}`,
      borderRadius: "0px",
      border: theme.fields.border,
      transitionDuration: "0.25s",
      height: theme.fields.height,
      "&:hover": {
        border: theme.fields.onHoverBorder,
        backgroundColor: `${theme.fields.inputFieldBackgroundColor}`
      }
    },

    genderSelectContainer: {
      display: "flex",
      flexDirection: "column"
    },

    genderRadioBtnContainer: {
      justifyContent: "space-around",
      backgroundColor: `${theme.fields.inputFieldBackgroundColor}`,
      border: theme.fields.border,
      marginTop: theme.margin.labeltoInput,
      height: theme.fields.height
    },

    container: props => ({
      "&>div": {
        marginBottom: theme.margin.primary
      }
    })
  });

function Step2(props) {

  const { setValueOfField, classes } = props;

  useEffect(()=>{
    auth.getCountryList()
  }, [])

  return (
    <div className={classes.container}>
      <DatePicker
        name="dob"
        label="Date of Birth"
        fullWidth
        required
        value={props.values.dob}
        onChange={date => {
          setValueOfField("dob", date);
        }}
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.dobFieldInput,
            focused: classes.dobFieldInputFocused
          }
        }}
      />

      <div className={classes.genderSelectContainer}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={props.values.gender}
          onChange={props.handleChange}
          row
          classes={{ root: classes.genderRadioBtnContainer }}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </div>

      <div className={classes.country}>
        <CustomSelect label="Country">
          <MenuItem></MenuItem>
        </CustomSelect>
      </div>
    </div>
  );
}

export default withStyles(styles)(Step2);
