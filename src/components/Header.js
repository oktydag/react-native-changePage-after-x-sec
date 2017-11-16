import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {

  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
    <Text style={textStyle}> { props.HeaderText } </Text>
    </View>
  );
};


const styles = {
  textStyle: {
    fontSize: 30,
    color: '#FF4000'
  },
  viewStyle: {
    backgroundColor: '#F5ECCE',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    shadowOffset: { widht: 0, height: 2 },
    shadowOpacity: 0.2,
  }

};

export default Header;
