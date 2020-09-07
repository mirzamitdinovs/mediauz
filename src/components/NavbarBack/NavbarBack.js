import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {COLORS, FONTWEIGHT} from '../../constants/Colors';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {connect} from 'react-redux';

class NavbarBack extends React.Component {
  render() {
    const {
      navigation,
      navbarTitle,
      pathName,
      status,
      categoryName,
    } = this.props;

    const {
      container,
      logoImage,
      imageContainer,
      title,
      titleText,
      titleContainer,
    } = styles;
    return (
      <View>
        <LinearGradient
          colors={['rgb(23, 13, 177)', 'rgb(236, 50, 87)']}
          start={{x: 0.4, y: 0.2}}
          end={{x: 0.9, y: 0.9}}
          style={container}>
          <TouchableOpacity
            onPress={() => {
              switch (status) {
                case 'category':
                  this.props.setStatus('main');
                  navigation.navigate('Category');
                  this.props.setPathName('mainScreen');
                  break;
                case 'teacher':
                  navigation.navigate('CoursesByTeacher');
                  this.props.setPathName('mainScreen');
                  break;
                case 'lesson':
                  if (this.props.isMainTeacher) {
                    navigation.navigate('Teachers');
                    this.props.setMainTeacher(false);
                  } else {
                    navigation.navigate('LessonScreen');
                    this.props.setPathName('categoryScreen');
                  }
                  break;
                default:
                  navigation.goBack();
                  this.props.setPathName('mainScreen');
                  this.props.setCategoryName('');
                  this.props.setMainTeacher(false);
                  break;
              }
            }}>
            <Icon name="arrow-left" size={24} color={COLORS.WHITE} />
          </TouchableOpacity>

          <View style={titleContainer}>
            <Text style={titleText}>
              {categoryName ? categoryName : navbarTitle}
            </Text>
          </View>
          <Icon
            name="phone"
            size={24}
            color={COLORS.WHITE}
            onPress={() => Linking.openURL(`tel: +${998901202467}`)}
          />
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    color: COLORS.WHITE,
    fontSize: 20,
  },
  imageContainer: {
    width: 150,
    height: 40,
  },
  logoImage: {
    width: '95%',
    height: '95%',
  },
  titleContainer: {},
  titleText: {
    color: COLORS.WHITE,
    fontSize: 25,
    fontWeight: FONTWEIGHT.BOLD,
  },
});

function mapStateToProps(state, props) {
  return {
    // mlang: state.languageReducer.language,
    // chapters: state.dataReducer.chapters,
    // courseId: state.dataReducer.courseId,
    pathName: state.pathName,
    categoryName: state.categoryName,
    isMainTeacher: state.isMainTeacher,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarBack);
