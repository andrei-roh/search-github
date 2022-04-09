import { getPaginationCount } from './getPaginationCount';

export const lastNumberItems = (array, page, repositories) => {
  if (page === getPaginationCount(repositories)) {
    return repositories;
  }
  return array[page];
};
