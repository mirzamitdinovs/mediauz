import React from 'react';
import {View, Text} from 'react-native';
import AnimateNumber from 'react-native-animate-number';
import CircleIcon from '../CircleIcon';
import {styles} from './styles';

const InfoItem = ({cardTitle, cardNumber, cardIcon}) => {
  const {title, container, number, textContent} = styles;
  return (
    <View style={container}>
      <CircleIcon icon={cardIcon} circleHeight={70} circleWidth={70} />
      <View style={textContent}>
        <Text style={title}>{cardTitle}</Text>
        <AnimateNumber
          countBy={1}
          // formatter={(val) => parseInt(val)}
          value={cardNumber}
          style={number}
        />
      </View>
    </View>
  );
};

export default InfoItem;
