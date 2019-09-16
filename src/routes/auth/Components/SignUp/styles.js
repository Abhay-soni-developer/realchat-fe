import { createStyles} from '@material-ui/core'

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
            margin: '0px 5px'
        },
        '&>.active': {
            backgroundColor: `${theme.colors.bgColor3}`
        }
    }

})

export default style