import React from 'react';
import {View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import HTMLView from 'react-native-htmlview';
import TeacherCard from '../../components/TeacherCard/TeacherCard';
import {styles} from './styles';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {connect} from 'react-redux';
import LessonVideoCard from '../../components/LessonVideoCard';
import Loader from '../../components/Loader/Loader';
import {langData} from '../screens.i18n';
import {FETCHURL, FETCHTOKEN} from '../../constants/Colors';
import Orientation from 'react-native-orientation';

class LessonScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLessonId: 0,
      lessonTitle: '',
    };
  }

  backAction = () => {
    if (this.props.isFullScreen) {
      this.props.changeToFull(false);
      Orientation.lockToPortrait();
      return true;
    } else {
      this.props.setPathName('mainScreen');
      this.props.navigation.goBack();
      // this.props.mainNavigation.goBack();
      return true;
    }
  };

  componentDidMount() {
    const {lessonId, lessonTitle} = this.props;
    this.updateMyState(lessonId, lessonTitle, this.props.userToken);
  }
  componentDidUpdate() {
    const {currentLessonId} = this.state;
    const {lessonId, lessonTitle, userToken} = this.props;
    if (currentLessonId !== lessonId) {
      this.props.setLoader('lessonByCategory');
      this.updateMyState(lessonId, lessonTitle, userToken);
    }
  }

  updateMyState = (id, title, userToken) => {
    this.setState({
      currentLessonId: id,
      lessonTitle: title,
    });
    this.props.fetchLessonByTeacher(id, userToken, false);
  };

  render() {
    const {
      teacherName,
      teacherImage,
      mainNavigation,
      isFullScreen,
      mlang,
      lessonByCategory,
      lessonByCategoryLoader,
      lessonTitle,
    } = this.props;
    const {container, lessonProgressText} = styles;

    const data = mlang === 'uz' ? langData.uz : langData.ru;
    const regex = /(<([^>]+)>)/gi;
    return lessonByCategoryLoader ? (
      <Loader />
    ) : (
      <SafeAreaView>
        <View style={[container, {paddingTop: isFullScreen ? 0 : 20}]}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={lessonByCategory}
            ListFooterComponent={
              <TeacherCard
                name={teacherName}
                profession={data.profession}
                teacherName={teacherName}
                vis={isFullScreen}
                teacherImage={teacherImage}
                navigation={this.props.navigation}
              />
            }
            renderItem={({item}) => (
              <View>
                <View>
                  <LessonVideoCard
                    title={lessonTitle}
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
    lessonId: state.lessonId,
    lessonTitle: state.lessonTitle,
    teacherName: state.teacherName,
    teacherImage: state.teacherImage,
    lessonByCategory: state.lessonByCategory,
    lessonByCategoryLoader: state.lessonByCategoryLoader,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonScreen);
