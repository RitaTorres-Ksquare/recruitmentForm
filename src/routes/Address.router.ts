import { Router, Request, Response } from "express";
import {
  createAddress,
  readAddress,
  updateAddress,
  deleteAddress,
} from "../repositories/Address.repo";
import { IAddress } from "../interfaces";

export const AddressRouter = Router();

AddressRouter.post("/", async (req: Request, res: Response) => {
  try {
    const {
      street,
      in_between_street_a,
      in_between_street_b,
      city,
      state,
      country,
      zip,
      proof_of_address,
      user_id,
    } = req.body as IAddress;
    if (
      !street ||
      !in_between_street_a ||
      !in_between_street_b ||
      !city ||
      !state ||
      !country ||
      !zip ||
      !proof_of_address
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields : street,in_between_street_a,in_between_street_b,city,state,country,zip,proof_of_address,user_id,",
      });
    }
    if (
      typeof street !== "string" ||
      typeof in_between_street_a !== "string" ||
      typeof in_between_street_b !== "string" ||
      typeof city !== "string" ||
      typeof state !== "string" ||
      typeof country !== "string" ||
      typeof zip !== "string" ||
      typeof proof_of_address !== "string"
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields : street,in_between_street_a,in_between_street_b,city,state,country,zip,proof_of_address,user_id,",
      });
    }

    const address = await createAddress({
      street,
      in_between_street_a,
      in_between_street_b,
      city,
      state,
      country,
      zip,
      proof_of_address,
      user_id,
    });

    if (!address) {
      return res.status(500).send({
        status: "Error",
        message: "Error to create the user",
      });
    } else {
      return res.status(200).send({
        ...address.dataValues,
      });
    }
  } catch (error) {
    return null;
  }
});

AddressRouter.get("/:address", async (req: Request, res: Response) => {
  try {
    const { address } = req.params;
    const personalAddress = await readAddress(Number(address));
    if (!personalAddress) {
      return res.status(404).send({
        status: "Error",
        message: "User not found",
      });
    }
    return res.status(200).send({
      status: "ok",
      message: "succesfull operation",
      personalAddress,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: "Invalid username supplied",
    });
  }
});

AddressRouter.put("/:address", async (req: Request, res: Response) => {
  try {
    const actualAddress = req.params.address;
    const {
      street,
      in_between_street_a,
      in_between_street_b,
      city,
      state,
      country,
      zip,
      proof_of_address,
      user_id,
    } = req.body as IAddress;
    if (
      !street ||
      !in_between_street_a ||
      !in_between_street_b ||
      !city ||
      !state ||
      !country ||
      !zip ||
      !proof_of_address
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields : street,in_between_street_a,in_between_street_b,city,state,country,zip,proof_of_address,user_id,",
      });
    }
    const address = await updateAddress(
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
      actualAddress
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
});

AddressRouter.delete("/:address", async (req: Request, res: Response) => {
  try {
    const addressId = req.params.address;
    const deleteAddress1 = await deleteAddress(addressId);
    if (!deleteAddress1) {
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
});
