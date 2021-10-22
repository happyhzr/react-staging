import React, { Component } from 'react'
import axios from "axios"

import "./Search.css"

export default class Search extends Component {
    search = () => {
        this.props.updateAppState({ isFirst: false, isLoading: true })
        axios.get(`/api1/search/users?q=${this.keyWordElement.value}`)
            .then((response) => {
                this.props.updateAppState({ isLoading: false, users: response.data.items })
            })
            .catch((error) => {
                this.props.updateAppState({ isLoading: false, err: error.message })
            })
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={(c) => { return this.keyWordElement = c }} />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
