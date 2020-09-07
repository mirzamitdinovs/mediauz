import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.VERY_LIGHT_GREYISH_BLUE,
  },
  mainTitle: {
    color: COLORS.DARK_BLUE,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 15,
  },
  titleLine: {
    width: '90%',
    borderBottomColor: COLORS.DARK_GREYISH_BLUE,
    borderBottomWidth: 0.5,
    opacity: 0.5,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  wrapper: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GREYISH_BLUE,
    marginVertical: 10,
    borderRadius: 5,
  },
  iconContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 10,
    overflow: 'hidden',
  },
  teacherImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
    width: '80%',
    marginBottom: 5,
  },
});
