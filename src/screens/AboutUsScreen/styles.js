import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.VERY_LIGHT_GREYISH_BLUE,
  },
  wrapper: {
    marginTop: 40,
    marginBottom: 20,
    paddingVertical: 20,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.WHITE,
    elevation: 3,
    borderRadius: 5,
  },

  text: {
    color: COLORS.DESATURATED_DARK_BLUE,
    fontSize: 16,
    lineHeight: 23,
  },
});
