import React from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import createStyles from '@material-ui/core/styles/createStyles'
import withStyles from '@material-ui/core/styles/withStyles'


const styles = createStyles({
    menu: {
        
    }
})


function CustomSelect (props) {

    const {classes} = props

    return (
        <TextField
          select
          label="Select"
          className={classes.textField}
          value={1}
        //   onChange={handleChange}s
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="outlined"
        >
            <MenuItem key={1} value={1}>
              {'asdasd asdasd'}
            </MenuItem>
          ))}
        </TextField>
    )
}

export default withStyles(styles)(CustomSelect)
