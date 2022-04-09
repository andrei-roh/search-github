import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Empty from './components/Empty/Empty';
import Main from './components/Main/Main';
import Spinnner from './components/Spinner/Spinner';
import { getUserInformation } from './components/utils/getUserInformation';

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
    event.preventDefault();

    await getUserInformation(
      setShowEmptyUser,
      searchValue,
      getUserInfo,
      getUserRepositoryInfo
    );

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
