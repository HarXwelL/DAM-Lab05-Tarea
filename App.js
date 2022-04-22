import * as React from 'react';
import {Component} from 'react';
import OurFlatList from './app/components/ourFlatList/OurFlatList';
import ConexionFetch from './app/components/conexionFetch/ConexionFetch';
import login from './app/components/screen/login';
import { 
  Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ConexionFetch />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function DetailsScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <h1>DETALLES</h1>
      <Text>
        Tambien es una composicion de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, si puede ser descifrado por su destinatario original. En otras palabras, un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto.
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      count: 0,
    };
  }
/*
  changeTextInput = text => {
    this.setState({textValue: text});
  };
  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }
*/
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="MOVIES JOSUE" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
      
    );
    /*return (
      <View style={styles.container}>
        <OurFlatList />
        <View style={styles.text}>
          <Text>Hola Amigos </Text>
        </View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.changeTextInput(text)}
          value = {this.state.textValue}
        />
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text> Touch here </Text>
        </TouchableOpacity>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.count}
          </Text>
      </View>
    </View>
    ); */
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {
    alignItems: "center",
    padding: 10,
  },
  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});