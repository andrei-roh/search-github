import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  UbuntuCondensed_400Regular,
} from '@expo-google-fonts/ubuntu-condensed';

const Start = () => {
  const [fontsLoaded] = useFonts({
    UbuntuCondensed_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.origin}>
      <View style={styles.block}>
        <Image style={styles.start} source={require('./img/start-icon.png')} />
        <Text style={styles.slogan}>Start with searching</Text>
        <Text style={styles.slogan}>a GitHub user</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  origin: {
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
  start: {
    marginLeft: 55,
    marginRight: 55,
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  slogan: {
    fontSize: 25,
    fontFamily: 'UbuntuCondensed_400Regular',
  },
});

export default Start;
