import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
const ContactCard = ({cardbgColor, cardTitle, cardText, cardIcon}) => {
  const {container, iconContainer, title, text} = styles;
  return (
    <View style={[container, cardbgColor]}>
      <View style={iconContainer}>{cardIcon}</View>
      <View>
        <Text style={title}>{cardTitle}</Text>
        <Text style={text}>{cardText}</Text>
      </View>
    </View>
  );
};

export default ContactCard;
