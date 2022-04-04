import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  let [userInfo, getUserInfo] = useState({});
  let [userRepositoryInfo, getUserRepositoryInfo] = useState<any>([]);
  let [showUserScreen, setShowUserScreen] = useState(false);
  let [showSpinner, setShowSpinner] = useState(false);
  let [showEmptyUser, setShowEmptyUser] = useState(false);

  const onKeyPressHandler = async (event: any) => {
    setShowSpinner(!showSpinner);
    setShowEmptyUser((showEmptyUser = false));
    getUserRepositoryInfo([]);
    let repositoryPages = 0;
    event.preventDefault();
    const URL = 'https://api.github.com/users';
    await fetch(`${URL}/${searchValue}`)
      .then(function (response) {
        if (response.status === 404) {
          setShowEmptyUser((showEmptyUser = true));
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
          getUserRepositoryInfo((prevState: any) => [...prevState, ...respData]);
        });
    }
    setShowUserScreen((showUserScreen = true));
    setShowSpinner((showSpinner = false));
  };

  return (
    <>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onKeyPressHandler={onKeyPressHandler}
      />
      <Main 
        userInfo={userInfo}
        userRepositoryInfo={userRepositoryInfo}
        showUserScreen={showUserScreen}
      />
      <StatusBar style="auto" />
    </>
  );
}

export default App;