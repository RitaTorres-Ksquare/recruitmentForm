import FormalEducationInfo from "../models/FormalEducationInfo";
import { IFormalEducationInfo } from "../interfaces";

export const createFormalEducationInfo = async ({
  university_name,
  state,
  country,
  career_name,
  classes_completed,
  proof_classes_completed,
  degree_completed,
  proof_degree_completed,
  license_completed,
  proof_license_completed,
  user_id,
}: IFormalEducationInfo): Promise<FormalEducationInfo | null> => {
  try {
    const [responses, created] = await FormalEducationInfo.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        university_name,
        state,
        country,
        career_name,
        classes_completed,
        proof_classes_completed,
        degree_completed,
        proof_degree_completed,
        license_completed,
        proof_license_completed,
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

export const readFormalEducationInfo = async (
  user_id: number
): Promise<FormalEducationInfo | null> => {
  try {
    const response = await FormalEducationInfo.findOne({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export const updateFormalEducationInfo = async (
  {
    university_name,
    state,
    country,
    career_name,
    classes_completed,
    proof_classes_completed,
    degree_completed,
    proof_degree_completed,
    license_completed,
    proof_license_completed,
    user_id,
  }: IFormalEducationInfo,
  actualId: string
): Promise<number | null> => {
  try {
    const [affectedCount] = await FormalEducationInfo.update(
      {
        university_name,
        state,
        country,
        career_name,
        classes_completed,
        proof_classes_completed,
        degree_completed,
        proof_degree_completed,
        license_completed,
        proof_license_completed,
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

export const delateFormalEducationInfo = async (
  user_id: string
): Promise<number | null> => {
  try {
    const response = await FormalEducationInfo.destroy({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};
