import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default function Loading({ isLoading }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={isLoading} size="large" color="#2196F3" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});
