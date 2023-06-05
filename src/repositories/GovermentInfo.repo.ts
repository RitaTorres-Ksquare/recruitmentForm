import GovermentInfo from "../models/GovermentInfo";
import { IGovermentInfo } from "../interfaces";

export const createGovermenInfo = async ({
  CURP,
  identification_number,
  user_id,
}: IGovermentInfo): Promise<GovermentInfo | null> => {
  try {
    const [responses, created] = await GovermentInfo.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        CURP,
        identification_number,
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

export const readGovermentInfo = async (
  user_id: number
): Promise<GovermentInfo | null> => {
  try {
    const response = await GovermentInfo.findOne({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export const updateGovermentInfo = async (
  { CURP, identification_number, user_id }: IGovermentInfo,
  actualId: string
): Promise<number | null> => {
  try {
    const [affectedCount] = await GovermentInfo.update(
      {
        CURP,
        identification_number,
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

export const deleteGovermentInfo = async (
  user_id: string
): Promise<number | null> => {
  try {
    const response = await GovermentInfo.destroy({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};
