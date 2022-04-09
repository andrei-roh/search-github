export const paginateUserRepositoryInfo = (
  array,
  page,
  repository,
  information
) => {
  return information.slice(0, repository).slice(array[page - 1], array[page]);
};
