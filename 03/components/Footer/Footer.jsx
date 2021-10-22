import React, { Component } from 'react'

import "./Footer.css"

export default class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    handleClearAllDone = () => {
        this.props.clearAllDone()
    }
    
    render() {
        const doneCount = this.props.todos.reduce((prev, curr) => {
            return prev + (curr.done ? 1 : 0)
        }, 0)
        const total = this.props.todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCount === total && total !== 0} onChange={this.handleCheckAll} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
            </div>
        )
    }
}
