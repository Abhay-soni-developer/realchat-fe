import React, { useRef } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@material-ui/core/Tooltip";
import CustomTextField from "components/CustomTextField";

const styles = theme =>
  createStyles({
    profilePhotoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: `calc(${theme.margin.primary}px + 10px)`,

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

    container: props => ({
      "&>div": {
        marginTop: theme.margin.primary
      }
    }),

    nameWrapper: {
      display: "flex",

      "&>div": {
        marginLeft: theme.margin.primary / 2,
        marginRight: theme.margin.primary / 2
      },

      "&>div:first-child": {
        marginLeft: 0
      },

      "&>div:last-child": {
        marginRight: 0
      }
    }
  });

function Step1(props) {
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

  return (
    <div className={classes.container}>
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

      <div className={classes.nameWrapper}>
        <CustomTextField
          textFieldProps={{
            name: "fname",
            required: true,
            error: Boolean(props.errors.fname && props.touched.fname),
            helperText:
              Boolean(props.errors.fname && props.touched.fname) &&
              props.errors.fname
          }}
          label="First Name"
          getValue={setValueOfField}
          InputProps={{
            onBlur: props.handleBlur
          }}
        />

        <CustomTextField
          textFieldProps={{
            name: "lname",
            error: Boolean(props.errors.lname && props.touched.lname),
            helperText:
              Boolean(props.errors.lname && props.touched.lname) &&
              props.errors.lname
          }}
          label="Last Name"
          getValue={setValueOfField}
          InputProps={{
            onBlur: props.handleBlur
          }}
        />
      </div>

      <CustomTextField
        textFieldProps={{
          name: "email",
          required: true,
          error: Boolean(props.errors.email && props.touched.email),
          helperText:
            Boolean(props.errors.email && props.touched.email) &&
            props.errors.email
        }}
        label="Email"
        getValue={setValueOfField}
        InputProps={{
          onBlur: props.handleBlur
        }}
      />

      <CustomTextField
        textFieldProps={{
          type: "password",
          name: "password",
          required: true,
          error: Boolean(props.touched.password && props.errors.password),
          helperText:
            Boolean(props.touched.password && props.errors.password) &&
            props.errors.password
        }}
        label="Password"
        getValue={setValueOfField}
        InputProps={{
          onBlur: props.handleBlur
        }}
      />
    </div>
  );
}

export default withStyles(styles)(Step1);
