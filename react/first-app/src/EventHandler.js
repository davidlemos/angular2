import React, {Component} from 'react'

class EventHandler extends Component{
    constructor(props){
        super(props)

        this.state = {
            clicked: 0
        }

       this.clickMe = this.clickMe.bind(this)
    }

    clickMe(e){
        this.setState({clicked: this.state.clicked + 1})
    } 

    render(){
        return (
            <div>
                <button onClick={this.clickMe}>Click me</button>
                <p>{this.state.clicked}</p>
            </div>
        )
    }
}

export default EventHandler
