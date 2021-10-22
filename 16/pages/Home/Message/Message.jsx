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
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((message) => {
                            return (
                                <li key={message.id} >
                                    <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Route path="/home/message/detail/:id/:title" component={Detail} />
            </div >
        )
    }
}
