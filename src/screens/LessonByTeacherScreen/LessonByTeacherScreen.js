import React from 'react';
import {View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import HTMLView from 'react-native-htmlview';
import TeacherCard from '../../components/TeacherCard/TeacherCard';
import {styles} from './styles';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {connect} from 'react-redux';
import LessonVideoCard from '../../components/LessonVideoCard/LessonVideoCard';
import Loader from '../../components/Loader/Loader';
import {langData} from '../screens.i18n';
import {FETCHURL, FETCHTOKEN} from '../../constants/Colors';
import Orientation from 'react-native-orientation';

class LessonByTeacherScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlessonTeacherId: 0,
      lessonTeacherTitle: '',
    };
  }

  backAction = () => {
    if (this.props.isFullScreen) {
      this.props.changeToFull(false);
      Orientation.lockToPortrait();
      return true;
    } else {
      // this.props.mainNavigation.goBack();
      // this.props.setSubjectInfo(0);
      return true;
    }
  };

  componentDidMount() {
    const {lessonTeacherId, lessonTeacherTitle} = this.props;
    this.updateMyState(
      lessonTeacherId,
      lessonTeacherTitle,
      this.props.userToken,
    );
  }
  componentDidUpdate() {
    const {currentlessonTeacherId} = this.state;
    const {lessonTeacherId, lessonTeacherTitle, userToken} = this.props;
    if (currentlessonTeacherId !== lessonTeacherId) {
      this.props.setLoader('lessonByTeacher');
      this.updateMyState(lessonTeacherId, lessonTeacherTitle, userToken);
    }
  }

  updateMyState = (id, title, userToken) => {
    this.setState({
      currentlessonTeacherId: id,
      lessonTeacherTitle: title,
    });
    this.props.fetchLessonByTeacher(id, userToken, true);
  };

  render() {
    const {
      teacherName,
      teacherImage,
      mainNavigation,
      isFullScreen,
      mlang,
      lessonByTeacher,
      lessonByTeacherLoader,
      lessonTeacherTitle,
    } = this.props;
    const {container, lessonProgressText} = styles;

    const data = mlang === 'uz' ? langData.uz : langData.ru;
    const regex = /(<([^>]+)>)/gi;
    return lessonByTeacherLoader ? (
      <Loader />
    ) : (
      <SafeAreaView>
        <View>
          <FlatList
            keyExtractor={(item) => item.id}
            data={lessonByTeacher}
            renderItem={({item}) => (
              <View>
                <View>
                  <LessonVideoCard
                    title={lessonTeacherTitle}
                    videoUrl={item.content[0].filename}
                    view={item.view}
                    uploadDate={item.uploaded_at}
                    raiting={parseFloat}
                    vis={isFullScreen}
                    mainNavigation={this.props.navigation}
                  />
                </View>
                <View
                  style={[
                    lessonProgressText,
                    {display: isFullScreen ? 'none' : 'flex'},
                  ]}>
                  <HTMLView
                    value={item.description.replace(regex, '')}
                    stylesheet={styles}
                  />
                </View>
              </View>
            )}
          />

          {/* <View style={adsCarouselContainer}></View> */}
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    userToken: state.userToken,
    mainNavigation: state.mainNavigation,
    isFullScreen: state.isFullScreen,
    mlang: state.language,
    lessonTeacherId: state.lessonTeacherId,
    lessonTeacherTitle: state.lessonTeacherTitle,
    teacherName: state.teacherName,
    teacherImage: state.teacherImage,
    lessonByTeacher: state.lessonByTeacher,
    lessonByTeacherLoader: state.lessonByTeacherLoader,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LessonByTeacherScreen);
