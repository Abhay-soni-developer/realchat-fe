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
        justifyContent: 'space-between',
        marginTop: '25px',
        '&>button': {
            margin: '0px 10px 0px 25px'
        },
        '&>button:last-child': {
            marginRight: '0px'
        },
        '&>button:first-child': {
            marginLeft: '0px'
        }
    },

    btnStyle: {
        // marginTop: '25px',
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
        }
    },

})

export default style