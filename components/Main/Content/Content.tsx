import React, { useState } from 'react';
import {
  StyleSheet,
  Linking,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { IContent } from '../../types';

const Content: React.FC<IContent> = ({ userRepositoryInfo, public_repos }) => {
  const [page, setPage] = useState(1);
  const stepsArray = [0];
  let step = 4;
  for (let i = 0; i < public_repos / 4; i += 1) {
    stepsArray.push(step);
    step += 4;
  }
  const paginateUserRepositoryInfo = (pageNumber: number) => {
    return userRepositoryInfo
      .slice(0, public_repos)
      .slice(stepsArray[pageNumber - 1], stepsArray[pageNumber]);
  };
  const getNecessaryRepositoryInfo = paginateUserRepositoryInfo(page).map(
    (element: any) => (
      <View style={styles.card} key={element.name}>
        <TouchableHighlight onPress={() => Linking.openURL(element.html_url)}>
          <Text style={styles.name}>{element.name}</Text>
        </TouchableHighlight>
        <Text style={styles.description}>{element.description}</Text>
      </View>
    )
  );
  const getPaginationCount = Math.ceil(public_repos / 4);
  const firstNumberItems = () => {
    if (stepsArray[page - 1] === 0) {
      return 1;
    }
    return stepsArray[page - 1];
  };
  const lastNumberItems = () => {
    if (page === getPaginationCount) {
      return public_repos;
    }
    return stepsArray[page];
  };

  return (
    <View style={styles.content}>
      <Text style={styles.repositories}>Repositories ({public_repos})</Text>
      {getNecessaryRepositoryInfo}
      <Text>
        {firstNumberItems()}-{lastNumberItems()} of {public_repos} items
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  repositories: {
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 30,
  },
  card: {
    width: 280,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  name: {
    color: '#0064eb',
    fontFamily: 'UbuntuCondensed_400Regular',
  },
  description: {
    fontFamily: 'UbuntuCondensed_400Regular',
  },
});

export default Content;
