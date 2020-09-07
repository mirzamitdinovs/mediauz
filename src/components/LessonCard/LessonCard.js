import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../redux/actions';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import {COLORS, SITEURL} from '../../constants/Colors';
import {styles} from './styles';
import AsyncStorage from '@react-native-community/async-storage';

class LessonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: '',
      topicCount: 0,
    };
    this.getData();
    this.getTopics();
  }

  getTopics() {
    let topics = 0;
    (a) => (topics += parseInt(a.TopicCount));
    return topics;
  }
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken');
      if (value !== null) {
        this.setState({
          userToken: value,
        });
      }
    } catch (e) {
      console.log('error: ', e);
    }
  };

  render() {
    const {userToken, topicCount} = this.state;
    const {
      subjectId,
      title,
      src,
      tags,
      teacherName,
      navigation,
      text,
      chapterCount,
      isLogged,
      isCategory,
      teacherImage,
    } = this.props;
    const {
      container,
      cardImage,
      tagContainer,
      cardTitle,
      button,
      buttonText,
      flexContainer,
      teacherContainer,
      teacher,
      amountInfo,
      amountContainer,
      line,
      overview,
    } = styles;
    return (
      <View style={container}>
        <TouchableOpacity
          onPress={() => {
            this.props.setCategoryName('');

            const {subjects} = this.props;
            const lessonId = subjects.filter((s) => s.id === subjectId)[0]
              .chapter[0].topic[0].id;
            const lessonTitle = subjects.filter((s) => s.id === subjectId)[0]
              .chapter[0].topic[0].name;
            if (isLogged) {
              if (isCategory) {
                navigation.navigate('LessonScreen');
                this.props.setSubjectInfo(subjectId, title);
                this.props.setLessonInfo(lessonId, lessonTitle);
                this.props.setTeacherInfo(teacherName, teacherImage);
                this.props.setPathName('categoryScreen');
              } else {
                navigation.navigate('LessonByTeacherScreen');
                this.props.setLessonTeacherInfo(lessonId, lessonTitle);
                this.props.setSubjectTeacherInfo(subjectId, title);
                this.props.setPathName('teacherScreen');
              }
            } else {
              if (isCategory) {
                this.props.setPathScreen('LessonScreen');
                this.props.setPathName('categoryScreen');
                this.props.setSubjectInfo(subjectId, title);
                this.props.setLessonInfo(lessonId, lessonTitle);
                this.props.setTeacherInfo(teacherName, teacherImage);
              } else {
                this.props.setPathScreen('LessonByTeacherScreen');
                this.props.setPathName('teacherScreen');
                this.props.setLessonTeacherInfo(lessonId, lessonTitle);
                this.props.setSubjectTeacherInfo(subjectId, title);
              }
              navigation.navigate('Login');
            }
          }}>
          <ImageBackground
            source={{
              uri: SITEURL + src,
            }}
            style={cardImage}
            imageStyle={{resizeMode: 'stretch'}}>
            <View style={flexContainer}>
              <TouchableOpacity style={button}>
                <Text style={buttonText}>Online</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={{marginLeft: 20}}>
            <View style={tagContainer}>{tags}</View>
            <Text style={cardTitle}>{title}</Text>
            <View style={teacherContainer}>
              <FontAwesome
                name="user"
                size={16}
                color={COLORS.DARK_GREYISH_BLUE}
              />
              <Text style={teacher}>{teacherName}</Text>
            </View>
            <Text style={overview}>{text}</Text>
          </View>
          <Text style={line} />
          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              width: 80,
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <View style={amountContainer}>
              <FontAwesome5
                name="list"
                size={16}
                color={COLORS.DARK_GREYISH_BLUE}
              />
              <Text style={amountInfo}>{chapterCount}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: 30,
              }}>
              <SimpleLineIcons
                name="doc"
                size={16}
                color={COLORS.DARK_GREYISH_BLUE}
              />
              <Text style={amountInfo}>{this.getTopics()}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    subjects: state.subjects,
    isLogged: state.isLogged,
    status: state.status,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonCard);
