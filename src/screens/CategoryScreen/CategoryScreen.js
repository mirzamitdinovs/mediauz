import React, {Component} from 'react';
import {View, FlatList, ScrollView, BackHandler} from 'react-native';

import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {styles} from './styles';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../redux/actions';
import LessonCard from '../../components/LessonCard';
import TagItem from '../../components/TagItem';
import {COLORS} from '../../constants/Colors';

class CategoryScreen extends Component {
  backAction = () => {
    this.props.setCategoryName('');
    this.props.navigation.goBack();
    return true;
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }
  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    const {title, categoryId} = this.props.route.params;
    const {subjects, navigation} = this.props;
    const categoryData =
      categoryId !== null
        ? subjects.filter((s) => s.category.id === categoryId)
        : subjects;
    return (
      <View>
        <View>
          <FlatList
            keyExtractor={(item) => item.id}
            data={
              this.props.language === 'uz'
                ? categoryData.filter((a) => a.language_id === 1)
                : categoryData.filter((a) => a.language_id === 3)
            }
            renderItem={({item}) => (
              <LessonCard
                isCategory={true}
                subjectId={item.id}
                navigation={navigation}
                title={item.name}
                src={item.img}
                teacherName={item.teacher.full_name}
                teacherImage={item.teacher.img}
                text={item.annotation}
                chapterCount={item.chapterCount}
                categoryId={categoryId}
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
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    subjects: state.subjects,
    language: state.language,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
