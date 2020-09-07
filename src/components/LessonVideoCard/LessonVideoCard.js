import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {styles} from './sytles';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import {COLORS} from '../../constants/Colors';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const IconComponent = ({iconName, iconTitle}) => {
  const {iconContainer, iconText} = styles;
  return (
    <View style={iconContainer}>
      <Icon name={iconName} color={COLORS.DARK_GREYISH_BLUE} size={14} />
      <Text style={iconText}>{iconTitle}</Text>
    </View>
  );
};

export default class LessonVideoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: this.props.raiting,
    };
  }

  setSTarRaiting = () => {
    this.setState = {
      starCount: this.props.raiting,
    };
  };

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating * 1,
    });
  }
  render() {
    const {videoUrl, view, uploadDate, raiting, title, vis} = this.props;
    const {
      videoContainer,
      videoTitle,
      vidoInfoWrapper,
      iconsWrapper,
      videoStarsContainer,
      vidoStarsTitle,
      cardWrapper,
    } = styles;

    return (
      <View style={videoContainer}>
        <View style={[cardWrapper, {display: vis ? 'none' : 'flex'}]}>
          <View style={vidoInfoWrapper}></View>
          <Text style={videoTitle}>{title}</Text>
          <View style={iconsWrapper}>
            <IconComponent iconName="calendar" iconTitle={uploadDate} />
            <IconComponent iconName="eye" iconTitle={view} />
            <View style={videoStarsContainer}>
              <StarRating
                disabled={false}
                emptyStar={'star-o'}
                fullStar={'star'}
                halfStar={'star-half'}
                // iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating * 1)}
                fullStarColor={COLORS.PURE_ORANGE}
                starSize={18}
              />
              <Text style={vidoStarsTitle}>{this.state.starCount}</Text>
            </View>
            {/* <IconComponent iconName="heart" iconTitle="1" /> */}
          </View>
        </View>
        <VideoPlayer
          videoUrl={videoUrl}
          mainNavigation={this.props.mainNavigation}
        />

        <View
          style={{paddingVertical: 10, display: vis ? 'none' : 'flex'}}></View>
      </View>
    );
  }
}
