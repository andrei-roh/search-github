export interface IHeader {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  onKeyPressHandler: any;
}

export interface IMain {
  userInfo: any;
  userRepositoryInfo: any;
  showUserScreen: boolean;
}

export interface IContent {
  userRepositoryInfo: any;
  public_repos: number;
}
