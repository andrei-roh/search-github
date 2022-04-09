import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Spinnner = () => {
  return (
    <View style={styles.blank}>
      <View style={styles.block}>
        <ActivityIndicator size="large" color="#0064eb" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blank: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#e5e5e5',
  },
  block: {
    alignItems: 'center',
    height: '30%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default Spinnner;
