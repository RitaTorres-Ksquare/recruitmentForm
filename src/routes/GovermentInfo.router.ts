import { Router, Request, Response } from "express";
import {
  createGovermenInfo,
  readGovermentInfo,
  updateGovermentInfo,
  deleteGovermentInfo,
} from "../repositories/GovermentInfo.repo";
import { IGovermentInfo } from "../interfaces";

export const GovermentInfoRouter = Router();

GovermentInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { CURP, identification_number, user_id } =
      req.body as IGovermentInfo;
    if (!CURP || !identification_number) {
      return res.status(400).send({
        status: "Error",
        message: "Please fill all the Fields: CURP, Identification number",
      });
    }
    if (
      typeof CURP !== "string" ||
      typeof identification_number !== "string"
    ) {
      return res.status(400).send({
        status: "Error",
        message: "Please fill all the Fields: CURP, Identification number",
      });
    }

    const goverment = await createGovermenInfo({
      CURP,
      identification_number,
      user_id,
    });
    if (!goverment) {
      return res.status(500).send({
        status: "Error",
        message: "Error to create the user",
      });
    } else {
      return res.status(200).send({
        ...goverment.dataValues,
      });
    }
  } catch (error) {
    return null;
  }
});

GovermentInfoRouter.get(
  "/:govermentInfo",
  async (req: Request, res: Response) => {
    try {
      const { goverment } = req.params;
      const govermentInfo = await readGovermentInfo(Number(goverment));
      if (!govermentInfo) {
        return res.status(404).send({
          status: "Error",
          message: "User not found",
        });
      }
      return res.status(200).send({
        status: "ok",
        message: "succesfull operation",
        govermentInfo,
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "Invalid username supplied",
      });
    }
  }
);

GovermentInfoRouter.put(
  "/:govermentInfo",
  async (req: Request, res: Response) => {
    try {
      const govermentInfo = req.params.govermentInfo;
      const { CURP, identification_number, user_id } =
        req.body as IGovermentInfo;
      if (!CURP || !identification_number) {
        return res.status(400).send({
          status: "Error",
          message: "Please fill all the Fields: CURP, Identification number",
        });
      }
      const goverment = await updateGovermentInfo(
        {
          CURP,
          identification_number,
          user_id,
        },
        govermentInfo
      );
      if (!goverment) {
        return res.status(404).send({
          status: "Error",
          message: "Info nor found",
        });
      }
      return res.status(200).send({
        status: "Ok",
        message: "successful operation",
        goverment,
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "User not found",
      });
    }
  }
);

GovermentInfoRouter.delete(
  "/govermentInfo",
  async (req: Request, res: Response) => {
    try {
      const govermentId = req.params.govermentInfo;
      const deleteGoverment = await deleteGovermentInfo(govermentId);
      if (!deleteGoverment) {
        return res.status(404).send({
          status: "Error",
          message: "Goverment Info not found",
        });
      }
      return res.status(200).send({
        status: "Ok",
        message: "Successfully deleted the Goverment Info",
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "An error occurred while deleting the Goverment Info",
      });
    }
  }
);
