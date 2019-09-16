import React from 'react'
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import style from './style'
import ChatScreenBar from './ChatScreenBar/ChatScreenBar';


class ChatScreen extends React.Component {


    render() {
        const { classes } = this.props
        return (
            <Paper className={{ root: classes.container }} square>
                <ChatScreenBar />
            </Paper>
        )
    }
}


export default withStyles(style)(ChatScreen)