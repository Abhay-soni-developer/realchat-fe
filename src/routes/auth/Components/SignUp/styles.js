import { createStyles } from '@material-ui/core'

const style = theme => createStyles({
    title: {
        fontSize: '42px',
        textTransform: 'uppercase',
        fontWeight: 700,
        marginBottom: '10px'
    },

    underline: {
        width: '20%',
        height: '4px',
        margin: 'auto',
        backgroundColor: theme.colors.secondaryColor,
        marginBottom: '10px'
    },

    subheader: {
        fontSize: '14px',
        fontWeight: 400
    },

    h6: {
        marginTop: '20px'
    },

    formContainer: {
        marginTop: '50px'
    },

    btnContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    btnStyle: {
        marginTop: '25px',
        borderRadius: '0px',
        backgroundColor: theme.colors.secondaryColor,
        padding: '20px 5px',
        boxSizing: 'border-box',
        height: '60px',
        fontWeight: 700,
        color: 'white',
        flex: 1,
        marginRight: 20,
        '&:hover': {
            backgroundColor: `${theme.colors.btnPrimaryColor}`
        },
        '&:last-child': {
            marginRight: 0
        }
    },

    currentFrameCount: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
        '&>div': {
            height: 12,
            width: 12,
            borderRadius: '50%',
            backgroundColor: '#fff',
            border: `1px solid ${theme.colors.secondaryTextColor}`,
            margin: '0px 5px',
            transitionDuration: '0s'
        },
        '&>.active': {
            backgroundColor: `${theme.colors.bgColor3}`,
            transform: 'rotateX(180deg)',
            transitionDuration: '1s'
        }
    },

    dobFieldInput: {
        backgroundColor: `${theme.fields.inputFieldBackgroundColor}`,
        borderRadius: '0px',
        border: theme.fields.border,
        transitionDuration: '0.25s',
        height: theme.fields.height,
        '&:hover': {
            border:  theme.fields.onHoverBorder,
            backgroundColor: `${theme.fields.inputFieldBackgroundColor}`
        }
    },

    genderSelectContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20
    },

    genderRadioBtnContainer: {
        justifyContent: 'space-around',
        backgroundColor: `${theme.fields.inputFieldBackgroundColor}`,
        border: theme.fields.border,
        marginTop: 5,
        height: theme.fields.height,
    }

})

export default style