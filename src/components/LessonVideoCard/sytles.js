import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
export const styles = StyleSheet.create({
  videoContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE,
  },
  cardWrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  videoTitle: {
    fontSize: 20,
    color: COLORS.VERY_DARK_DESATURATED_BLUE,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginHorizontal: 10,
    color: COLORS.DARK_GREYISH_BLUE,

    fontSize: 14,
  },
  iconsWrapper: {
    // flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 10,
  },
  videoStarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vidoStarsTitle: {
    color: COLORS.DARK_GREYISH_BLUE,
    marginLeft: 10,
    fontSize: 14,
  },
});
