import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.VERY_LIGHT_GREYISH_BLUE,
  },
  stickyHeader: {
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },
  loginContainer: {
    paddingVertical: 30,
    marginVertical: 50,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GREYISH_BLUE,
    shadowColor: 'rgb(8,21,66)',
    borderRadius: 5,
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 5,
    elevation: 3,
  },
  loginTitle: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 22,
    color: COLORS.VERY_DARK_DESATURATED_BLUE,
  },
  inputGroup: {
    marginTop: 15,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GREYISH_BLUE,
    borderRadius: 5,
    padding: 5,
    paddingLeft: 17,
  },
  inputPlaceholder: {
    position: 'absolute',
    left: 20,
    top: -10,
    paddingHorizontal: 3,
    paddingVertical: 1,
    backgroundColor: COLORS.WHITE,
    color: COLORS.VERY_DARK_DESATURATED_BLUE,
    zIndex: 2,
    fontSize: 12,
    letterSpacing: 1,
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    right: 15,
    zIndex: 2,
  },
  loginButton: {
    backgroundColor: COLORS.BRIGHT_PINK,
    marginVertical: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    textAlign: 'center',
    color: COLORS.WHITE,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkButton: {
    color: COLORS.BRIGHT_PINK,
  },
  linkText: {
    color: COLORS.VERY_DARK_DESATURATED_BLUE,
    fontSize: 15,
  },
});
