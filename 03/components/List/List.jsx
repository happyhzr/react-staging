import React, { Component } from 'react'
import PropTypes from "prop-types"

import Item from "../Item/Item"

import "./List.css"

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    }

    render() {
        return (
            <ul className="todo-main">
                {
                    this.props.todos.map((todo) => {
                        return <Item key={todo.id} {...todo} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo} />
                    })
                }
            </ul>
        )
    }
}
