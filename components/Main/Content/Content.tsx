import React, { useState } from 'react';
import {
  StyleSheet,
  Linking,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import PaginationDot from 'react-native-animated-pagination-dot';
import { IContent } from '../../types';
import { changePage } from './utils/changePage';
import { firstNumberItems } from './utils/firstNumberItems';
import { getPaginationCount } from './utils/getPaginationCount';
import { getStepsArray } from './utils/getStepsArray';
import { lastNumberItems } from './utils/lastNumberItems';
import { paginateUserRepositoryInfo } from './utils/paginateUserRepositoryInfo';

const Content: React.FC<IContent> = ({ userRepositoryInfo, public_repos }) => {
  const [page, setPage] = useState(1);
  const stepsArray = [0];

  getStepsArray(stepsArray, public_repos);

  const getNecessaryRepositoryInfo = paginateUserRepositoryInfo(
    stepsArray,
    page,
    public_repos,
    userRepositoryInfo
  ).map((element: any) => (
    <View style={styles.card} key={element.name}>
      <TouchableOpacity onPress={() => Linking.openURL(element.html_url)}>
        <Text style={styles.name}>{element.name}</Text>
      </TouchableOpacity>
      <Text style={styles.description}>{element.description}</Text>
    </View>
  ));

  return (
    <View style={styles.content}>
      <Text style={styles.repositories}>Repositories ({public_repos})</Text>
      {getNecessaryRepositoryInfo}
      <Text style={styles.items}>
        {firstNumberItems(stepsArray, page)}-
        {lastNumberItems(stepsArray, page, public_repos)} of {public_repos}{' '}
        items
      </Text>
      <View style={styles.indicators}>
        <TouchableOpacity
          disabled={page === 1}
          onPress={() => changePage('Previous', setPage, page)}
        >
          <Image
            style={[styles.arrow, styles.arrowLeft]}
            source={require('./img/arrow-icon.png')}
          />
        </TouchableOpacity>
        <PaginationDot
          activeDotColor="#0064eb"
          curPage={page - 1}
          maxPage={getPaginationCount(public_repos)}
          sizeRatio={2}
        />
        <TouchableOpacity
          disabled={page === getPaginationCount(public_repos)}
          onPress={() => changePage('Next', setPage, page)}
        >
          <Image
            style={styles.arrow}
            source={require('./img/arrow-icon.png')}
          />
        </TouchableOpacity>
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
    backgroundColor: '#fff',
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
