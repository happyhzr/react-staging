import React, { Component } from 'react'
import qs from "querystring"

const detailData = [
    { id: "01", content: "hello, china." },
    { id: "02", content: "hello, china." },
    { id: "03", content: "hello, china." },
]

export default class Detail extends Component {
    render() {
        const detail = qs.parse(this.props.location.search.slice(1))
        console.log(detail)
        const result = detailData.find((item) => {
            return item.id === detail.id
        })
        return (
            <ul>
                <li>ID: {detail.id}</li>
                <li>TITLE: {detail.title}</li>
                <li>CONTENT: {result.content}</li>
            </ul>
        )
    }
}
