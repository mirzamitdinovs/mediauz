import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GREYISH_BLUE,
    overflow: 'hidden',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,

    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.GRAYISH_BLUE,
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 250,
    marginBottom: 10,
  },
  infoContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  date: {
    color: COLORS.VERY_DARK_DESATURATED_BLUE,
    marginLeft: 7,
  },
  cardTitle: {
    color: COLORS.VERY_DARK_DESATURATED_BLUE,
    fontSize: 16,
    marginBottom: 100,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 25,
    left: 20,
  },
});
