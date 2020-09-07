import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    width: '90%',
    alignSelf: 'center',
    height: 'auto',
    marginBottom: 30,
  },
  userProfession: {
    fontSize: 18,
    color: COLORS.DARK_BLUE,
    borderBottomColor: COLORS.LIGHT_GREYISH_BLUE,
    borderBottomWidth: 1,
    paddingVertical: 15,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
  cardBody: {
    alignItems: 'center',
  },
  cardImageContainer: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginTop: 25,
    marginBottom: 15,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  userName: {
    fontSize: 18,
    color: COLORS.VERY_DARK_DESATURATED_BLUE,
    marginBottom: 15,
  },
  seeMoreBtnContainer: {
    backgroundColor: COLORS.BRIGHT_PINK,
    padding: 10,
    width: 150,
    borderRadius: 5,
    marginBottom: 25,
  },
  seeMoreBtnText: {
    textAlign: 'center',
    color: COLORS.WHITE,
    fontSize: 14,
  },
});
