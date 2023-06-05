import ScholarshipInfo from "../models/ScholarshipInfo";
import { IScholarshipInfo } from "../interfaces";

export const createScholarshipInfo = async ({
  level,
  kind,
  period,
  user_id,
}: IScholarshipInfo): Promise<ScholarshipInfo | null> => {
  try {
    const [responses, created] = await ScholarshipInfo.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        level,
        kind,
        period,
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

export const readScholarshipInfo = async (
  user_id: number
): Promise<ScholarshipInfo | null> => {
  try {
    const response = await ScholarshipInfo.findOne({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export const updateScholarshipInfo = async (
  { level, kind, period, user_id }: IScholarshipInfo,
  actualId: string
): Promise<number | null> => {
  try {
    const [affectedCount] = await ScholarshipInfo.update(
      {
        level,
        kind,
        period,
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

export const deleteScholarshipInfo = async (
  user_id: string
): Promise<number | null> => {
  try {
    const response = await ScholarshipInfo.destroy({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};
