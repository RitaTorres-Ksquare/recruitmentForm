import { Router, Request, Response } from "express";
import {
  createBankAccountInfo,
  readBankAccountInfo,
  updateBankAccountInfo,
  deleteBankAccountInfo,
} from "../repositories/BankAccountInfo.repo";
import { IBankAccountInfo } from "../interfaces";

export const BankAccountInfoRouter = Router();

BankAccountInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { acc_number, clabe, bank, user_id } = req.body as IBankAccountInfo;
    if (!acc_number || !clabe || !bank) {
      return res.status(400).send({
        status: "Error",
        message:"Please fill all the Fields :acc_number, clabe, bank, user_id ",
      });
    }
    if (
      typeof acc_number !== "number" ||
      typeof clabe !== "number" ||
      typeof bank !== "string"
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields :acc_number, clabe, bank, user_id ",
      });
    }
    const bankAccountInfo = await createBankAccountInfo({
      acc_number,
      clabe,
      bank,
      user_id,
    });
    if (!bankAccountInfo) {
      return res.status(500).send({
        status: "Error",
        message: "Error to create the user",
      });
    } else {
      return res.status(200).send({
        ...bankAccountInfo.dataValues,
      });
    }
  } catch (error) {
    return null;
  }
});

BankAccountInfoRouter.get(
  "/:bankAccount",
  async (req: Request, res: Response) => {
    try {
      const { bankAccount } = req.params;
      const bank = await readBankAccountInfo(Number(bankAccount));
      if (!bank) {
        return res.status(404).send({
          status: "Error",
          message: "User not found",
        });
      }
      return res.status(200).send({
        status: "ok",
        message: "succesfull operation",
        bank,
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "Invalid username supplied",
      });
    }
  }
);

BankAccountInfoRouter.put(
  "/:bankAccount",
  async (req: Request, res: Response) => {
    try {
      const actualBankAccountInfo = req.params.bankAccount;
      const { acc_number, clabe, bank, user_id } = req.body as IBankAccountInfo;
      if (!acc_number || !clabe || !bank) {
        return res.status(400).send({
          status: "Error",
          message: "Please fill all the Fields: acc_number,clabe,bank,user_id,",
        });
      }
      const bankAccount = await updateBankAccountInfo(
        {
          acc_number,
          clabe,
          bank,
          user_id,
        },
        actualBankAccountInfo
      );
      if (!bankAccount) {
        return res.status(404).send({
          status: "Error",
          message: "Info nor found",
        });
      }
      return res.status(200).send({
        status: "Ok",
        message: "successful operation",
        bankAccount,
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "User not found",
      });
    }
  }
);

BankAccountInfoRouter.delete(
  "/:bankAccount",
  async (req: Request, res: Response) => {
    try {
      const bankAccountInfoId = req.params.bankAccount;
      const deletebankAccountInfoId = await deleteBankAccountInfo(
        bankAccountInfoId
      );
      if (!deletebankAccountInfoId) {
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
