import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const messages = {
  success: 'भयो!',
  error: 'भएन फेरी प्रयास गर्नुहोस्!'
};

export default function Message({ type }) {
  return (
    <View style={{ ...styles[type], ...styles.container}}>
        <Text style={styles.message}>{messages[type] || ''}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 4
  },
  error: {
    backgroundColor: 'rgba(233, 30, 99, 0.75)'
  },
  success: {
    backgroundColor: 'rgba(76, 175, 80, 0.75)'
  },
  message: {
    color: '#fff',
    fontSize: 16
  }
});
