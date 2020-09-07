import React from 'react';
import {TouchableWithoutFeedback, SafeAreaView, Dimensions} from 'react-native';
import InfoItem from '../InfoItem';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import {styles} from './styles';

const InfoList = ({
  subjectsCount,
  teachersCount,
  infoAllTeachers,
  infoAllStudents,
  infoAllCourses,
}) => {
  const {container, icon} = styles;
  const sWith = Dimensions.get('window').width;
  return (
    <TouchableWithoutFeedback>
      <SafeAreaView>
        <LinearGradient
          colors={['rgba(23, 13, 177, 0.7)', 'rgba(236, 50, 87, 0.7)']}
          start={{x: 0.3, y: 0.6}}
          end={{x: 1, y: 1}}
          style={[container, {flexDirection: sWith < 200 ? 'column' : 'row'}]}>
          <InfoItem
            cardTitle={infoAllTeachers}
            cardNumber={9}
            cardIcon={<Icon style={icon} size={30} name="ios-people" />}
          />
          <InfoItem
            cardTitle={infoAllStudents}
            cardNumber={teachersCount}
            cardIcon={
              <FontAwesome5 style={icon} size={25} name="graduation-cap" />
            }
          />
          <InfoItem
            cardTitle={infoAllCourses}
            cardNumber={subjectsCount}
            cardIcon={<FontAwesome5 style={icon} size={25} name="newspaper" />}
          />
        </LinearGradient>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default InfoList;
