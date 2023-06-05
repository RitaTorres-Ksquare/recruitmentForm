import { Router, Request, Response } from "express";
import {
  createSkills,
  readSkills,
  updateSkills,
  deleteSkills,
} from "../repositories/Skills.repo";
import { ISkills } from "../interfaces";

export const SkillsRouter = Router();

SkillsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { preferred_programming_language, experience, disability, user_id } =
      req.body as ISkills;
    if (!preferred_programming_language || !experience || !disability) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields: preferred_programming_language,experience,disability,user_id",
      });
    }
    if (
      typeof preferred_programming_language !== "string" ||
      typeof experience !== "string" ||
      typeof disability !== "string"
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields: preferred_programming_language,experience,disability,user_id",
      });
    }

    const skill = await createSkills({
      preferred_programming_language,
      experience,
      disability,
      user_id,
    });
    if (!skill) {
      return res.status(500).send({
        status: "Error",
        message: "Error to create the user",
      });
    } else {
      return res.status(200).send({
        ...skill.dataValues,
      });
    }
  } catch (error) {
    return null;
  }
});

SkillsRouter.get("/:skillsInfo", async (req: Request, res: Response) => {
  try {
    const { skill } = req.params;
    const skillsInfo = await readSkills(Number(skill));
    if (!skillsInfo) {
      return res.status(404).send({
        status: "Error",
        message: "User not found",
      });
    }
    return res.status(200).send({
      status: "ok",
      message: "succesfull operation",
      skillsInfo,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: "Invalid username supplied",
    });
  }
});

SkillsRouter.put("/:skillsInfo", async (req: Request, res: Response) => {
  try {
    const skillsInfo = req.params.skillsInfo;
    const { preferred_programming_language, experience, disability, user_id } =
      req.body as ISkills;
    if (!preferred_programming_language || !experience || !disability) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields: preferred_programing,experience,disability",
      });
    }
    const skills = await updateSkills(
      {
        preferred_programming_language,
        experience,
        disability,
        user_id,
      },
      skillsInfo
    );
    if (!skills) {
      return res.status(404).send({
        status: "Error",
        message: "Info nor found",
      });
    }
    return res.status(200).send({
      status: "Ok",
      message: "successful operation",
      skills,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: "User not found",
    });
  }
});
SkillsRouter.delete("/:skillsInfo", async (req: Request, res: Response) => {
  try {
    const skillsId = req.params.skillsInfo;
    const deleteSkillsId = await deleteSkills(skillsId);
    if (!deleteSkillsId) {
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
});
