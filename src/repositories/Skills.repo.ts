import Skills from "../models/Skills";
import { ISkills } from "../interfaces";

export const createSkills = async ({
  preferred_programming_language,
  experience,
  disability,
  user_id,
}: ISkills): Promise<Skills | null> => {
  try {
    const [responses, created] = await Skills.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        preferred_programming_language,
        experience,
        disability,
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

export const readSkills = async (user_id: number): Promise<Skills | null> => {
  try {
    const response = await Skills.findOne({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export const updateSkills = async (
  { preferred_programming_language, experience, disability, user_id }: ISkills,
  actualId: string
): Promise<number | null> => {
  try {
    const [affectedCount] = await Skills.update(
      {
        preferred_programming_language,
        experience,
        disability,
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

export const deleteSkills = async (user_id: string): Promise<number | null> => {
  try {
    const response = await Skills.destroy({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};
