import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PureComp from './PureComp'
import ParentComp from './ParentComp';

export default class App extends Component {
render() {
  return (
    <View style={styles.container}>
       <ParentComp />
    </View>
  );
}  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
