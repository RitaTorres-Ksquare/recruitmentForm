import AcademicInfo from "../models/AcademicInfo";
import { IAcademicInfo } from "../interfaces";

export const createAcademicInfo = async ({
  software_devel_comments,
  degree_level,
  informal_education,
  other_education,
  user_id,
}: IAcademicInfo): Promise<AcademicInfo | null> => {
  try {
    const [responses, created] = await AcademicInfo.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        software_devel_comments,
        degree_level,
        informal_education,
        other_education,
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

export const readAcademicInfo = async (
  user_id: number
): Promise<AcademicInfo | null> => {
  try {
    const response = await AcademicInfo.findOne({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export const updateAcademicInfo = async (
  {
    software_devel_comments,
    degree_level,
    informal_education,
    other_education,
    user_id,
  }: IAcademicInfo,
  actualId: string
): Promise<number | null> => {
  try {
    const [affectedCount] = await AcademicInfo.update(
      {
        software_devel_comments,
        degree_level,
        informal_education,
        other_education,
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

export const deleteAcademicInfo = async (
  user_id: string
): Promise<number | null> => {
  try {
    const response = await AcademicInfo.destroy({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};
