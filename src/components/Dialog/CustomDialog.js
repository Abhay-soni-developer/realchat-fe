import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import withTheme from "@material-ui/core/styles/withTheme";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = theme => createStyles({});

LocationDialog.defaultProps = {
  title: "",
  open: true
};

LocationDialog.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  dialogActionContent: PropTypes.node,
  dialogContentProps: PropTypes.object,
  dialogActionContent: PropTypes.object
};

function LocationDialog(props) {

  const { classes, theme, title, children, dialogProps, open } = props;

  return (
    <Dialog
      open={open}
      {...props.dialogProps}
    >
      <DialogTitle {...props.dialogTitleProps}>{title}</DialogTitle>

      <DialogContent {...props.dialogContentProps}>{children}</DialogContent>

      <DialogActions {...props.dialogActionProps}>{props.dialogActionContent}</DialogActions>

    </Dialog>
  );
}

export default withTheme(withStyles(styles)(LocationDialog));
