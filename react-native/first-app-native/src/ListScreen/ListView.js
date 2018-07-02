import React, {Component} from 'react'
import {ListView, View, Text, StyleSheet} from 'react-native'

class ListViewComp extends Component{
    constructor(props){
        super(props)

        this.state = {
            items: [
                "Item 1",
                "Item 2",
                "Item 3",
                "Item 4"
            ]
        }

        this.renderSingleRow = this.renderSingleRow.bind(this)
    }

    componentWillMount(){
        this.ds = new ListView.DataSource({
            rowHasChanged: (l1, l2) => l1 != l2 
        })
    }

    renderSingleRow(rowData){
        return (
            <View>
                <Text>
                    {rowData}
                </Text>
            </View>
        )
    }

    render(){
        let dataSource = this.ds.cloneWithRows(this.state.items)
        return (
            <ListView
                dataSource={dataSource}
                renderRow={(rowData) => this.renderSingleRow(rowData)}>

            </ListView>
        )
    }
}
export default ListViewComp