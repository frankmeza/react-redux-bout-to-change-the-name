import React, { Component } from "react"
import Child from "./Child"

class Parent extends Component {
    render() {
        // get name from store in the props
        const name = this.props.store.getState().name
        
        return (
            <div>
                <h2>Child's name is {name}</h2>
                {/* pass the above name into child, and pass along this.props.store, from redux in index.js */}
                <Child name={name} store={this.props.store} />
            </div>
        )
    }
}

export default Parent