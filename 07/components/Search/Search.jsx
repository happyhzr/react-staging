import React, { Component } from 'react'
// import axios from "axios"
import PubSub from 'pubsub-js'

import "./Search.css"

export default class Search extends Component {
    search = async () => {
        PubSub.publish("my_topic", { isFirst: false, isLoading: true })
        // axios.get(`/api1/search/users?q=${this.keyWordElement.value}`)
        //     .then((response) => {
        //         PubSub.publish("my_topic", { isLoading: false, users: response.data.items })
        //     })
        //     .catch((error) => {
        //         PubSub.publish("my_topic", { isLoading: false, err: error.message })
        //     })
        // fetch(`/api1/search/users?q=${this.keyWordElement.value}`)
        //     .then((response) => { return response.json() })
        //     .then((data) => { console.log(data) })
        //     .catch((error) => { console.log(error) })
        try {
            const response = await fetch(`/api1/search/users?q=${this.keyWordElement.value}`)
            const data = await response.json()
            PubSub.publish("my_topic", { isLoading: false, users: data.items })
        } catch (error) {
            PubSub.publish("my_topic", { isLoading: false, err: error.message })
        }
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
