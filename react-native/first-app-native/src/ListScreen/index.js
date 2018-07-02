import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import TodoListScreen from './TodoListScreen'

const HomeScreenRouter = StackNavigator(
    {
        Home:{
            screen: TodoListScreen,
            navigationOptions:{
                header: null
            }
        }
    },{
        headerMode:'screen'
    }
);

export default HomeScreenRouter
