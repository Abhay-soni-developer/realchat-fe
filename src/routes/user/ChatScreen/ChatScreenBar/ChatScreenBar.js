import React from 'react'
import { withStyles } from '@material-ui/styles'
import style from './style'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar'
import defaultProfileImg from 'assets/images/defaultProfileImage.png'
import Icon from '@material-ui/core/Icon'
import PubSub from 'utils/EventBus'


function ChatScreenBar(props) {
    const { classes } = props

    const action = () => {
        console.log('hello');
        PubSub.notify('snackNotification', { message: 'Hello World' })
    }

    return (
        <AppBar position='static' elevation={0} square={true}
            classes={{
                root: classes.appbar
            }}>
            <Toolbar classes={{ root: classes.toolbarContainer }}>
                <div className={classes.flexRow}>
                    {props.friendImage !== 'account_circle' ?
                        <Avatar alt={'Friend Image'} src={props.friendImage} classes={{ root: classes.avatarContainer }} />
                        :
                        <IconButton className={classes.iconButton} style={{ padding: '0px' }} disableRipple>
                            <Icon classes={{ root: classes.icon }} style={{ fontSize: '2em' }}>{props.friendImage}</Icon>
                        </IconButton>
                    }
                    <div>
                        <Typography variant='body2' noWrap classes={{ root: classes.friendNameContainer }}>{props.friendName}</Typography>
                        <Typography variant='caption'>{props.friendStatus}</Typography>
                    </div>
                </div>
                <div className={classes.flexRow}>
                    <IconButton className={classes.iconButton}>
                        <Icon classes={{ root: classes.icon }}>{props.attachIconName}</Icon>
                    </IconButton>

                    <IconButton className={classes.iconButton}>
                        <Icon classes={{ root: classes.icon }}>{props.addFriendIcon}</Icon>
                    </IconButton>
                </div>
            </Toolbar>

        </AppBar>
    )
}

ChatScreenBar.defaultProps = {
    friendImage: 'account_circle',
    friendName: 'John Doe sadhasdlaslkjdajlkdjalskjdlaksjdlajslkdjalskjl',
    attachIconName: 'attach_file',
    addFriendIcon: 'person_add',
    friendStatus: 'online'
}

ChatScreenBar.proptype = {
    friendImage: PropTypes.string,
    friendName: PropTypes.string,
    attachIconName: PropTypes.string,
    addFriendIcon: PropTypes.string,
    friendStatus: PropTypes.string
}

export default withStyles(style)(ChatScreenBar)