import Profile from "../models/Profile";
import { IProfile } from "../interfaces";

export const createProfile = async ({
  phone,
  country_code,
  email,
  alt_email,
  reference,
  other_reference,
  user_id,
}: IProfile): Promise<Profile | null> => {
  try {
    const [responses, created] = await Profile.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        phone,
        country_code,
        email,
        alt_email,
        reference,
        other_reference,
        user_id,
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

export const readProfile = async (user_id: number): Promise<Profile | null> => {
  try {
    const response = await Profile.findOne({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export const updateProfile = async (
  {
    phone,
    country_code,
    email,
    alt_email,
    reference,
    other_reference,
    user_id,
  }: IProfile,
  actualId: string
): Promise<number | null> => {
  try {
    const [affectedCount] = await Profile.update(
      {
        phone,
        country_code,
        email,
        alt_email,
        reference,
        other_reference,
        user_id,
      },
      { where: { user_id: actualId } }
    );
    if (affectedCount) {
      return affectedCount;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const deleteProfile = async (
  user_id: string
): Promise<number | null> => {
  try {
    const response = await Profile.destroy({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};
