import React , {Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';


export default class Calculadora extends Component {
  
	constructor(props){
		super(props);
		this.state = {numero1:"",numero2:"",resultado:""};
		this.sumar = this.sumar.bind(this);
		this.restar = this.restar.bind(this);
		this.multiplicar = this.multiplicar.bind(this);
		this.dividir = this.dividir.bind(this);
	}
  
  state = {numero1:"",numero2:"",resultado:""};
  
  sumar(){
	var var1 = Number(this.state.numero1);
	var var2 = Number(this.state.numero2);
	var result = var1+var2;
	this.setState({resultado:result});
	return result;
  }
  restar(){
    var var1 = Number(this.state.numero1);
	var var2 = Number(this.state.numero2);
	var result = var1-var2;
	this.setState({resultado:result});
	return result;
  }
  multiplicar(){
    var var1 = Number(this.state.numero1);
	var var2 = Number(this.state.numero2);
	var result = var1*var2;
	this.setState({resultado:result});
	return result;
  }
  dividir(){
    var var1 = Number(this.state.numero1);
	var var2 = Number(this.state.numero2);
	if(var2 == 0){
		var result = "No se puede dividir 0";
		this.setState({resultado:result});
		return result;
	}else{
	  var result = var1/var2;
	  this.setState({resultado:result});
	  return result;
	}
  }
  
  
  render(){
    return (
      <View style={styles.container}>
        <Text style={{fontSize: '20px'}}>Calculadora</Text>
        <TextInput onChangeText={(aText =>this.setState({numero1:aText}))} placeholder="Ingresar primer numero" style={styles.inputs}></TextInput>
		<TextInput onChangeText={(bText =>this.setState({numero2:bText}))} placeholder="Ingresar segundo numero" style={styles.inputs}></TextInput>
		<View style={styles.buttons}>
		<Button title="SUMAR" color='#F44336' onPress={this.sumar}></Button>
		</View>
		<View style={styles.buttons}>
		<Button style={styles.buttons} color='#F44336' title="RESTAR" onPress={this.restar}></Button>
		</View>
		<View style={styles.buttons}>
		<Button style={styles.buttons} color='#F44336' title="MULTIPLICAR" onPress={this.multiplicar}></Button>
		</View>
		<View style={styles.buttons}>
		<Button style={styles.buttons} color='#F44336' title="DIVIDIR" onPress={this.dividir}></Button>
        </View>
		<Text style={{fontSize: '20px',marginTop:'1em'}}>Resultado: {this.state.resultado}</Text>
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
  buttons: {
	  marginTop: '1em'
  },
  inputs: {
	  height:30,
	  width:190,
	  textAlign: 'center',
	  marginTop: '1em',
	  borderWidth : 2,
	  borderColor: '#F44336'
  }
});
