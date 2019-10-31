import { createStyles} from '@material-ui/core'

const style = theme => createStyles({
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

    btnStyle: {
        marginTop: '25px',
        borderRadius: '0px',
        backgroundColor: theme.colors.secondaryColor,
        padding: '20px 5px',
        boxSizing: 'border-box',
        height: '60px',
        fontWeight: 700,
        color: 'white',
        '&:hover': {
            backgroundColor: '#e62958'
        }
    },

    googleBtn: {
        backgroundColor: '#D6352E',
        '&:hover': {
            backgroundColor: theme.colors.bgColor3
        }
    }
})

export default style