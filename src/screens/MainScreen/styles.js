import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  view: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    padding: 10,
    backgroundColor: 'lightblue',
    marginVertical: 10,
  },
  toTop: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: COLORS.BRIGHT_PINK,
    borderRadius: 10,
    width: 40,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toTopImage: {
    width: '50%',
    height: '60%',
  },
});
