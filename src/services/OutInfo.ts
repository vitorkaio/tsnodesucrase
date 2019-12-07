import { IUser } from "../model/User.model";

class OutInfo {

  public static printUser(users: IUser[]): void {
    let out: string = "";
    for (const user of users) {
      out += `\nLogin: ${user.login}\nLocation: ${user.location}\nN° Repos: ${user.numRepos}\n`;
    }
    console.log(out);
  }

}

export default OutInfo;
