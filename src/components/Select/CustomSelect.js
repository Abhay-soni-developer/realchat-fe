import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";

const styles = theme =>
  createStyles({
    formLabel: props => ({
      marginBottom: theme.margin.labeltoInput,
      ...props.formLabelStyle
    }),

    textField: props => ({
      height: theme.fields.height,
      backgroundColor: theme.fields.inputFieldBackgroundColor,
      ...props.textFieldStyle
    }),

    Input: props => ({
      height: "100%",
      ...props.inputStyle
    }),

    notchedOutline: props => ({  
      borderRadius: '0px',
      border: theme.fields.border
    })
  });

function CustomSelect (props) {
  const { classes } = props;

  return (
    <>
      <FormLabel classes={{ root: classes.formLabel }} {...props.formLabelProps} required={props.required}>{props.label}</FormLabel>
      <TextField
        value={props.value}
        onChange={props.onChange}
        variant="outlined"
        {...props.TextFieldProps}
        classes={{ root: classes.textField, ...props.TextFieldClasses}}
        InputProps={{ classes: { root: classes.Input, notchedOutline: classes.notchedOutline, ...props.InputClasses }}}
        select
      >
        {props.children}
      </TextField>
    </>
  );
}

export default withStyles(styles)(CustomSelect);
