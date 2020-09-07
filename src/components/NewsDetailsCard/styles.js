import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    width: '94%',
    alignSelf: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GREYISH_BLUE,
    overflow: 'hidden',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 20,
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
  btnContainer: {
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  cardImage: {
    height: 250,
  },
  infoContainer: {
    paddingVertical: 5,
    // paddingHorizontal: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seenContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  date: {
    color: COLORS.VERY_DARK_DESATURATED_BLUE,
    marginLeft: 7,
    fontSize: 12,
  },
  cardTitle: {
    color: COLORS.DARK_BLUE,
    fontSize: 24,
    marginBottom: 15,
  },
  cardText: {
    color: COLORS.VERY_DARK_GREY,
    fontSize: 14,
    lineHeight: 25,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 25,
    left: 20,
  },
});
