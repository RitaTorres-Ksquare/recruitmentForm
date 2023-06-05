import AddresExtraInfo from "../models/AddresExtraInfo";
import { IAddressExtraInfo } from "../interfaces";

export const createAddressExtraInfo = async ({
  type_of_residency,
  people,
  address_id,
}: IAddressExtraInfo): Promise<AddresExtraInfo | null> => {
  try {
    const [responses, created] = await AddresExtraInfo.findOrCreate({
      where: { address_id: address_id },
      defaults: {
        type_of_residency,
        people,
        address_id,
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

export const readAddressExtraInfo = async (
  address_id: number
): Promise<AddresExtraInfo | null> => {
  try {
    const response = await AddresExtraInfo.findOne({
      where: { address_id: address_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export const updateAddressExtraInfo = async (
  { type_of_residency, people, address_id }: IAddressExtraInfo,
  actualId: string
): Promise<number | null> => {
  try {
    const [affectedCount] = await AddresExtraInfo.update(
      {
        type_of_residency,
        people,
        address_id
      },
      { where: { address_id: actualId } }
    );
    if (affectedCount) {
      return affectedCount;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const deleteAddressExtraInfo = async (
  address_id: string
): Promise<number | null> => {
  try {
    const response = await AddresExtraInfo.destroy({
      where: { address_id: address_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};
