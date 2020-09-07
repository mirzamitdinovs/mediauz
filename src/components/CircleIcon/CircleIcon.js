import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

const CircleIcon = ({circleHeight, circleWidth, icon}) => {
  const {container, imageContainer} = styles;
  return (
    <View style={[imageContainer, {height: circleHeight, width: circleWidth}]}>
      {icon}
    </View>
  );
};

export default CircleIcon;
