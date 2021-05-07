import { StatusBar } from 'expo-status-bar';
import  React , {Component} from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import MiApp from './MiApp';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {isReady: false};
  }
  
   async componentDidMount(){
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
	  ionicons: Ionicons.font['ionicons']
    });
    this.setState({isReady: true});
  }
  
  render(){
    if(!this.state.isReady){
      return (<AppLoading 
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}/>);
    }
    
    return (
      <MiApp></MiApp>
    );
  }
  

}

