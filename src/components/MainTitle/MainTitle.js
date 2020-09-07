import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {styles} from './styles';
const MainTitle = ({title, text, titleColor, textColor, vis, sideMenu}) => {
  const {container, titleMainText, titleLine, titleIcon, titleText} = styles;
  return (
    <TouchableWithoutFeedback>
      <View style={[container, {display: vis ? 'none' : 'flex'}]}>
        <Text
          style={[
            titleMainText,
            {
              color: titleColor,
              fontSize: sideMenu ? 20 : 30,
              lineHeight: sideMenu ? 20 : 30,
            },
          ]}>
          {title}
        </Text>
        <View style={titleLine}>
          <Text style={titleIcon} />
        </View>
        <Text style={[titleText, {color: textColor}]}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MainTitle;
