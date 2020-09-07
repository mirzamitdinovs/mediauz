import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 5,
    elevation: 10,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  iconContainer: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    width: 45,
    height: 45,
  },
  title: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: '400',
    paddingRight: 90,
  },
  text: {
    color: COLORS.WHITE,
    opacity: 0.5,
    fontSize: 15,
  },
});
