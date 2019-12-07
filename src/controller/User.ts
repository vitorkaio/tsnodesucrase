import { IUser, Users } from "../model/User.model";

class UserController {

  public static async insertUser(user: IUser): Promise<IUser> {
    try {
      const res: IUser = await Users.create(user);
      return res;
    } catch (error) {
      throw error;
    }
  }

  public static async getUsers(): Promise<IUser[]> {
    try {
      const res: IUser[] = await Users.find({});
      return res;
    } catch (error) {
      throw error;
    }
  }

}

export default UserController;
