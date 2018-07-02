import React, {Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            email:'',
            name:''
        }

        this.submit = this.submit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    submit(element){
        console.log(this.state.name)
        console.log(this.state.email)
        return element.preventDefault()
    }

    onChange(field){
        let nameField = field.target.name
        let value = field.target.value
        this.setState({
            [nameField] : value
        })

    }

    render(){
        return (
            <div>
                <form action="" onSubmit={this.submit}>
                    <input type="text" onChange={this.onChange}
                    id="name" name="name" 
                    value={this.state.name}/>
                    <input type="text" id="email" onChange={this.onChange}  
                    name="email" value={this.state.email}/>
                    <button type="submit">Salvar</button>
                </form>
                <p>{this.state.name} - {this.state.email}</p>
            </div>
        )
    }
}

export default Form