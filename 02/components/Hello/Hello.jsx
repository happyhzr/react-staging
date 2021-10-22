import React from "react"

import hello from "./Hello.module.css"

class Hello extends React.Component{
    render(){
        return <h2 className={hello.title}>hello, react.</h2>
    }
}

export default Hello