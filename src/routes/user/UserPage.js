import React from 'react'
import { withStyles } from '@material-ui/styles'
import style from './style'
import UserLayout from 'common/components/UserLayout'
import ChatScreen from './ChatScreen';


class UserPage extends React.Component {
    render() {
        const {classes} = this.props

        return (
            <UserLayout >
                <div className={classes.container}>
                    <ChatScreen/>                    
                </div>
            </UserLayout>
        )
    }
}


export default withStyles(style)(UserPage)
