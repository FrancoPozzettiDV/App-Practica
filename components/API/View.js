import React , {Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Content, Grid, Col, Row, Card, CardItem, Body } from "native-base";


export default class API extends Component {
  
  constructor(props){
        super(props);
        this.state = {text:"FRASE",author:"AUTOR"};
		this.getQuoteFromApi = this.getQuoteFromApi.bind(this);
    }
  
//http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en
//Access to fetch at ... from origin ... has been blocked by CORS policy


getQuoteFromApi() {
  return fetch('https://forismatic-proxy.herokuapp.com/')
    .then((response) => response.json())
    .then((json) => {
      this.setState({text:json.quoteText});
	  if(json.quoteAuthor === ""){
		this.setState({author:"Unknown"}) 
	  }else{
		this.setState({author:json.quoteAuthor});
	  }
    })
    .catch((error) => {
      console.error(error);
    });
}

 
  
  render(){
    var params = this.props.route.params
	return (
      <View style={styles.container}>
        <Content contentContainerStyle={{flex: 1}} >
		<Grid style={{alignItems: 'center'}}>
		<Row>
		<Col>
		<Text style={{marginTop: '80%',alignSelf: 'center',fontSize:'20px',marginBottom:'1em'}}>API de Frases</Text>
		<Text>Hola {params.nombre}, presione el botón</Text>
		<Button title="Obtener Frase" onPress={this.getQuoteFromApi} color="#EC407A"></Button>
		</Col>
		</Row>
		<Row>
		<Col>
		<Card style={{alignSelf: 'center'}}>
            <CardItem bordered>
              <Body>
                <Text>{this.state.text}</Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text style={{ fontWeight: 'bold' }}>{this.state.author}</Text>
            </CardItem>
          </Card>
		</Col>
		</Row>
		</Grid>
		  </Content>
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