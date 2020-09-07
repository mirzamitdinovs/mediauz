import React from 'react';
import {ActivityIndicator} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../constants/Colors';
export default function Loader() {
  return (
    <ActivityIndicator
      size="large"
      color={COLORS.BRIGHT_PINK}
      style={styles.container}
    />
  );
}
