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
      <Image style={styles.start} source={require('./img/start-icon.png')} />
      <Text style={styles.slogan}>Start with searching</Text>
      <Text style={styles.slogan}>a GitHub user</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  origin: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 55,
    marginRight: 55,
    height: '80%',
  },
  start: {
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
