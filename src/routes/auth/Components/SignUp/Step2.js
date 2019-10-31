import React, { useRef } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import CustomTextField from "components/CustomTextField";
import DatePicker from "components/DatePicker";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import LocationDailog from "./LocationDialog";

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
      flexDirection: "column",
      marginTop: theme.margin.primary
    },

    genderRadioBtnContainer: {
      justifyContent: "space-around",
      backgroundColor: `${theme.fields.inputFieldBackgroundColor}`,
      border: theme.fields.border,
      marginTop: theme.margin.labeltoInput,
      height: theme.fields.height
    },

    locationContainer: {
      marginTop: theme.margin.primary
    },

    locationBox: {
      height: theme.fields.height,
      backgroundColor: theme.fields.inputFieldBackgroundColor,
      borderRadius: theme.fields.borderRadius,
      border: theme.fields.border,
      paddingLeft: theme.margin.secondary,
      display: "flex",
      alignItems: "center"
    },

    profilePhotoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: theme.margin.primary,

      "&>.profilePhoto": {
        height: 128,
        width: 128,
        overflow: "hidden",
        border: `5px solid ${theme.colors.onHoverBorderColor}`,
        borderRadius: "50%",
        cursor: "pointer"
      },

      "&>div img": {
        height: "100%"
      }
    },

    profilePhotoDefaultIcon: {
      color: theme.colors.secondaryTextColor
    },

    profilePhotoInput: {
      height: 0,
      width: 0,
      display: "none"
    },

    label: {
      marginBottom: theme.margin.labeltoInput
    }
  });

function Step2(props) {
  const { setValueOfField, classes } = props;
  const profilePhotoInput = useRef(null);
  //mime types of accepted formats for profile photo
  const allowedFormats = ["image/png", "image/jpeg"];

  const onImageSelect = () => {
    let file = profilePhotoInput.current.files[0];
    let fileReader = new FileReader();
    fileReader.addEventListener("load", e => {
      props.setValueOfField("profilePhoto", e.currentTarget.result);
    });
    fileReader.readAsDataURL(file);
  };

  const openImageSelectDialog = () => {
    profilePhotoInput.current.click();
  };

  const openLocationSelectDialog = () => {};
  let progressCount = 0;

  return (
    <>
      <div className={classes.profilePhotoContainer}>
        <input
          onChange={onImageSelect}
          type="file"
          className={classes.profilePhotoInput}
          ref={profilePhotoInput}
          accept={allowedFormats.join(" ")}
          multiple={false}
          name={"profilePhoto"}
        />
        <Tooltip title={"Click to upload your profile photo"} placement="top">
          <div className={"profilePhoto"} onClick={openImageSelectDialog}>
            {props.values.profilePhoto ? (
              <img src={props.values.profilePhoto} />
            ) : (
              <FontAwesomeIcon
                icon={["fas", "user-circle"]}
                size={"8x"}
                className={classes.profilePhotoDefaultIcon}
              />
            )}
          </div>
        </Tooltip>
      </div>

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

      <div className={classes.locationContainer}>
        <FormLabel classes={{root: classes.label}} component="legend">Location</FormLabel>
        <div className={classes.locationBox} onClick={openLocationSelectDialog}>
          <Typography>
            {[props.values.city, props.values.state, props.values.country].filter(Boolean).join(', ')}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(Step2);
