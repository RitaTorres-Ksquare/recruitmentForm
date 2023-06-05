import PersonalInfo from "../models/PersonalInfo";
import { IPersonalInfo } from "../interfaces";

export const createPersonalInfo = async ({
  name,
  last_name,
  second_last_name,
  gender,
  gender_other,
  date_of_birth,
  city_of_birth,
  state_of_birth,
  country_of_birth,
  user_id,
}: IPersonalInfo): Promise<PersonalInfo | null> => {
  try {
    const [responses, created] = await PersonalInfo.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        name,
        last_name,
        second_last_name,
        gender,
        gender_other,
        date_of_birth,
        city_of_birth,
        state_of_birth,
        country_of_birth,
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

export const readPersonalInfo = async (
  user_id: number
): Promise<PersonalInfo | null> => {
  try {
    const response = await PersonalInfo.findOne({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export const updatePersonalInfo = async (
  {
    name,
    last_name,
    second_last_name,
    gender,
    gender_other,
    date_of_birth,
    city_of_birth,
    state_of_birth,
    country_of_birth,
    user_id,
  }: IPersonalInfo,
  actualId: string
): Promise<number | null> => {
  try {
    const [affectedCount] = await PersonalInfo.update(
      {
        name,
        last_name,
        second_last_name,
        gender,
        gender_other,
        date_of_birth,
        city_of_birth,
        state_of_birth,
        country_of_birth,
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

export const deletePersonalInfo = async (
  user_id: string
): Promise<number | null> => {
  try {
    const response = await PersonalInfo.destroy({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};
