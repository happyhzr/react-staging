import React, { Component } from 'react'
// import qs from "querystring"

const detailData = [
    { id: "01", content: "hello, china." },
    { id: "02", content: "hello, china." },
    { id: "03", content: "hello, china." },
]

export default class Detail extends Component {
    render() {
        console.log(this.props)
        // const detail = qs.parse(this.props.location.search.slice(1))
        const result = detailData.find((item) => {
            return item.id === this.props.location.state.id
        })
        return (
            <ul>
                <li>ID: {this.props.location.state.id}</li>
                <li>TITLE: {this.props.location.state.title}</li>
                <li>CONTENT: {result.content}</li>
            </ul>
        )
    }
}
