import React, { Component } from "react"

export class Parent extends Component {
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
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}

