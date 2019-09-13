import React, {Component, PureComponent} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class RegComponent extends Component {
render() {
    console.log("Regular Component Render")
  return (
    <View >
      <Text>Regular Component {this.props.name}</Text>
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
