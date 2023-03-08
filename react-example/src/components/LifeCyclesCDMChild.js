import React, { Component } from 'react'

export class LifeCyclesCDMChild extends Component {
    constructor(props) {
        console.log("child constructor called")
        super(props)

        this.state = {
            data: "Child loading"
        }
    }

    getData() {
        console.log("child getData called")
        setTimeout(() => {
            console.log("child data fetched")
            this.setState({
                data: "Child loaded"
            })
        }, 3000)
    }

    componentDidMount() {
        console.log("child component mounted")
        this.getData()
    }

    render() {
        console.log("child render method called")
        return (
            <div>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}

export default LifeCyclesCDMChild