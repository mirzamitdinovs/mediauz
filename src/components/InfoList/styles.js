import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icon: {
    alignSelf: 'center',
    color: COLORS.WHITE,
  },
});
