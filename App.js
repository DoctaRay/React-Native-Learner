import React from 'react';
import {
   StyleSheet,
    Text,
    View,
    Button,
    Image,
    Alert,
    TextInput
} from 'react-native';

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation'

class Box extends React.Component {
  render() {
    return (
      <View style={styles.box}>
      <Text style={styles.text}>{this.props.props}</Text>
      </View>
    )
  }

}



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  heyThere() {
    Alert.alert("You tapped the button")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Cool text</Text>
        <Text style={{color: "red"}}> hot text </Text>
        <TextInput
          style={{height: 60}}
          placeholder="Type some text here!!!"
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={() => Alert.alert("Submitted!")}
        />
        <Box props={this.state.text}/>
        <Button
          onPress={this.heyThere}
          title='Click me!'
          color='#841584'
          accessibilityLabel="For people who can't read the text easily."
          />
        <Image
        style={{height: 100, width: 200}}
        source={{uri: "https://cdn-images-1.medium.com/max/1000/1*GkR93AAlILkmE_3QQf88Ug.png"}} />
      </View>
    );
  }
}

class Info extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Lots of info!!!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 30,
  },
  box: {
    borderStyle: "solid",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 15,
  },
  text: {
    color: "blue",
    backgroundColor: "orange",
  },
});

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Info: Info,
})

export default createAppContainer(TabNavigator);
