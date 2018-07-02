import React, {Component} from 'react'
import '../src/App.css'

const title = '**DM122***'

class JSXSintaxe extends Component{
    constructor(props){
        super(props)

        this.state = {
            show:true
        }
    }

    componentWillMount(){
        
        this.setState({
            show:true
        })

        console.log(this.state.show)
    }

    render(){
        if (!this.state.show) {
            return null
        }

        return (
            <div>
                <h1 className="App-header"
                    style={{border:'4px solid red'}}>
                    {title}
                </h1>
            </div>
        )
    }
}

export default JSXSintaxe