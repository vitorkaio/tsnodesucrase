import axios, { AxiosResponse } from "axios";

const URL: string = "https://api.github.com/users/";

export const fetchUser = async (username): Promise<GitInfo> => {
  try {
    const userInfo: AxiosResponse = await axios.get(`${URL}${username}`);
    const gitUser: GitInfo = new GitInfo(userInfo.data.login, userInfo.data.location, userInfo.data.public_repos);
    return gitUser;
  } catch (err) {
    throw(err);
  }
};

export class GitInfo {

  private login: string;
  private location: string;
  private numRepos: number;

  constructor(login: string, location: string, numRepos: number) {
    this.login = login;
    this.location = location;
    this.numRepos = numRepos;
  }

  public getLogin(): string {
    return this.login;
  }
  public setLogin(value: string) {
    this.login = value;
  }

  public getLocation(): string {
    return this.location;
  }
  public setLocation(value: string) {
    this.location = value;
  }

  public getNumRepos(): number {
    return this.numRepos;
  }

  public setNumRepos(value: number) {
    this.numRepos = value;
  }

  public toString(): string {
    return `Login: ${this.getLogin()}\nLocation: ${this.getLocation()}\nN° Repos: ${this.getNumRepos()}`;
  }

}

export default GitInfo;
