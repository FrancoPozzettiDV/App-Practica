import React , {Component} from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
const personas = require("./personas.json");

export default class Agenda extends Component {
  
  render(){
    return (
      <Container>
        <Content>
		<List dataArray={personas} renderRow={(item) =>
            <>
			<ListItem itemDivider style={{backgroundColor: '#43A047'}}>
				<Text style={{color: '#fff',fontWeight:'bold'}}>{item.nombre}</Text>
			</ListItem>
			<ListItem>
				<Text>Teléfono: {item.telefono}</Text>
			</ListItem>
			<ListItem>
				<Text>Email: {item.email}</Text>
            </ListItem>
			</>
		  }>                    
        </List>
        </Content>
      </Container>
      
    );
  }
 
}