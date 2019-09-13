import React, {Component, PureComponent} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PureComp from './PureComp';
import RegComponent from './RegComponent'


export default class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            name: "Mehul"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name : "Mehul"
            })
        }, 2000)
    }


 render() {
     console.log("*****Parent Component Render*****")
   return (
     <View >
       <Text>Parent Component</Text>
       <RegComponent name={this.state.name}></RegComponent>
       <PureComp name={this.state.name}></PureComp>
     </View>
   );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});