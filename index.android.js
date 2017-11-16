

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Header from './src/components/Header';
// import Logo from './src/components/EntireLogo';

export default class Mobakiye extends Component {
  
    constructor(props){
 super(props)
 this.state = {
  //  component: <EntireLogo />
  component :     <View style={styles.containerStyles}><View style={styles.subContainerStyle}><Image style={styles.ImageStyle}  source={require('./img/1.png')} /></View></View>
 }
}


componentDidMount(){

     // Start counting when the page is loaded
     this.timeoutHandle = setTimeout(()=>{
          // Add your logic for the transition
          this.setState({ component:   <Header HeaderText={'Mobakiye'} /> })
     }, 2500);
}

componentWillUnmount(){
     clearTimeout(this.timeoutHandle); 
}

  render() {
    
    return (
       this.state.component
    );
  }
}



const styles = {
   containerStyles: {
    borderColor: '#ddd',  
    elevation: 1, //
    marginLeft: 5,
    marginRight: 9,
    marginTop: 30
  },
  subContainerStyle: {
    borderBottomWidth: 1,
    padding: 2,
    backgroundColor: '#fff',
    justifyContent: 'flex-start', 
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'

  },
  ImageStyle: {
    height: 500,
   flex:1
  },
  TextStyle: {
    color: '#ff6666',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',

  }

};

AppRegistry.registerComponent('Mobakiye', () => Mobakiye);
