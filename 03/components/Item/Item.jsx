import React, { Component } from 'react'

import "./Item.css"

export default class Item extends Component {
    state = { mouse: false }

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    handleDelete = (id) => {
        if (window.confirm("be sure to delete")) {
            this.props.deleteTodo(id)
        }
    }

    render() {
        return (
            <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} style={{ backgroundColor: this.state.mouse ? "#ddd" : "white" }}>
                <label>
                    <input type="checkbox" checked={this.props.done} onChange={this.handleCheck(this.props.id)} />
                    <span>{this.props.name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: this.state.mouse ? "block" : "none" }} onClick={() => { this.handleDelete(this.props.id) }}>删除</button>
            </li >
        )
    }
}
