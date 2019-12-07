import * as mongoose from "mongoose";

// Para acessar os tipos location, login e numRepos
export interface IUser extends mongoose.Document {
  location?: string;
  login?: string;
  numRepos?: number;
}

const UserSchema = new mongoose.Schema({
  location: { // chassi
    type: String,
  },
  login: { // placa
    type: String,
  },
  numRepos: {
    type: Number,
  },
});

export const Users = mongoose.model<IUser>("User", UserSchema);
