import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Spinnner = () => {
  return (
    <View style={styles.blank}>
      <ActivityIndicator size="large" color="#0064eb" />
    </View>
  );
};

const styles = StyleSheet.create({
  blank: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 55,
    marginRight: 55,
    height: '80%',
  },
});

export default Spinnner;
