import React, { Component } from 'react'

const detailData = [
    { id: "01", content: "hello, china." },
    { id: "02", content: "hello, china." },
    { id: "03", content: "hello, china." },
]

export default class Detail extends Component {
    render() {
        const result = detailData.find((item) => {
            return item.id === this.props.match.params.id
        })
        return (
            <ul>
                <li>ID: {this.props.match.params.id}</li>
                <li>TITLE: {this.props.match.params.title}</li>
                <li>CONTENT: {result.content}</li>
            </ul>
        )
    }
}
