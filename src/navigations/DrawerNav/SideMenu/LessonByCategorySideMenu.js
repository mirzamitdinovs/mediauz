import React, {Component} from 'react';
import {
  SafeAreaView,
  Platform,
  UIManager,
  LayoutAnimation,
  FlatList,
  ScrollView,
  View,
} from 'react-native';
import {bindActionCreators} from 'redux';
import * as Actions from '../../../redux/actions';
import {connect} from 'react-redux';
import CourseDetailsCard from '../../../components/CourseDetailsCard/CourseDetailsCard';
import NavbarBack from '../../../components/NavbarBack/NavbarBack';

class LessonByCategorySideMenuyarn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    const {mainNavigation} = this.props;
    const {expanded} = this.state;
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <NavbarBack
              navigation={this.props.navigation}
              navbarTitle={this.props.subjectTitle}
              status="category"
            />

            <View
              style={{width: '90%', alignSelf: 'center', marginTop: 20}}></View>
            <FlatList
              keyExtractor={(item) => item.id}
              data={this.props.subject[0].chapter}
              renderItem={({item}) => (
                <CourseDetailsCard
                  chapterId={item.id}
                  title={item.name}
                  pageNumber={item.TopicCount}
                  topics={item.topic}
                  navigation={this.props.navigation}
                  isCategory={true}
                />
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}

function mapStateToProps(state, props) {
  return {
    subject: state.subject,
    subjectId: state.subjectId,
    subjectTitle: state.subjectTitle,
    mainNavigation: state.mainNavigation,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LessonByCategorySideMenuyarn);
