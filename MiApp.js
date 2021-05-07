import React , {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import {Content, List, ListItem, Left, Right} from 'native-base';
import Saludador from "./components/Saludador/View";
import Calculadora from "./components/Calculadora/View";
import Agenda from "./components/Agenda/View";
import Api from "./components/API/View";
import Giphy from "./components/Giphy/View";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


class Menu extends Component {
	constructor(props){
        super(props);
        this.state = {texto:""};
    }
	
  render(){
    return (
	<View style={styles.container}>
      <Content>
		  
		  <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style = {styles.imagen} ></Image>
		  <TextInput maxLength="10" onChangeText={(aText =>this.setState({texto:aText}))} placeholder="Ingresar nombre" style={styles.input}></TextInput>
		  
		  <List>
            <ListItem style = {{justifyContent: 'center', alignItems: 'center', marginTop: '5%'}}>
                
                  <Button disabled={this.state.texto==="" ? true : false} title="Giphy"
                    onPress={() => this.props.navigation.navigate('Giphy',{
									nombre:this.state.texto
					})}
                  />
            </ListItem>    
            <ListItem style = {{justifyContent: 'center', alignItems: 'center', marginTop: '5%'}}>
                
                  <Button disabled={this.state.texto==="" ? true : false} title="Frases"
                          onPress={() => this.props.navigation.navigate('Api',{
										nombre:this.state.texto
					})}
                  />
                
            </ListItem>
			<ListItem style = {{justifyContent: 'center', alignItems: 'center', marginTop: '5%'}}>
                
                  <Button title="Agenda"
                    onPress={() => this.props.navigation.navigate('Agenda')}
                  />
            </ListItem>
			<ListItem style = {{justifyContent: 'center', alignItems: 'center', marginTop: '5%'}}>
                
                  <Button title="Calculadora"
                    onPress={() => this.props.navigation.navigate('Calculadora')}
                  />
            </ListItem>
			<ListItem style = {{justifyContent: 'center', alignItems: 'center', marginTop: '5%'}}>
                
                  <Button title="Saludador"
                    onPress={() => this.props.navigation.navigate('Saludador')}
                  />
            </ListItem>
          </List>
        </Content>
	</View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
	alignItems: 'center',
    justifyContent: 'center'
  },
   imagen: {
    height: 100,
	width: 100,
	marginTop: '5%',
    alignSelf: 'center'
  },
  input: {
    height: 30,
    width: 200,
	marginTop: '5%',
    textAlign: 'center',
	borderWidth : 2,
	borderColor: '#0277BD'
  },
});



const Stack = createStackNavigator();
export default class MiApp extends Component {
  
  render(){
    return (
      <NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name='Inicio'
				component={Menu}
				options={{title:'Inicio',headerStyle: {backgroundColor: '#0277BD'}, headerTintColor: '#fff'}}
			/>
			<Stack.Screen
				name='Saludador'
				component={Saludador}
				options={{title:'Saludador',headerStyle: {backgroundColor: '#546E7A'}, headerTintColor: '#fff'}}
			/>
			<Stack.Screen
				name='Calculadora'
				component={Calculadora}
				options={{title:'Calculadora',headerStyle: {backgroundColor: '#F44336'}, headerTintColor: '#fff'}}
			/>
			<Stack.Screen
				name='Agenda'
				component={Agenda}
				options={{title:'Agenda',headerStyle: {backgroundColor: '#2E7D32'}, headerTintColor: '#fff'}}
			/>
			<Stack.Screen
				name='Api'
				component={Api}
				options={{title:'Frases',headerStyle: {backgroundColor: '#EC407A'}, headerTintColor: '#fff'}}
			/>
			<Stack.Screen
				name='Giphy'
				component={Giphy}
				options={{title:'GIFS',headerStyle: {backgroundColor: '#3F51B5'}, headerTintColor: '#fff'}}
			/>
		</Stack.Navigator>
	  </NavigationContainer>
    );
  }
  
}


