import { createMuiTheme } from "@material-ui/core"
import pink from '@material-ui/core/colors/pink'

const datePickerTheme = createMuiTheme({

    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          backgroundColor: pink.A200,
        },
      },
      MuiPickersCalendarHeader: {
        switchHeader: {
          // backgroundColor: pink.A200,
          // color: "white",
        },
      },
      MuiPickersDay: {
        day: {
          color: pink.A700,
        },
        daySelected: {
          backgroundColor: pink["400"],
        },
        dayDisabled: {
          color: pink["100"],
        },
        current: {
          color: pink["900"],
        },
      },
      MuiPickersModal: {
        dialogAction: {
          color: pink["400"],
        },
      },
    },

  });


  export default datePickerTheme