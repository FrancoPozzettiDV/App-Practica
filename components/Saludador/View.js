import React , {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


export default class Saludador extends Component {
  
  constructor(props){
        super(props);
        this.state = {text:"",input:"",imagen:0};
        this.saludar = this.saludar.bind(this);
    }
  
  
  state = {text:"",input:""};
  
  saludar(){
	if(this.state.input === ""){
	this.setState({text:"Hola, como andas!"});
	}else{
	this.setState({text:"Hola como andas, "+this.state.input+"!"});
	}
	this.setState({imagen:1});
  }
  
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Saludador</Text>
        <TextInput onChangeText={(aText =>this.setState({input:aText}))} placeholder="Ingresar nombre" style={styles.input}></TextInput>
		<Button title="SALUDAR" color="#546E7A" onPress={this.saludar}></Button>
		<Image style={{height:100,width:100,opacity: this.state.imagen}} source={{uri: "https://media.giphy.com/media/bcKmIWkUMCjVm/giphy.gif"}}/>
		<Text style={styles.texto}>{this.state.text}</Text>
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
  texto:{
	  fontSize:'20px',
	  marginBottom:'1em'
  },
  input:{
	height: 30,
    width: 200,
	marginBottom:'1em',
    textAlign: 'center',
	borderWidth : 2,
	borderColor: '#546E7A'
  }
});
