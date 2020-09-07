import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';
export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
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
  },
  title: {
    fontSize: 13,
    // color: COLORS.BRIGHT_PINK,
    marginLeft: 10,
    marginRight: 25,
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
  parentHr: {
    height: 1,
    color: COLORS.WHITE,
    width: '100%',
  },
  child: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.VERY_LIGHT_GREYISH_BLUE,
  },
  pageNumberContainer: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    backgroundColor: COLORS.BRIGHT_PINK,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 'auto',
  },
  pageNumberText: {
    color: COLORS.WHITE,
  },
  chaptersContainer: {
    flexDirection: 'row',
    borderBottomColor: COLORS.VERY_LIGHT_GREYISH_BLUE,
    borderBottomWidth: 1,
    marginTop: 10,
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  chaptersNumber: {
    marginRight: 10,
    fontSize: 14,
    color: COLORS.DARK_BLUE,
    alignSelf: 'center',
  },
  chaptersTitle: {
    fontSize: 14,
    color: COLORS.DARK_BLUE,
  },
});
