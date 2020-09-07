import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants/Colors';
export const screenHeight = Math.round(Dimensions.get('window').height * 0.92);
export const styles = StyleSheet.create({
  bgImage: {
    width: undefined,
    height: screenHeight,
  },
  navbarTitle: {
    fontSize: 32,
    color: COLORS.WHITE,
    // fontFamily: "nunito-bold",
    fontWeight: '700',
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    marginTop: 80,
    lineHeight: 40,
  },
  navbarText: {
    fontSize: 16,
    color: COLORS.WHITE,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '500',
    marginBottom: 50,
  },
  bgColor: {
    height: '100%',
  },
});
