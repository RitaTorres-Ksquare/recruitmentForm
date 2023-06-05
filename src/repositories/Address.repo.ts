import Address from "../models/Addres";
import { IAddress } from "../interfaces";

export const createAddress = async ({
  street,
  in_between_street_a,
  in_between_street_b,
  city,
  state,
  country,
  zip,
  proof_of_address,
  user_id,
}: IAddress): Promise<Address | null> => {
  try {
    const [responses, created] = await Address.findOrCreate({
      where: { user_id: user_id },
      defaults: {
        street,
        in_between_street_a,
        in_between_street_b,
        city,
        state,
        country,
        zip,
        proof_of_address,
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

export const readAddress = async (user_id: number): Promise<Address | null> => {
  try {
    const response = await Address.findOne({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};

export const updateAddress = async (
  {
    street,
    in_between_street_a,
    in_between_street_b,
    city,
    state,
    country,
    zip,
    proof_of_address,
    user_id,
  }: IAddress,
  actualId: string
): Promise<number | null> => {
  try {
    const [affectedCount] = await Address.update(
      {
        street,
        in_between_street_a,
        in_between_street_b,
        city,
        state,
        country,
        zip,
        proof_of_address,
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

export const deleteAddress = async (
  user_id: string
): Promise<number | null> => {
  try {
    const response = await Address.destroy({
      where: { user_id: user_id },
    });
    return response;
  } catch (error) {
    return null;
  }
};
