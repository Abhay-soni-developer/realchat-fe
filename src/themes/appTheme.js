import { createMuiTheme } from '@material-ui/core'
import chatScreenBg from 'assets/images/bgImage.jpg'

const AppTheme = createMuiTheme({

    colors: {
        secondaryColor: '#ff3366',
        primaryBorderColor: '#e9ddd0',
        onHoverBorderColor: '#ff3366',
        secondaryTextColor: 'rgba(0, 0, 0, 0.54)',
        errorColor: '#f44336',
        bgColor1: '#ff8133',
        bgColor2: '#66ff33',
        bgColor3: '#3399ff',
        btnPrimaryColor: '#e62958',
    },

    fields: {
        height: '62px',
        inputFieldBackgroundColor: '#fff',
        border: `1px solid #e9ddd0`,
        onHoverBorder: `1px solid #ff3366`
    },

    navbar: {
        bgColor: '#28282a',
        logoTextColor: '#fff',
        primaryLinkColor: '#fff',
        secondaryLinkColor: '#ff3366'
    },

    card: {
        bgColor: '#fff5f8',
    },

    typography: {
        body1: {
            color: 'rgba(0, 0, 0, 0.54)',
            padding: 0,
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: 0.8,
            textTransform: 'capitalize'
        },

        body2: {
            color: '#fff',
            padding: 0,
            fontSize: '1.1rem',
            fontWeight: 'bolder',
            lineHeight: 1,
            letterSpacing: 0.8,
            textTransform: 'capitalize'
        }
    },

    palette: {
        error: {
            main: '#f44336'
        }
    },

    userAccountTheme: {
        bgColor: '#d6dbd7',
        avatarBorder: '3px solid #fff',
        chatScreenBg: `url(${chatScreenBg})`,
    }

})

export default AppTheme;