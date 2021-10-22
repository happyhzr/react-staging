import React, { Component } from 'react'
import { withRouter } from "react-router-dom"

class Header extends Component {
    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }

    go = () => {
        this.props.history.go(2)
    }

    render() {
        console.log(this.props)
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.back}>go back</button>
                <button onClick={this.forward}>go forward</button>
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}

export default withRouter(Header)
