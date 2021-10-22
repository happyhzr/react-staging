import React, { Component } from 'react'
import PropTypes from "prop-types"
import { nanoid } from "nanoid"

import "./Header.css"

export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            if (event.target.value.trim() === "") {
                alert("input cannot be empty")
                return
            }
            const todo = {
                id: nanoid(),
                name: event.target.value,
                done: false,
            }
            this.props.addTodo(todo)
            event.target.value = ""
        }
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}
