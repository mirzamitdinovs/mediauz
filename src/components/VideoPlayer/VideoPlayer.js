import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions, BackHandler} from 'react-native';
import Orientation from 'react-native-orientation';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {connect} from 'react-redux';
import Video from 'react-native-video';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import {SITEURL} from '../../constants/Colors';
class VideoPlayer extends Component {
  videoPlayer;
  constructor(props) {
    const {width, height} = Dimensions.get('window');

    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: width > height,
      isLoading: true,
      paused: false,
      playerState: PLAYER_STATES.PLAYING,
      screenType: 'contain',
      playerHeight: Dimensions.get('window').width * 0.8,
      playerWidth: 200,
    };
  }

  backAction = () => {
    if (this.state.isFullScreen) {
      Orientation.lockToPortrait();
      this.props.changeToFull(false);
      this.setState({
        isFullScreen: false,
        playerHeight: Dimensions.get('window').height * 0.8,
        playerWidth: 200,
        screenType: 'contain',
      });
      return true;
    } else {
      this.props.setPathName('mainScreen');
      this.props.mainNavigation.goBack();

      // this.props.setSubjectInfo(0);
      return true;
    }
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

  onSeek = (seek) => {
    this.videoPlayer.seek(seek);
  };

  onPaused = (playerState) => {
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };

  onReplay = () => {
    this.setState({playerState: PLAYER_STATES.PLAYING});
    this.videoPlayer.seek(0);
  };

  onProgress = (data) => {
    const {isLoading, playerState} = this.state;
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({
        currentTime: data.currentTime,
      });
    }
  };

  onLoad = (data) => this.setState({duration: data.duration, isLoading: false});
  onLoadStart = (data) => this.setState({isLoading: true});
  onEnd = () => this.setState({playerState: PLAYER_STATES.ENDED});
  onError = () => alert(error);
  exitFullScreen = () => {
    Orientation.lockToPortrait();
  };
  enterFullScreen = () => {
    const swidth = Dimensions.get('window').height * 0.07;

    // }
    if (this.state.isFullScreen) {
      Orientation.lockToPortrait();
      this.props.changeToFull(false);

      this.setState({
        isFullScreen: false,
        playerHeight: Dimensions.get('window').height * 0.8,
        // playerHeight: Dimensions.get('window').height,
        playerWidth: 200,
        screenType: 'contain',
      });
    } else {
      Orientation.lockToLandscape();
      this.props.changeToFull(true);
      this.setState({
        playerHeight: Dimensions.get('window').height + swidth,
        playerWidth: Dimensions.get('window').width,
        isFullScreen: true,
        screenType: 'cover',
      });
    }
  };

  renderToolbar = () => {
    <View>
      <Text>toolbar</Text>
    </View>;
  };

  onSeeking = (currentTime) => this.setState({currentTime});

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            height: this.state.playerWidth,
            width: this.state.playerHeight,
            borderRadius: this.state.isFullScreen ? 0 : 10,
          },
        ]}>
        <Video
          onEnd={this.onEnd}
          onLoad={this.onLoad}
          onLoadStart={this.onLoadStart}
          onProgress={this.onProgress}
          paused={this.state.paused}
          ref={(videoPlayer) => (this.videoPlayer = videoPlayer)}
          resizeMode={this.state.screenType}
          onFullScreen={this.state.isFullScreen}
          source={{
            uri: SITEURL + this.props.videoUrl,
          }}
          style={styles.mediaPlayer}
          volume={13}
          fullscreen={true}
        />
        <MediaControls
          fadeOutDelay={3000}
          isFullScreen={this.state.isFullScreen}
          duration={this.state.duration}
          isLoading={this.state.isLoading}
          mainColor="#332"
          onFullScreen={this.enterFullScreen}
          onPaused={this.onPaused}
          onReplay={this.onReplay}
          onSeek={this.onSeek}
          onSeeking={this.onSeeking}
          playerState={this.state.playerState}
          progress={this.state.currentTime}
          toolbar={this.renderToolbar()}
        />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    loading: state.loading,
    lessons: state.lessons,
    subjects: state.subjects,
    userToken: state.userToken,
    teacherName: state.teacherName,
    pathScreen: state.pathScreen,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    zIndex: 998,
    // paddingBottom: 10,
  },
  toolbar: {
    marginTop: 30,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  mediaPlayer: {
    flex: 1,
    // position: 'absolute',
    backgroundColor: 'black',
    // width: '100%',
    // // height: '100%',
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
});
