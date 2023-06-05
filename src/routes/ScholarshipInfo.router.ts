import { Router, Request, Response } from "express";
import {
  createScholarshipInfo,
  readScholarshipInfo,
  updateScholarshipInfo,
  deleteScholarshipInfo,
} from "../repositories/ScholarshipInfo.repo";
import { IScholarshipInfo } from "../interfaces";

export const ScholarshipInfoRouter = Router();

ScholarshipInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { level, kind, period, user_id } = req.body as IScholarshipInfo;
    if (!level || !kind || !period) {
      return res.status(400).send({
        status: "Error",
        message: "Please fill all the Fields: level,kind,period",
      });
    }
    if (
      typeof level !== "string" ||
      typeof kind !== "string" ||
      typeof period !== "number"
    ) {
      return res.status(400).send({
        status: "Error",
        message: "Please fill all the Fields: level,kind,period,user_id,",
      });
    }
    const scholarshipInfo = await createScholarshipInfo({
      level,
      kind,
      period,
      user_id,
    });
    if (!scholarshipInfo) {
      return res.status(500).send({
        status: "Error",
        message: "Error to create the user",
      });
    } else {
      return res.status(200).send({
        ...scholarshipInfo.dataValues,
      });
    }
  } catch (error) {
    return null;
  }
});

ScholarshipInfoRouter.get(
  "/:scholarshipInfo",
  async (req: Request, res: Response) => {
    try {
      const { scholarshipInfo } = req.params;
      const scholarship = await readScholarshipInfo(Number(scholarshipInfo));
      if (!scholarship) {
        return res.status(404).send({
          status: "Error",
          message: "User not found",
        });
      }
      return res.status(200).send({
        status: "ok",
        message: "succesfull operation",
        scholarship,
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "Invalid username supplied",
      });
    }
  }
);

ScholarshipInfoRouter.put(
  "/:scholarshipInfo",
  async (req: Request, res: Response) => {
    try {
      const actualScholarshipInfo = req.params.scholarshipInfo;
      const { level, kind, period, user_id } = req.body as IScholarshipInfo;
      if (!level || !kind || !period ) {
        return res.status(400).send({
          status: "Error",
          message: "Please fill all the Fields: level,kind,period,user_id ",
        });
      }
      const scholarship = await updateScholarshipInfo(
        {
          level,
          kind,
          period,
          user_id,
        },
        actualScholarshipInfo
      );
      if (!scholarship) {
        return res.status(404).send({
          status: "Error",
          message: "Info nor found",
        });
      }
      return res.status(200).send({
        status: "Ok",
        message: "successful operation",
        scholarship,
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "User not found",
      });
    }
  }
);

ScholarshipInfoRouter.delete(
  "/:scholarshipInfo",
  async (req: Request, res: Response) => {
    try {
      const scholarshipInfoId = req.params.scholarshipInfo;
      const deletescholarshipInfoId = await deleteScholarshipInfo(
        scholarshipInfoId
      );
      if (!deletescholarshipInfoId) {
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
