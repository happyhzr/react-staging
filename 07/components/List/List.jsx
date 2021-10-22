import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: "",
    }

    componentDidMount() {
        this.token = PubSub.subscribe("my_topic", (msg, data) => {
            this.setState(data)
        })
    }

    componentWillUnmount() {
        PubSub.subscribeOnce(this.toten)
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.isFirst ? <h2>welcome to use</h2> :
                        this.state.isLoading ? <h2>loading...</h2> :
                            this.state.err ? <h2 style={{ color: "red" }}>{this.state.err}</h2> :
                                this.state.users.map((user) => {
                                    return (
                                        <div className="card" key={user.id}>
                                            <a href={user.html_url} target="_blank" rel="noreferrer">
                                                <img src={user.avatar_url} style={{ width: "100px" }} alt="avatar" />
                                            </a>
                                            <p className="card-text">{user.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}
