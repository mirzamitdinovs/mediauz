import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  FlatList,
} from 'react-native';
import {COLORS} from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {connect} from 'react-redux';

class CourseDetailsCard extends Component {
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
    const {
      container,
      pageNumberContainer,
      pageNumberText,
      child,
      chaptersContainer,
      chaptersNumber,
      chaptersTitle,
    } = styles;
    const {title, pageNumber, topics, mainNavigation} = this.props;
    const {expanded} = this.state;
    return (
      <View style={container}>
        <TouchableOpacity
          ref={this.accordian}
          style={styles.row}
          onPress={() => this.toggleExpand()}>
          <Icon
            name="bars"
            size={13}
            color={expanded ? COLORS.DARK_BLUE_LIGHTER : COLORS.BRIGHT_PINK}
          />
          <Text
            style={[
              styles.title,
              styles.font,
              expanded
                ? {color: COLORS.DARK_BLUE_LIGHTER}
                : {color: COLORS.BRIGHT_PINK},
            ]}>
            {title}
          </Text>
          <View style={pageNumberContainer}>
            <Text style={pageNumberText}>{pageNumber}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={styles.child}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={topics}
              renderItem={({item}) => (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      if (this.props.isCategory) {
                        this.props.setLessonInfo(item.id, item.name);
                        this.props.navigation.navigate('LessonScreen');
                      } else {
                        this.props.setLessonTeacherInfo(item.id, item.name);
                        this.props.navigation.navigate('LessonByTeacherScreen');
                      }
                      this.props.navigation.closeDrawer();
                    }}
                    style={chaptersContainer}>
                    <Text style={chaptersNumber}>{item.id}</Text>
                    <Text style={chaptersTitle}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}

function mapStateToProps(state, props) {
  return {
    loading: state.loding,
    subject: state.subject,
    subjectId: state.subjectId,
    teacherName: state.teacherName,
    teacherImage: state.teacherImage,
    pathScreen: state.pathScreen,
    mainNavigation: state.mainNavigation,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailsCard);
