import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Linking,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../redux/actions';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import {COLORS, SITEURL, SHORTURL} from '../../constants/Colors';
import {styles} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import InAppBrowser from 'react-native-inappbrowser-reborn';

class OnlineLessonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: '',
    };
    this.getData();
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

  async openLink(lessonUrl) {
    const {isArchive, meetingId, lessonLink} = this.props;
    const onlineUrl =
      'http://45.76.216.68/mediauz/backend/web/meeting/join-meeting?name=DEMO&password=kadsopdkasop&meetingID=_tejYBp5Ry_lcyV7a_i-36Q6uZU3Sc';
    try {
      const url = isArchive
        ? lessonUrl
        : `${SHORTURL}${lessonLink}${meetingId}`;
      // onlineUrl;
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'overFullScreen',
          modalTransitionStyle: 'partialCurl',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          toolbarColor: '#6200EE',
          secondaryToolbarColor: 'black',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
          headers: {
            'my-custom-header': 'my custom header value',
          },
        });
      } else Linking.openURL(url);
    } catch (error) {
      console.log(error.message);
    }
  }
  render() {
    const {userToken} = this.state;
    const {
      title,
      src,
      tags,
      teacherName,
      navigation,
      text,
      meetingId,
      subjectId,
      lessonLink,
      beginTime,
      endTime,
      isArchive,
      timeColor,
      statusText,
    } = this.props;
    const {
      container,
      cardImage,
      tagContainer,
      date,
      cardTitle,
      button,
      buttonText,
      shareContainer,
      flexContainer,
      teacherContainer,
      teacher,
      amountInfo,
      amountContainer,
      line,
      overview,
      startTime,
    } = styles;
    console.log('startTime: ', timeColor);
    return (
      <View style={container}>
        <TouchableOpacity
          onPress={() => {
            if (this.props.isLogged === true) {
              this.openLink(lessonLink);
            } else {
              this.props.setPathScreen('OnlineLessonsScreen');
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
              {/* <TouchableOpacity style={button}>
                <Text style={buttonText}>{statusText}</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={shareContainer}>
                <FontAwesome name="share-alt" size={16} color={COLORS.WHITE} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={{marginLeft: 20}}>
            <View style={tagContainer}>{tags}</View>
            <Text style={cardTitle}>{title}</Text>
            <View
              style={[
                teacherContainer,
                {display: isArchive ? 'none' : 'flex'},
              ]}>
              <FontAwesome
                name="user"
                size={16}
                color={COLORS.DARK_GREYISH_BLUE}
              />
              <Text style={teacher}>{teacherName}</Text>
            </View>
            {/* <Text style={overview}>{text}</Text> */}
          </View>
          <Text style={line} />
          <View
            style={{
              marginLeft: 20,
              // marginVertical: 10,
              alignItems: 'center',
            }}>
            <View style={amountContainer}>
              <FontAwesome5
                name="list"
                size={16}
                color={COLORS.DARK_GREYISH_BLUE}
              />
              <Text style={amountInfo}>Boshlanish vaqti: </Text>
            </View>

            <View>
              <Text style={[startTime, {backgroundColor: `${timeColor}`}]}>
                {beginTime}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 20,
              // marginVertical: 10,
              alignItems: 'center',
              display: isArchive ? 'flex' : 'none',
            }}>
            <View style={amountContainer}>
              <FontAwesome5
                name="list"
                size={16}
                color={COLORS.DARK_GREYISH_BLUE}
              />
              <Text style={amountInfo}>Tugash vaqti: </Text>
            </View>

            <View>
              <Text style={[startTime, {backgroundColor: timeColor}]}>
                {endTime}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    userToken: state.userToken,
    isLogged: state.isLogged,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OnlineLessonCard);
