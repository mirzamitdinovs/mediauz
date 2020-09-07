import {StyleSheet} from 'react-native';
import {COLORS, FONTWEIGHT} from '../../../constants/Colors';

export const styles = StyleSheet.create({
  sideLogo: {
    padding: 25,
    backgroundColor: COLORS.BRIGHT_PINK,
  },
  sideLogoText: {
    color: COLORS.WHITE,
    fontSize: 30,
    fontWeight: FONTWEIGHT.BOLD,
    textAlign: 'center',
  },
  sideLang: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  sideLangContainer: {
    padding: 5,
  },
  sideLangText: {
    paddingHorizontal: 10,
    color: COLORS.VERY_DARK_GREY,
  },
  sideLangLine: {
    borderColor: COLORS.VERY_DARK_GREY,
    borderWidth: 2,
    paddingVertical: 2,
    borderTopWidth: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 30,
    alignSelf: 'center',
  },
  sideLink: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  sideLinkButton: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.VERY_DARK_GREY,
  },
  sideLinkText: {
    color: COLORS.VERY_DARK_GREY,
    fontSize: 16,
  },

  chaptersContainer: {
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: COLORS.VERY_DARK_GREY,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sideAuth: {
    backgroundColor: COLORS.BRIGHT_PINK,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  sideAuthText: {
    color: COLORS.WHITE,
    fontSize: 18,
  },
});
