import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import {COLORS, SITEURL} from '../../constants/Colors';
import HTMLView from 'react-native-htmlview';
import {styles} from './styles';

const NewsDetailsCard = ({data}) => {
  const {
    container,
    cardImage,
    dateContainer,
    date,
    cardTitle,
    infoContainer,
    buttonContainer,
    wrapper,
    seenContainer,
  } = styles;
  const {eventTitle, btn, seenNumb} = data;
  const regex = /(<([^>]+)>)/gi;
  const newsDetails = data.content.replace(regex, '');
  return (
    <View style={container}>
      <ImageBackground
        source={{
          uri: SITEURL + data.image,
        }}
        style={cardImage}></ImageBackground>
      <View style={infoContainer}>
        <View style={wrapper}>
          <View style={dateContainer}>
            <FontAwesome5
              name="calendar"
              size={12}
              color={COLORS.MOSTLY_DESATURATED_DARKER_BLUE}
            />
            <Text style={date}>{data.publish_date}</Text>
          </View>
          <View style={seenContainer}>
            <FontAwesome5
              name="eye"
              size={12}
              color={COLORS.MOSTLY_DESATURATED_DARKER_BLUE}
            />
            <Text style={date}>{data.blog_id}</Text>
          </View>
        </View>
        <Text style={cardTitle}>{eventTitle}</Text>
        <HTMLView value={newsDetails} />
      </View>
      <View style={buttonContainer}>{btn}</View>
    </View>
  );
};

export default NewsDetailsCard;
