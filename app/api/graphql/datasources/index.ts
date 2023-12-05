// MongoDB Data Source for Users
import UserModel from "../models";
import { MongoDataSource } from "apollo-datasource-mongodb";
import { ObjectId } from "mongodb";

interface UserDocument {
  _id: ObjectId;
  username: string;
  password: string;
  email: string;
  interests: [string];
}

export default class Users extends MongoDataSource<UserDocument> {
  // Function to fetch all users
  async getAllUsers() {
    try {
      return await UserModel.find();
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }

  // Function to create a new user
  async createUser({ input }: any) {
    try {
      return await UserModel.create({ ...input });
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }

  // Function to update existing user
  async updateUser({ input }: any) {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        input.id,
        { ...input },
        {
          new: true,
        }
      );
      return updatedUser;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  }

  // Function to delete existing user
  async deleteUser({ id }: { id: string }): Promise<string> {
    try {
      await UserModel.findByIdAndDelete(id);
      return "User deleted successfully";
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  }
}
