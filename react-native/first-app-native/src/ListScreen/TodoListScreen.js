import React, {Component} from 'react'
import {
    Container, Content, Header, Body, Title, Fab, Right, Icon
} from 'native-base'

import ListViewComp from './ListView'

class TodoListScreen extends Component{
    constructor(props){
        super(props)

        this.goToAdd = this.goToAdd.bind(this)
    }

    goToAdd(){
        //vai para outra view
    }

    render(){
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>O que devo fazer</Title>
                    </Body>
                </Header>
                <Content padder>
                    <ListViewComp />
                </Content>
                <Fab position="bottomRight"
                     onPress={() => {this.goToAdd()}}>
                 <Icon name="add"/>   
                </Fab>
            </Container>
        )
    }
}

export default TodoListScreen