import BankAccountInfo from "../models/BankAccountInfo";
import { IBankAccountInfo } from "../interfaces";

export const createBankAccountInfo = async ({
  acc_number,
  clabe,
  bank,
  user_id,
}: IBankAccountInfo): Promise<BankAccountInfo | null> => {
  try {
    const [responses, created] = await BankAccountInfo.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        acc_number,
        clabe,
        bank,
        user_id,
      },
    });
    console.log(created);
    if (created) {
      return responses;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const readBankAccountInfo = async (
  user_id: number
): Promise<BankAccountInfo | null> => {
  try {
    const response = await BankAccountInfo.findOne({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export const updateBankAccountInfo = async (
  { acc_number, clabe, bank, user_id }: IBankAccountInfo,
  actualId: string
): Promise<number | null> => {
  try {
    const [affectedCount] = await BankAccountInfo.update(
      {
        acc_number,
        clabe,
        bank,
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

export const deleteBankAccountInfo = async (
  user_id: string
): Promise<number | null> => {
  try {
    const response = await BankAccountInfo.destroy({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};
