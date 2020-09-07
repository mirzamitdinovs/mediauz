import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {connect} from 'react-redux';
import {SITEURL} from '../../constants/Colors';

class TeacherCard extends React.Component {
  render() {
    const {
      navigation,
      profession,
      name,
      navDirection,
      teacherName,
      teacherImage,
      vis,
    } = this.props;
    const {
      container,
      userProfession,
      cardImage,
      userName,
      seeMoreBtnContainer,
      seeMoreBtnText,
      cardBody,
      cardImageContainer,
    } = styles;
    return (
      <View style={[container, {display: vis ? 'none' : 'flex'}]}>
        <Text style={userProfession}>{profession}</Text>
        <View style={cardBody}>
          <View style={cardImageContainer}>
            <Image
              source={{uri: `${SITEURL}${teacherImage}`}}
              // source={require('../../assets/images/algebraImage.jpg')}
              style={cardImage}
            />
          </View>
          <Text style={userName}>{name}</Text>
          <TouchableOpacity
            style={seeMoreBtnContainer}
            onPress={() => {
              this.props.navigation.navigate('CoursesByTeacher', {
                teacherName: teacherName,
              });
              // this.props.setStatus('main');
              this.props.setPathName('mainScreen');
            }}>
            <Text style={seeMoreBtnText}>Barchasini ko'rish</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    // mlang: state.languageReducer.language,
    // chapters: state.dataReducer.chapters,
    // courseId: state.dataReducer.courseId,
    mainNavigation: state.mainNavigation,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherCard);
