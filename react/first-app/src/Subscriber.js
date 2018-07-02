import React, { Component } from 'react'
import firebase from 'firebase'

class Subscriber extends Component{
    constructor(props){
        super(props)

        this.state = {
            subscribers:[]
        }

        this.addSubscriber = this.addSubscriber.bind(this)
    }

    addSubscriber(){
        let subscriber = {
            nome:'DM122_2' + new Date().toLocaleString(),
            email:'dm122_2@dm122' + new Date().toLocaleString()
        }
        let firebaseDabase = firebase.database()
        firebaseDabase.ref('subscribers').push(
            subscriber,
            (err) => {
                console.log(err)
            }
        )
    }

    componentWillMount(){
        let subscribersRef = firebase.database().ref('subscribers')
        subscribersRef.on(
            'value',(dataSnapshot) => {
                let items = dataSnapshot.val()
                let values = []
                for(let item in items){
                    values.push({
                        id: item,
                        nome: items[item].nome,
                        email: items[item].email
                    })
                }
                this.setState({
                    subscribers: values
                })
            }
        )
    }

    render(){
        return(
            <div>
                <button onClick={this.addSubscriber}>Salvar</button>
                <ul>
                    {
                        this.state.subscribers.map((subscriber) => (
                           <li key={subscriber.id}>
                               {subscriber.nome} | {subscriber.email} 
                           </li>   
                        ))
                    }
                </ul>
            </div>
        )
    }
}
export default Subscriber
