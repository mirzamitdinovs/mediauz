import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const TagItem = ({tagIcon, tagTitle}) => {
  const {container, title} = styles;
  return (
    <View style={container}>
      {tagIcon}
      <Text style={title}>{tagTitle}</Text>
    </View>
  );
};

export default TagItem;
