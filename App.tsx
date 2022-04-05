import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Empty from './components/Empty/Empty';
import Main from './components/Main/Main';
import Spinnner from './components/Spinner/Spinner';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const [userInfo, getUserInfo] = useState({});
  const [userRepositoryInfo, getUserRepositoryInfo] = useState<any>([]);
  const [showUserScreen, setShowUserScreen] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showEmptyUser, setShowEmptyUser] = useState(false);

  const onKeyPressHandler = async (event: any) => {
    setShowSpinner(!showSpinner);
    setShowEmptyUser(false);
    getUserRepositoryInfo([]);
    let repositoryPages = 0;
    event.preventDefault();
    const URL = 'https://api.github.com/users';
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
          getUserRepositoryInfo((prevState: any) => [
            ...prevState,
            ...respData,
          ]);
        });
    }
    setShowUserScreen(true);
    setShowSpinner(false);
  };

  return (
    <>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onKeyPressHandler={onKeyPressHandler}
      />
      {showSpinner ? (
        <Spinnner />
      ) : showEmptyUser ? (
        <Empty />
      ) : (
        <Main
          userInfo={userInfo}
          userRepositoryInfo={userRepositoryInfo}
          showUserScreen={showUserScreen}
        />
      )}
      <StatusBar style="auto" />
    </>
  );
};

export default App;
