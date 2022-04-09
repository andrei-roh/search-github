import React, { useState } from 'react';
import {
  StyleSheet,
  Linking,
  Text,
  TouchableHighlight,
  Image,
  View,
} from 'react-native';
import PaginationDot from 'react-native-animated-pagination-dot';
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

  const changePage = (action: string) => {
    switch (action) {
      case 'Next':
        setPage(page + 1);
        break;
      case 'Previous':
        setPage(page - 1);
        break;
    }
  };

  return (
    <View style={styles.content}>
      <Text style={styles.repositories}>Repositories ({public_repos})</Text>
      {getNecessaryRepositoryInfo}
      <Text style={styles.items}>
        {firstNumberItems()}-{lastNumberItems()} of {public_repos} items
      </Text>
      <View style={styles.indicators}>
        <TouchableHighlight
          disabled={page === 1}
          onPress={() => changePage('Previous')}
        >
          <Image
            style={[styles.arrow, styles.arrowLeft]}
            source={require('./img/arrow-icon.png')}
          />
        </TouchableHighlight>
        <PaginationDot
          activeDotColor="#0064eb"
          curPage={page - 1}
          maxPage={getPaginationCount}
          sizeRatio={2}
        />
        <TouchableHighlight
          disabled={page === getPaginationCount}
          onPress={() => changePage('Next')}
        >
          <Image
            style={styles.arrow}
            source={require('./img/arrow-icon.png')}
          />
        </TouchableHighlight>
      </View>
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
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 30,
  },
  items: {
    marginTop: 20,
  },
  indicators: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    width: 320,
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
  arrow: {
    width: 20,
    height: 20,
  },
  arrowLeft: {
    transform: [{ rotate: '180deg' }],
  },
});

export default Content;
