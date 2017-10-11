import React, { Component } from "react"

export class Parent extends Component {
    constructor() {
        super()
        
        this.state = {
            name: "Frank"
        }
    }

    setName(name) {
        this.setState({ name })
    }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}

