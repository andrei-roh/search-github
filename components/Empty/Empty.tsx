import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

const Empty = () => {
  return (
    <View style={styles.blank}>
      <Image style={styles.empty} source={require('./img/empty-icon.png')} />
      <Text style={styles.lose}>User not found</Text>
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
  empty: {
    backgroundColor: '#fff',
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
