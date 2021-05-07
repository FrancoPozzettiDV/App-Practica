import React , {Component} from 'react';
import { Container, Header, Left, Right, Body, Title, Content, List, ListItem, Text, Button, Item, Input, Icon, Thumbnail, H2 } from 'native-base';

export default class Giphy extends Component {
  
  constructor(props){
    super(props);
    this.state = {text:"",imagenes:[]};
    this.obtenerGIFS = this.obtenerGIFS.bind(this);
	api_key = ""; //INSERT API KEY HERE
}


obtenerGIFS() {
  
  return fetch('https://api.giphy.com/v1/gifs/search?api_key='+api_key+'&q='+this.state.text+'&limit=10&offset=0&rating=G&lang=es')
    .then((response) => response.json())
    .then((json) => {
	
	  var arr = [];
	  for (var i = 0; i < 10; i++) {
        let imagen = json.data[i].images.fixed_height_small.url;
		arr.push(imagen);
	}
	  this.setState({imagenes:arr});
	  
    })
    .catch((error) => {
      console.error(error);
    });
}


render(){
    var params = this.props.route.params
	return (
      <Container>
        <Content>
		<H2 style = {{margin: '2%', alignSelf: 'center'}}>¡Bienvenido {params.nombre}!</H2>
		<Item rounded style = {{justifyContent: 'center', alignItems: 'center', marginTop: '3%'}}>
            <Input placeholder='Ingresar GIF' onChangeText={(aText =>this.setState({text:aText}))}/>
			<Icon name='search' onPress={this.obtenerGIFS} style={{fontSize: 40, color: '#3F51B5'}}/>
          </Item>
         
		<Button onPress={this.obtenerGIFS} style = {{padding: '20%', margin: '5%', alignSelf: 'center'}}>
            <Text>Buscar</Text>
          </Button>
		  
		<List dataArray={this.state.imagenes} renderRow={(item) =>
           <ListItem>
			 <Body>
			 <Thumbnail square large source={{uri: item}} style={{width: 120, height: 120}}></Thumbnail>
			 </Body>
			 <Right>
			 <Thumbnail large source={{uri: item}} style={{width: 120, height: 120}}></Thumbnail>
			 </Right>
		   </ListItem>}>                    
        </List>
    
        </Content>
      </Container>
      
    );
  }
 
}
