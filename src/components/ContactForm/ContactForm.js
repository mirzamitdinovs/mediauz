import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants/Colors';
import {styles} from './styles';
const ContactForm = ({subjectTitle, questions, send}) => {
  const {container, inputItem, textAreaItem, btnContainer, btnText} = styles;
  return (
    <View style={container}>
      <TextInput
        style={inputItem}
        placeholder={subjectTitle}
        placeholderTextColor={COLORS.DESATURATED_DARK_BLUE}
      />

      <TextInput
        multiline={true}
        numberOfLines={4}
        style={textAreaItem}
        placeholder={questions}
        placeholderTextColor={COLORS.DESATURATED_DARK_BLUE}
      />
      <TouchableOpacity style={btnContainer}>
        <Text style={btnText}>{send}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ContactForm;
