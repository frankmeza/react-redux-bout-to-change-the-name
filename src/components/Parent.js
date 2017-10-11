import React, { Component } from "react"
import Child from "./Child"

class Parent extends Component {
    constructor() {
        super()
        
        this.state = {
            name: "Frank"
        }

        this.setName = this.setName.bind(this)
    }

    setName(name) {
        this.setState({ name })
    }

    render() {
        return (
            <div>
                <h2>Child's name is {this.state.name}</h2>
                <Child name={this.state.name} setName={this.setName} />
            </div>
        )
    }
}

export default Parent