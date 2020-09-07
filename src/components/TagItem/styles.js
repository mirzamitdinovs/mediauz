import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_GREYISH_BLUE,
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    marginHorizontal: 3,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  title: {
    color: COLORS.VERY_DARK_DESATURATED_BLUE,
    marginLeft: 7,
    fontSize: 16,
  },
});
