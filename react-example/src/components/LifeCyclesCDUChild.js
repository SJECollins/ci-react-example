import React, { Component } from 'react'

export class LifeCyclesCDUChild extends Component {
    constructor(props) {
        console.log("child constructor called")
        super(props)

        this.state = {
            greeting: "Hello"
        }
    }

    updateGreeting = () => {
        console.log("child update greeting called")
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === "Hello" ? "Goodbye" : "Hello"
            }
        })
    }

    componentDidUpdate() {
        console.log("child component updated")
    }

    render() {
        console.log("child render method called")
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Greeting</button>
            </div>
        )
    }
}

export default LifeCyclesCDUChild