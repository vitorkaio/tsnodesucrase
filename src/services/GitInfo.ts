import axios, { AxiosResponse } from "axios";
import { IUser } from "../model/User.model";

const URL: string = "https://api.github.com/users/";

export const fetchUser = async (username): Promise<IUser> => {
  try {
    const userInfo: AxiosResponse = await axios.get(`${URL}${username}`);
    const gitUser: IUser = {} as any;
    gitUser.login = userInfo.data.login;
    gitUser.location = userInfo.data.location;
    gitUser.numRepos = userInfo.data.public_repos;
    return gitUser;
  } catch (err) {
    throw(err);
  }
};
