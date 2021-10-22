import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"

import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Header from "./components/Header/Header"
import MyNavLink from "./components/MyNavLink/MyNavLink"

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* <a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}
                            {/* <NavLink className="list-group-item" to="/about">About</NavLink>
                            <NavLink className="list-group-item" to="/home">Home</NavLink> */}
                            <MyNavLink to="/happy/about" >About</MyNavLink>
                            <MyNavLink to="/happy/home" >Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/happy/about" component={About} />
                                    <Route path="/happy/home" component={Home} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
