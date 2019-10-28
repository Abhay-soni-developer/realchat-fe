import React, { useEffect } from 'react'
import Pubsub from 'utils/EventBus'
import Snackbar from '@material-ui/core/Snackbar'
import bell1 from 'assets/audios/bell1.ogg'
import bell2 from 'assets/audios/bell2.ogg'
import bell3 from 'assets/audios/bell3.ogg'
import Slide from '@material-ui/core/Slide'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import { createStyles, withStyles} from '@material-ui/core'

const snackBarStyle = theme => createStyles({
    closeIcon: {
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: '50%'
    }
})

class SnackbarNotification extends React.Component {

    state = {
        snackBarVisibility: false,
        message: '',
        snackBarProps: {},
        notificationBell: bell2,
    }

    componentDidMount() {
        this.audioRef = React.createRef()
        Pubsub.listen('snackNotification', this, this.openSnackBarNotification)
    }

    openSnackBarNotification = (data) => {
        this.setState({ ...this.state, snackBarVisibility: true, message: data.message, snackBarProps: data.snackBarProps }, () => {
            this.audioRef.current.currentTime = 0
            this.audioRef.current.play()
        })
    }

    closeSnackBarNotification = () => {
        this.setState({ ...this.state, snackBarVisibility: false, message: '' })
    }

    render() {
        
        const {classes} = this.props

        return (
            <>
                <audio src={this.state.notificationBell} type="audio/ogg" ref={this.audioRef} />
                <Snackbar
                    open={this.state.snackBarVisibility}
                    message={this.state.message}
                    onClose={this.closeSnackBarNotification}
                    TransitionComponent={Slide}
                    onClose={this.closeSnackBarNotification}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    action={
                        <IconButton onClick={this.closeSnackBarNotification}>
                            <Icon classes={{root: classes.closeIcon}}>close</Icon>
                        </IconButton>
                    }
                    {...this.state.snackBarProps}
                />
            </>
        )
    }
}

export default withStyles(snackBarStyle)(SnackbarNotification)
