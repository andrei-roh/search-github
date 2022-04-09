import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

const Empty = () => {
  return (
    <View style={styles.blank}>
      <View style={styles.block}>
        <Image style={styles.empty} source={require('./img/empty-icon.png')} />
        <Text style={styles.lose}>User not found</Text>
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
    height: '50%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  empty: {
    marginLeft: 55,
    marginRight: 55,
    width: 150,
    height: 150,
  },
  lose: {
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'UbuntuCondensed_400Regular',
  },
});

export default Empty;
