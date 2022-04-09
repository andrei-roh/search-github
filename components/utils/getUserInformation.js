import { URL } from './endpoints';

export const getUserInformation = async (
  setShowEmptyUser,
  searchValue,
  getUserInfo,
  getUserRepositoryInfo
) => {
  let repositoryPages = 0;

  await fetch(`${URL}/${searchValue}`)
    .then(function (response) {
      if (response.status === 404) {
        setShowEmptyUser(true);
      }
      return response.json();
    })
    .then(function (respData) {
      getUserInfo(respData);
      repositoryPages = Math.ceil(respData.public_repos / 100);
    });
  for (let i = 0; i < repositoryPages; i += 1) {
    await fetch(`${URL}/${searchValue}/repos?per_page=100&page=${i}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (respData) {
        getUserRepositoryInfo((prevState) => [...prevState, ...respData]);
      });
  }
};
