import React, { Component } from 'react'

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import List from "./components/List/List"

import "./App.css"

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                { id: "001", name: "eat", done: true },
                { id: "002", name: "sleep", done: true },
                { id: "003", name: "code", done: false },
            ]
        }
    }

    addTodo = (todoObj) => {
        const newTodos = [todoObj, ...this.state.todos]
        this.setState({ todos: newTodos })
    }

    updateTodo = (id, done) => {
        const newTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, done }
            } else {
                return todo
            }
        })
        this.setState({ todos: newTodos })
    }

    deleteTodo = (id) => {
        const newTodos = this.state.todos.filter((todo) => {
            return todo.id !== id
        })
        this.setState({ todos: newTodos })
    }

    checkAllTodo = (done) => {
        const newTodos = this.state.todos.map((todo) => {
            return { ...todo, done }
        })
        this.setState({ todos: newTodos })
    }

    clearAllDone = () => {
        const newTodos = this.state.todos.filter((todo) => {
            return !todo.done
        })
        this.setState({ todos: newTodos })
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
                </div>
            </div>
        )
    }
}
