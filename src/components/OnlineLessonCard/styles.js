import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 15,
    overflow: 'hidden',
    paddingBottom: 20,
    // borderColor: COLORS.MOSTLY_DESATURATED_DARK_BLUE,

    backgroundColor: COLORS.WHITE,
    elevation: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  cardImage: {
    width: '100%',
    height: 150,
    // borderTopLeftRadius: 5,
    // borderTopRightRadius: 5,
    marginBottom: 15,
  },
  tagContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  date: {
    color: '#6987ab',
    marginLeft: 7,
  },
  cardTitle: {
    color: COLORS.VERY_DARK_DESATURATED_BLUE,
    // fontFamily: "nunito-regular",
    fontWeight: '600',
    fontSize: 21,
    marginVertical: 10,
  },
  button: {
    // width: 0,
    paddingHorizontal: 5,
    // height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: COLORS.BRIGHT_PINK,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  shareContainer: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'flex-end',
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
    marginTop: 'auto',
  },
  teacherContainer: {
    flexDirection: 'row',
    // marginBottom: 20,
    // paddingBottom: 20,
    alignItems: 'center',
    paddingRight: 10,
    // borderBottomColor: COLORS.MOSTLY_DESATURATED_DARK_BLUE,
    // borderBottomWidth: 0.5,
    // marginRight: 20,
  },
  teacher: {
    marginLeft: 10,
    color: COLORS.MOSTLY_DESATURATED_DARK_BLUE,
  },
  overview: {
    color: COLORS.DARK_BLUE,
    fontSize: 16,
  },
  line: {
    borderBottomColor: COLORS.MOSTLY_DESATURATED_DARK_BLUE,
    borderBottomWidth: 0.5,
    marginBottom: 5,
    width: '90%',
    alignSelf: 'center',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // width: 30,
    marginVertical: 8,
    width: 150,
  },
  amountInfo: {
    color: COLORS.DARK_GREYISH_BLUE,
    fontSize: 14,
    marginLeft: 10,
  },
  startTime: {
    backgroundColor: COLORS.BRIGHT_RED,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: COLORS.WHITE,
  },
});
