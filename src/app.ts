import mongoose from "mongoose";
import UserController from "./controller/User";
import { IUser } from "./model/User.model";
import { fetchUser } from "./services/GitInfo";
import OutInfo from "./services/OutInfo";

const MONGOOSE_URL: string = "mongodb://localhost:27017/github-api";

const app = async () => {
  try {
    // Connect mongoose
    await mongoose.connect(`${MONGOOSE_URL}`, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // const gitInfo: IUser = await fetchUser("kaio");
    // await UserController.insertUser(gitInfo);
    const res: IUser[] = await UserController.getUsers();
    OutInfo.printUser(res);
  } catch (err) {
    console.log(err);
  }
};

app();
