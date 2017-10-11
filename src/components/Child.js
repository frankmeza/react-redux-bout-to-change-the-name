import React, { Component } from "react"

class Child extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ name: event.target.value })
    }

    handleSubmit() {
        this.props.store.dispatch(this.setName(this.state.name))
    }

    setName(name) {
        return {
            type: "SET_NAME",
            name
        }
    }

    render() {
        return (
            <div>
                <h3>My name is {this.state.name}</h3>
                <input type="text" onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Repeat name</button>
            </div>
        )
    }
}

export default Child