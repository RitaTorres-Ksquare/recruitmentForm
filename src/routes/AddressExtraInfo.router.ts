import { Router, Request, Response } from "express";
import {
  createAddressExtraInfo,
  readAddressExtraInfo,
  updateAddressExtraInfo,
  deleteAddressExtraInfo,
} from "../repositories/AddressExtraInfo.repo";
import { IAddressExtraInfo } from "../interfaces";

export const AddresExtraInfoRouter = Router();

AddresExtraInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { type_of_residency, people, address_id} =
      req.body as IAddressExtraInfo;
    if (!type_of_residency || !people || !address_id) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields : type of residency, people, addressId",
      });
    }
    if (
      typeof type_of_residency !== "string" ||
      typeof people !== "string" ||
      typeof address_id !== "string"
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields : type of residency, people, addressId",
      });
    }
    const addressExtraInfo = await createAddressExtraInfo({
      type_of_residency,
      people,
      address_id
    });

    if (!addressExtraInfo) {
      return res.status(500).send({
        status: "Error",
        message: "Error to create the user",
      });
    } else {
      return res.status(200).send({
        ...addressExtraInfo.dataValues,
      });
    }
  } catch (error) {
    return null;
  }
});

AddresExtraInfoRouter.get(
  "/:addressExtraInfo",
  async (req: Request, res: Response) => {
    try {
      const { addressExtraInfo } = req.params;
      const personal = await readAddressExtraInfo(Number(addressExtraInfo));
      if (!personal) {
        return res.status(404).send({
          status: "Error",
          message: "User not found",
        });
      }
      return res.status(200).send({
        status: "ok",
        message: "succesfull operation",
        personal,
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "Invalid username supplied",
      });
    }
  }
);

AddresExtraInfoRouter.put(
  "/:addressExtraInfo",
  async (req: Request, res: Response) => {
    try {
      const actualAddressExtraInfo = req.params.addressExtraInfo;
      const { type_of_residency, people, address_id } =
        req.body as IAddressExtraInfo;
      if (!type_of_residency || !people || !address_id) {
        return res.status(400).send({
          status: "Error",
          message:
            "Please fill all the Fields :  type of residency, people, addressId",
        });
      }
      const address = await updateAddressExtraInfo(
        {
          type_of_residency,
          people,
          address_id
        },
        actualAddressExtraInfo
      );
      if (!address) {
        return res.status(404).send({
          status: "Error",
          message: "Info nor found",
        });
      }
      return res.status(200).send({
        status: "Ok",
        message: "successful operation",
        address,
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "User not found",
      });
    }
  }
);

AddresExtraInfoRouter.delete(
  "/:addressExtraInfo",
  async (req: Request, res: Response) => {
    try {
      const addressExtraInfoId = req.params.addressExtraInfo;

      const deletedExtraPersonal = await deleteAddressExtraInfo(
        addressExtraInfoId
      );

      if (!deletedExtraPersonal) {
        return res.status(404).send({
          status: "Error",
          message: "PersonalInfo not found",
        });
      }
      return res.status(200).send({
        status: "Ok",
        message: "Successfully deleted the PersonalInfo",
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "An error occurred while deleting the PersonalInfo",
      });
    }
  }
);
