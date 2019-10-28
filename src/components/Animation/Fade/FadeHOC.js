import React from 'react'
import './Fade.module.css'
import { CSSTransition } from 'react-transition-group';



export default class FadeHOC extends React.Component {

    state = {
        isVisible: false
    }

    toggleDisplay = () => {
        console.log( this.state.isVisible)
        this.setState({ ...this.state, isVisible: !this.state.isVisible })
    }


    render() {
        return (
            <>
                <CSSTransition classNames='my-node' timeout={500} in={true}>
                    <div>{this.props.children}</div>
                </CSSTransition>
                <button onClick={this.toggleDisplay}>Toggle Display</button>
            </>
        )
    }
}
