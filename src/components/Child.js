import React, { Component } from "react"

class Child extends Component {
    // 11. the store is passed into this component's props
    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // 12. this handles the state within Child, for instant update
    handleChange(event) {
        this.setState({ name: event.target.value })
    }

    // 13. this is the action that will be emitted to the store to change app state
    setName(name) {
        return {
            type: "SET_NAME",
            name
        }
    }

    // 14. the action within setName is hidden within this 
    // function, which is called from within the component
    handleSubmit() {
        this.props.store.dispatch(this.setName(this.state.name))
    }

    render() {
        return (
            <div>
                <h3>My name is {this.state.name}</h3> {/* 15. this is constantly updated from handleChange  */}
                <input type="text" onChange={this.handleChange} />
                {/* 16. handled above */}
                <button onClick={this.handleSubmit}>Repeat name</button>
            </div>
        )
    }
}

export default Child