import { StyleSheet, Image, Linking, Text, TouchableHighlight, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { IMain } from '../types';
import Content from './Content/Content';

const Main: React.FC<IMain> = ({ userInfo, userRepositoryInfo, showUserScreen }) => {
const {
    name,
    login,
    html_url,
    avatar_url,
    followers,
    following,
    public_repos,
    } = userInfo;
  return (
    <SafeAreaView style={styles.main}>
        <ScrollView style={styles.scrollView}>
            <Image style={styles.avatar} source={{uri: avatar_url}} />
            <Text style={styles.name}>{name}</Text>
            <TouchableHighlight onPress={() => Linking.openURL(html_url)}>
                <Text style={styles.login}>{login}</Text>
            </TouchableHighlight>
            <Text style={styles.follow}>
                <Text>{followers} followers</Text>
                <Text>{following} following</Text>
            </Text>
            <Content userRepositoryInfo={userRepositoryInfo} public_repos={public_repos} />
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 55,
    marginRight: 55,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginVertical: 20,
  },
  name: {
    marginTop: 18,
    fontWeight: 'bold',
    fontSize: 25,
  },
  avatar: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  login: {
    color: '#0064eb',
  },
  follow: {
    marginTop: 25,
  },
});

export default Main;