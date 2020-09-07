import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.LIGHT_GREYISH_BLUE,
    borderWidth: 2,
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
    padding: 20,
    borderRadius: 5,
  },
  inputItem: {
    borderColor: COLORS.LIGHT_GREYISH_BLUE,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 20,
    paddingHorizontal: 15,
  },
  textAreaItem: {
    borderColor: COLORS.LIGHT_GREYISH_BLUE,
    borderWidth: 2,
    // height: 150,
    borderRadius: 5,
    fontSize: 20,
    paddingHorizontal: 15,
    textAlignVertical: 'top',
  },
  btnContainer: {
    backgroundColor: COLORS.BRIGHT_PINK,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  btnText: {
    color: COLORS.WHITE,
    fontSize: 18,
  },
});
