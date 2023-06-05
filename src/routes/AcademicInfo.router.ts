import { Router, Request, Response } from "express";
import {
  createAcademicInfo,
  readAcademicInfo,
  updateAcademicInfo,
  deleteAcademicInfo,
} from "../repositories/AcademicInfo.repo";
import { IAcademicInfo } from "../interfaces";

export const AcademicInfoRouter = Router();

AcademicInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const {
      software_devel_comments,
      degree_level,
      informal_education,
      other_education,
      user_id,
    } = req.body as IAcademicInfo;
    if (
      !software_devel_comments ||
      !degree_level ||
      !informal_education ||
      !other_education
    ) {
      console.log(res);
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields : sofware_devel_comments,degree_level,informal_education,other_education,user_id",
      });
    }
    if (
      typeof software_devel_comments !== "string" ||
      typeof degree_level !== "string" ||
      typeof informal_education !== "string" ||
      typeof other_education !== "string"
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields : sofware_devel_comments,degree_level,informal_education,other_education,user_id",
      });
    }
    const academic = await createAcademicInfo({
      software_devel_comments,
      degree_level,
      informal_education,
      other_education,
      user_id,
    });
    if (!academic) {
      return res.status(500).send({
        status: "Error",
        message: "Error to create the user",
      });
    } else {
      return res.status(200).send({
        ...academic.dataValues,
      });
    }
  } catch (error) {
    return null;
  }
});

AcademicInfoRouter.get(
  "/:academicInfo", async (req: Request, res: Response) => {
    try {
      const { academic } = req.params;
      const academicInfo1 = await readAcademicInfo(Number(academic));
      if (!academicInfo1) {
        return res.status(404).send({
          status: "Error",
          message: "User not found",
        });
      }
      return res.status(200).send({
        status: "ok",
        message: "succesfull operation",
        academicInfo1,
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "Invalid username supplied",
      });
    }
  }
);

AcademicInfoRouter.put(
  "/:academicInfo",
  async (req: Request, res: Response) => {
    try {
      const actualAcademicInfo = req.params.academicInfo;
      const {
        software_devel_comments,
        degree_level,
        informal_education,
        other_education,
        user_id,
      } = req.body as IAcademicInfo;
      if (
        !software_devel_comments ||
        !degree_level ||
        !informal_education ||
        !other_education
      ) {
        return res.status(400).send({
          status: "Error",
          message:
            "Please fill all the Fields :sofware_devel_comments,degree_level,informal_education,other_education,user_id ",
        });
      }
      const academic = await updateAcademicInfo(
        {
          software_devel_comments,
          degree_level,
          informal_education,
          other_education,
          user_id,
        },
        actualAcademicInfo
      );
      if (!academic) {
        return res.status(404).send({
          status: "Error",
          message: "Info nor found",
        });
      }
      return res.status(200).send({
        status: "Ok",
        message: "successful operation",
        academic,
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "User not found",
      });
    }
  }
);

AcademicInfoRouter.delete(
  "/:academicInfo",
  async (req: Request, res: Response) => {
    try {
      const academicId = req.params.academicInfo;
      const deleteAcademic = await deleteAcademicInfo(academicId);
      if (!deleteAcademic) {
        return res.status(404).send({
          status: "Error",
          message: "Academic Info not found",
        });
      }
      return res.status(200).send({
        status: "Ok",
        message: "Successfully deleted the PersonalInfo",
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "An error occurred while deleting the Academic Info",
      });
    }
  }
);
