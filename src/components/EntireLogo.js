import React from 'react';
import { View, Text, Image  } from 'react-native';

const girisLogo = () => {
  const { subContainerStyle, ImageStyle } = styles;
  return (
      <View style={subContainerStyle}>
       {/*<Image style={styles.ImageStyle}  source={require('./img/logo.png')} /> */}
      <Image style={styles.ImageStyle}  source={require('./img/Sonlogo')} /> 
     
      </View>
  );
};

const styles = {

  subContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start', 
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'

  },
  ImageStyle: {
    height: 300,
    weight:302  
  }

};



export default girisLogo;
