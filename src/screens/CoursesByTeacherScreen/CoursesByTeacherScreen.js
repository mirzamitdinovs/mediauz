import React, {Component} from 'react';
import {View, FlatList, BackHandler} from 'react-native';

import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../redux/actions';
import LessonCard from '../../components/LessonCard/LessonCard';
import TagItem from '../../components/TagItem/TagItem';
import {COLORS} from '../../constants/Colors';
import MainTitle from '../../components/MainTitle';

class CoursesByTeacherScreen extends Component {
  backAction = () => {
    this.props.setPathName('categoryScreen');
    this.props.navigation.navigate('LessonScreen');

    return true;
  };

  componentDidMount() {
    this.props.setNavigation(this.props.navigation);
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }
  render() {
    const {subjects, navigation, teacherName} = this.props;
    const teacherSubjects = subjects.filter(
      (s) => s.teacher.full_name === teacherName,
    );
    return (
      <View>
        <FlatList
          keyExtractor={(item) => item.id + ''}
          data={teacherSubjects.filter((s) => s.id !== this.props.subjectId)}
          ListHeaderComponent={<MainTitle title={teacherName} />}
          renderItem={({item}) => (
            <LessonCard
              subjectId={item.id}
              navigation={navigation}
              title={item.name}
              src={item.img}
              teacherName={item.teacher.full_name}
              text={item.annotation}
              chapterCount={item.chapterCount}
              tags={
                <View style={{flexDirection: 'row'}}>
                  <TagItem
                    tagTitle={item.category.name}
                    tagIcon={
                      <FontAwesome
                        name="tag"
                        size={16}
                        color={COLORS.VERY_DARK_DESATURATED_BLUE}
                      />
                    }
                  />
                  <TagItem
                    tagTitle={item.lang.name}
                    tagIcon={
                      <MaterialCommunityIcons
                        name="google-translate"
                        size={16}
                        color={COLORS.VERY_DARK_DESATURATED_BLUE}
                      />
                    }
                  />
                  <TagItem
                    tagTitle={item.view}
                    tagIcon={
                      <FontAwesome
                        name="eye"
                        size={16}
                        color={COLORS.VERY_DARK_DESATURATED_BLUE}
                      />
                    }
                  />
                </View>
              }
              chapters={item.chapter}
            />
          )}
        />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    subjects: state.subjects,
    mainNavigation: state.mainNavigation,
    teacherName: state.teacherName,
    subjectId: state.subjectId,
    subjectTeacherId: state.subjectTeacherId,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoursesByTeacherScreen);
