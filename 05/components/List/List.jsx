import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.isFirst ? <h2>welcome to use</h2> :
                        this.props.isLoading ? <h2>loading...</h2> :
                            this.props.err ? <h2 style={{ color: "red" }}>{this.props.err}</h2> :
                                this.props.users.map((user) => {
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
