import { StyleSheet, Image, Linking, TextInput, TouchableHighlight, View } from 'react-native';
import { IHeader } from '../types';

const Header: React.FC<IHeader> = ({ searchValue, setSearchValue, onKeyPressHandler }) => {
  return (
    <View style={styles.header}>
      <TouchableHighlight onPress={() => Linking.openURL('http://github.com')}>
        <Image style={styles.github} source={require('./img/github-icon.png')} />
      </TouchableHighlight>
      <TextInput
        style={styles.search}
        placeholder='Enter GitHub username'
        value={searchValue}
        onChangeText={setSearchValue}
        onSubmitEditing={onKeyPressHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    backgroundColor: '#0064eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingBottom: 20,
  },
  github: {
    width: 35,
    height: 35,
  },
  search: {
    height: 40,
    padding: 10,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

export default Header;