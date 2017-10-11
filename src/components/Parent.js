import React, { Component } from "react"
import Child from "./Child"

// 7. Parent takes the store as a prop
class Parent extends Component {
    render() {
        // 8. get current (or default) name from store in this.props
        const name = this.props.store.getState().name
        
        return (
            <div>
                <h2>Child's name is {name}</h2>
                {/* 9. pass the above name and pass along this.props.store into child, from redux in index.js */}
                <Child name={name} store={this.props.store} />
            </div>
        )
    }
}

export default Parent

// 10. now go to Child component