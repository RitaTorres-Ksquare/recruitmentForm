import User from "../models/User";
import { IUser } from "../interfaces";

export const createUser = async ({
  username,
  firstName,
  lastName,
  email,
  phone,
}: IUser): Promise<User | null> => {
  try {
    const [responses, created] = await User.findOrCreate({
      where: { username: username },
      defaults: {
        username,
        firstName,
        lastName,
        email,
        phone,
      },
    });
    if (created) {
      return responses;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const readUser = async (username: string): Promise<User | null> => {
  try {
    const response = await User.findOne({
      where: { username: username },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export const updateUser = async (
  { username, firstName, lastName, email, phone }: IUser,
  actualUsername: string
): Promise<number | null> => {
  try {
    const [affectedCount] = await User.update(
      {
        username,
        firstName,
        lastName,
        email,
        phone,
      },
      { where: { username: actualUsername } }
    );
    if (affectedCount) {
      return affectedCount;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const deleteUser = async (username: string): Promise<number | null> => {
  try {
    const response = await User.destroy({
      where: { username: username },
    });
    return response;
  } catch (error) {
    return null;
  }
};
