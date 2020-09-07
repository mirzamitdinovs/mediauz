import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  titleMainText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 0,
    lineHeight: 30,
  },
  titleText: {
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 18,
    // marginBottom: 10,
  },
  titleLine: {
    position: 'relative',
    backgroundColor: COLORS.MOSTLY_DESATURATED_DARK_BLUE,
    width: 80,
    height: 5,
    alignSelf: 'center',
    marginVertical: 16,
    // marginTop: 16,
    alignItems: 'center',
  },
  titleIcon: {
    position: 'absolute',
    backgroundColor: COLORS.BRIGHT_PINK,
    width: 10,
    height: 10,
    transform: [{rotate: '45deg'}],
    top: -3,
  },
});
