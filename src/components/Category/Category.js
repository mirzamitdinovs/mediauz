import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {SITEURL} from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {langData} from '../../'

const Category = ({
  title,
  categoryImage,
  navigation,
  pathScreen,
  categoryId,
  categoryImg,
  isStatic,
  setCategoryName,
}) => {
  const {cardTitle, card, image, imageContainer} = styles;
  return (
    <TouchableOpacity
      style={card}
      onPress={() => {
        if (pathScreen === 'OnlineLessonsScreen') {
          navigation.navigate('OnlineLessonsScreen');
        } else {
          navigation.navigate('Category', {
            categoryId,
          });
        }
        setCategoryName(title);
      }}>
      <View style={imageContainer}>
        <Image
          source={
            isStatic
              ? require('../../assets/images/wifi-icon.png')
              : {
                  uri: SITEURL + categoryImg,
                }
          }
          style={image}
        />
      </View>
      {/* <Icon name="wifi" size={30} /> */}
      <Text style={cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Category;
