import React from "react"

import welcome from "./Welcome.module.css"

class Welcome extends React.Component{
    render(){
        return <h2 className={welcome.demo}>Welcome</h2>
    }
}

export default Welcome