import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import {COLORS, SITEURL} from '../../constants/Colors';
import {styles} from './styles';

export const NewsCard = ({btn, navigation, data}) => {
  const {
    container,
    cardImage,
    dateContainer,
    date,
    cardTitle,
    infoContainer,
    buttonContainer,
  } = styles;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('NewsDetails', {
          data: data,
        })
      }>
      <View style={container}>
        <Image
          source={{
            uri: SITEURL + data.image,
          }}
          style={cardImage}
        />
        <View style={infoContainer}>
          <View style={dateContainer}>
            <FontAwesome5
              name="calendar"
              size={16}
              color={COLORS.MOSTLY_DESATURATED_DARKER_BLUE}
            />
            <Text style={date}>{data.publish_date}</Text>
          </View>
          <Text style={cardTitle}>{data.title}</Text>
        </View>
        <View style={buttonContainer}>{btn}</View>
      </View>
    </TouchableOpacity>
  );
};
