import React from 'react'
import { withStyles } from '@material-ui/styles'
import style from './style'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar'
import defaultProfileImg from 'assets/images/defaultProfileImage.png'
import Icon from '@material-ui/core/Icon'


function ChatScreenBar(props) {
    const { classes } = props
    return (
        <AppBar position='static' elevation={0} square={true}
            classes={{
                root: classes.appbar
            }}>
            <Toolbar classes={{root: classes.toolbarContainer}}>
                <div className={classes.flexRow}>
                    <Avatar alt={'Friend Image'} src={props.friendImage} classes={{ root: classes.avatarContainer }} />
                    <Typography variant='body2'>{props.friendName}</Typography>
                </div>
                <div className={classes.flexRow}>
                    <Icon classes={{root: classes.icon}}>{props.attachIconName}</Icon>
                    <Icon classes={{root: classes.icon}}>{props.addFriendIcon}</Icon>
                </div>
            </Toolbar>

        </AppBar>
    )
}

ChatScreenBar.defaultProps = {
    friendImage: defaultProfileImg,
    friendName: 'John Doe',
    attachIconName: 'attach_file',
    addFriendIcon: 'person_add'
}

ChatScreenBar.proptype = {
    friendImage: PropTypes.string,
    friendName: PropTypes.string,
    attachIconName: PropTypes.string,
    addFriendIcon: PropTypes.string
}

export default withStyles(style)(ChatScreenBar)