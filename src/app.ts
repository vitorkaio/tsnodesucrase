import { fetchUser, GitInfo } from "./model/GitInfo";
import NumberSingleton from "./model/NumberSingleton";

const app = async () => {
  // Singleton
  const numberSingletonOne: NumberSingleton = NumberSingleton.getInstance();
  const numberSingletonTwo: NumberSingleton = NumberSingleton.getInstance();
  numberSingletonOne.setNum(18);
  console.log(numberSingletonTwo.getNum());

  try {
    const gitInfo: GitInfo = await fetchUser("vitorkaio");
    console.log(gitInfo.toString());
  } catch (_) {
    console.log("Request Github Error");
  }
};

app();
