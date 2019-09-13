import React, {PureComponent} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class PureComp extends PureComponent  {
render() {
    console.log("Pure Component Render")
    return (
        <View >
          <Text>Pure Component {this.props.name}</Text>
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
