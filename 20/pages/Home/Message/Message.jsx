import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Detail from "./Detail/Detail"

export default class Message extends Component {
    state = {
        messages: [
            { id: "01", title: "message01" },
            { id: "02", title: "message02" },
            { id: "03", title: "message03" },
        ],
    }

    pushShow = (id, title) => {
        return () => {
            // this.props.history.push(`/home/message/detail/${id}/${title}`)
            this.props.history.push(`/home/message/detail`, { id, title })
        }
    }

    replaceShow = (id, title) => {
        return () => {
            // this.props.history.replace(`/home/message/detail/${id}/${title}`)
            this.props.history.replace(`/home/message/detail`, { id, title })
        }
    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }

    forward = () => {
        this.props.history.go(2)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((message) => {
                            return (
                                <li key={message.id} >
                                    <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>
                                    {/* <Link to={`/home/message/detail?id=${message.id}&title=${message.title}`}>{message.title}</Link> */}
                                    {/* <Link to={{ pathname: "/home/message/detail", state: { id: message.id, title: message.title } }}>{message.title}</Link> */}
                                    &nbsp;<button onClick={this.pushShow(message.id, message.title)}>push</button>
                                    &nbsp;<button onClick={this.replaceShow(message.id, message.title)}>replace</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
                {/* <Route path="/home/message/detail" component={Detail} /> */}
                <Route path="/home/message/detail" component={Detail} />
                <button onClick={this.back}>go back</button>
                <button onClick={this.forward}>go forward</button>
                <button onClick={this.go}>go</button>
            </div >
        )
    }
}
