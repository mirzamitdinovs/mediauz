import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  card: {
    paddingVertical: 20,
    marginVertical: 12,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
    elevation: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  image: {
    width: 45,
    height: 45,
    alignSelf: 'center',
    marginVertical: 20,
    resizeMode: 'contain',
  },
  imageContainer: {
    width: 45,
    height: 45,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  cardTitle: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    textAlign: 'center',
    color: COLORS.VERY_DARK_DESATURATED_BLUE,
  },
});
