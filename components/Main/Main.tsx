import React from 'react';
import {
  StyleSheet,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { IMain } from '../types';
import Content from './Content/Content';
import Start from './Start/Start';

const Main: React.FC<IMain> = ({
  userInfo,
  userRepositoryInfo,
  showUserScreen,
}) => {
  const {
    name,
    login,
    html_url,
    avatar_url,
    followers,
    following,
    public_repos,
  } = userInfo;

  return showUserScreen ? (
    <SafeAreaView style={styles.main}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Image style={styles.avatar} source={{ uri: avatar_url }} />
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(html_url)}>
          <Text style={styles.login}>{login}</Text>
        </TouchableOpacity>
        <View style={styles.follow}>
          <View style={styles.followersBlock}>
            <Image
              style={styles.icon}
              source={require('./img/followers-icon.png')}
            />
            <Text>{followers} followers</Text>
          </View>
          <View style={styles.followersBlock}>
            <Image
              style={styles.icon}
              source={require('./img/following-icon.png')}
            />
            <Text>{following} following</Text>
          </View>
        </View>
        <Content
          userRepositoryInfo={userRepositoryInfo}
          public_repos={public_repos}
        />
      </ScrollView>
    </SafeAreaView>
  ) : (
    <Start />
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 2,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginLeft: 45,
    marginRight: 45,
  },
  name: {
    marginTop: 18,
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'UbuntuCondensed_400Regular',
  },
  avatar: {
    marginTop: 20,
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  icon: {
    width: 15,
    height: 13,
    marginRight: 5,
  },
  login: {
    color: '#0064eb',
    fontFamily: 'UbuntuCondensed_400Regular',
  },
  follow: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'UbuntuCondensed_400Regular',
  },
  followersBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main;
