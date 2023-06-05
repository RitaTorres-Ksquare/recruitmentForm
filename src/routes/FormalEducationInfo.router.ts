import { Router, Request, Response } from "express";
import {
  createFormalEducationInfo,
  readFormalEducationInfo,
  updateFormalEducationInfo,
  delateFormalEducationInfo,
} from "../repositories/FormailEducationInfo.repo";
import { IFormalEducationInfo } from "../interfaces";

export const FormalEducationInfoRouter = Router();

FormalEducationInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const {
      university_name,
      state,
      country,
      career_name,
      classes_completed,
      proof_classes_completed,
      degree_completed,
      proof_degree_completed,
      license_completed,
      proof_license_completed,
      user_id,
    } = req.body as IFormalEducationInfo;
    if (
      !university_name ||
      !state ||
      !country ||
      !career_name ||
      !classes_completed ||
      !proof_classes_completed ||
      !degree_completed ||
      !proof_degree_completed ||
      !license_completed ||
      !proof_license_completed
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields : university_name,state,country,career_name,classes_completed,proof_classes_completed,degree_completed,proof_degree_completed,license_completed,proof_license_completed,user_id, ",
      });
    }
    if (
      typeof university_name !== "string" ||
      typeof state !== "string" ||
      typeof country !== "string" ||
      typeof career_name !== "string" ||
      typeof classes_completed !== "boolean"||
      typeof proof_classes_completed !== "string" ||
      typeof degree_completed !== "boolean" ||
      typeof proof_degree_completed !== "string" ||
      typeof license_completed !== "boolean" ||
      typeof proof_license_completed !== "string"
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields : university_name,state,country,career_name,classes_completed,proof_classes_completed,degree_completed,proof_degree_completed,license_completed,proof_license_completed,user_id, ",
      });
    }
    const formalEducation = await createFormalEducationInfo({
      university_name,
      state,
      country,
      career_name,
      classes_completed,
      proof_classes_completed,
      degree_completed,
      proof_degree_completed,
      license_completed,
      proof_license_completed,
      user_id,
    });
    if (!formalEducation) {
      return res.status(500).send({
        status: "Error",
        message: "Error to create the user",
      });
    } else {
      return res.status(200).send({
        ...formalEducation.dataValues,
      });
    }
  } catch (error) {
    return null;
  }
});

FormalEducationInfoRouter.get(
  "/:formalEducationInfo",
  async (req: Request, res: Response) => {
    try {
      const { formalEducationInfo } = req.params;
      const education = await readFormalEducationInfo(Number(formalEducationInfo));
      if (!education) {
        return res.status(404).send({
          status: "Error",
          message: "User not found",
        });
      }
      return res.status(200).send({
        status: "ok",
        message: "succesfull operation",
        education,
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "Invalid username supplied",
      });
    }
  }
);

FormalEducationInfoRouter.put(
  "/:formalEducationInfo",
  async (req: Request, res: Response) => {
    try {
      const actualFormalEducation = req.params.formalEducationInfo;
      const {
        university_name,
        state,
        country,
        career_name,
        classes_completed,
        proof_classes_completed,
        degree_completed,
        proof_degree_completed,
        license_completed,
        proof_license_completed,
        user_id,
      } = req.body as IFormalEducationInfo;
      if (
        !university_name ||
        !state ||
        !country ||
        !career_name ||
        !classes_completed ||
        !proof_classes_completed ||
        !degree_completed ||
        !proof_degree_completed ||
        !license_completed ||
        !proof_license_completed
      ) {
        return res.status(400).send({
          status: "Error",
          message:
            "Please fill all the Fields: university_name,state,country,career_name,classes_completed,proof_classes_completed,degree_completed,proof_degree_completed,license_completed,proof_license_completed",
        });
      }
      const formal = await updateFormalEducationInfo(
        {
          university_name,
          state,
          country,
          career_name,
          classes_completed,
          proof_classes_completed,
          degree_completed,
          proof_degree_completed,
          license_completed,
          proof_license_completed,
          user_id,
        },
        actualFormalEducation
      );
      if (!formal) {
        return res.status(404).send({
          status: "Error",
          message: "Info nor found",
        });
      }
      return res.status(200).send({
        status: "Ok",
        message: "successful operation",
        formal,
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "User not found",
      });
    }
  }
);

FormalEducationInfoRouter.delete("/:formalEducationInfo", async (req:Request, res:Response) =>{
    try{
        const formalEducationInfoId= req.params.formalEducationInfo;
        const deleteformalEducationInfoId= await delateFormalEducationInfo(formalEducationInfoId);
        if(!deleteformalEducationInfoId){
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
})
