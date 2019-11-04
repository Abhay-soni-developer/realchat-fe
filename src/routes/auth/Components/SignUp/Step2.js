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

<<<<<<< HEAD
    const { setValueOfField, classes } = props
    const profilePhotoInput = useRef(null)
    //mime types of accepted formats for profile photo
    const allowedFormats = ['image/png', 'image/jpeg']

    const onImageSelect = (e) => {
        e.preventDefault()
        let file = profilePhotoInput.current.files[0]
        let fileReader = new FileReader()
        fileReader.addEventListener('load', (e) => {
            props.setValueOfField('profilePhoto', e.currentTarget.result)
        })
        fileReader.readAsDataURL(file)
    }


    const openImageSelectDialog = () => {
        profilePhotoInput.current.click()
    }

    let progressCount = 0

    return (
        <>

            <div className={classes.profilePhotoContainer}>
                <input onChange={onImageSelect} type='file' className={classes.profilePhotoInput} ref={profilePhotoInput} accept={allowedFormats.join(' ')} multiple={false} name={'profilePhoto'} />
                <Tooltip title={'Click to upload your profile photo'} placement="top">
                    <div className={'profilePhoto'} onClick={openImageSelectDialog}>
                        {props.values.profilePhoto
                            ?
                            (<img src={props.values.profilePhoto} />)
                            :
                            (<FontAwesomeIcon icon={['fas', 'user-circle']} size={'8x'} className={classes.profilePhotoDefaultIcon} />)}
                    </div>
                </Tooltip>
            </div>


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
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={props.values.gender}
                    onChange={props.handleChange} row
                    classes={{ root: classes.genderRadioBtnContainer }}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </div>

            <div><Select/></div>

        </>
    )
=======
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
>>>>>>> 74c83d172c14e801e5638972b28e8a9271ab5073
}

export default withStyles(styles)(Step2);
