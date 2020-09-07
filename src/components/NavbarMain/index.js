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

class NavbarMain extends React.Component {
  render() {
    const {
      navigation,
      setPathName,
      setStatus,
      setSubjectInfo,
      mainTitle,
      setMainTeacher,
      setSubjectTeacherInfo,
    } = this.props;
    const {container, logoImage, imageContainer} = styles;
    console.log('mainTitle: ', mainTitle);
    return (
      <View style={{display: this.props.isFullScreen ? 'none' : 'flex'}}>
        <LinearGradient
          colors={['rgb(23, 13, 177)', 'rgb(236, 50, 87)']}
          start={{x: 0.4, y: 0.2}}
          end={{x: 0.9, y: 0.9}}
          style={container}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="bars" size={24} color={COLORS.WHITE} />
          </TouchableOpacity>
          {mainTitle ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MainScreen');
                this.props.setMainTeacher(false);

                setSubjectInfo(0);
                setSubjectTeacherInfo(0);
                this.props.setPathName('MainScreen');
              }}>
              <Text style={styles.titleText}>{mainTitle}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MainScreen');
                setPathName('mainScreen');
                setMainTeacher(false);
                setSubjectInfo(0);
                setSubjectTeacherInfo(0);
                this.props.setPathName('MainScreen');
              }}>
              <View style={imageContainer}>
                <Image
                  source={require('../../assets/images/logo1.png')}
                  style={logoImage}
                />
              </View>
            </TouchableOpacity>
          )}
          <Icon
            name="phone"
            size={24}
            color={COLORS.WHITE}
            onPress={() => Linking.openURL(`tel:${+998901202467}`)}
          />
        </LinearGradient>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    // mlang: state.languageReducer.language,
    // chapters: state.dataReducer.chapters,
    // courseId: state.dataReducer.courseId,
    pathName: state.pathName,
    isFullScreen: state.isFullScreen,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarMain);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: 150,
    height: 40,
  },
  logoImage: {
    width: '95%',
    height: '95%',
  },
  titleText: {
    color: COLORS.WHITE,
    fontSize: 25,
    fontWeight: FONTWEIGHT.BOLD,
  },
});
