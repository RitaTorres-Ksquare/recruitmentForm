import { Router, Request, Response } from "express";
import {
  createPersonalInfo,
  readPersonalInfo,
  updatePersonalInfo,
  deletePersonalInfo,
} from "../repositories/PersonalInfo.repo";
import { IPersonalInfo } from "../interfaces";

export const PersonalInfoRouter = Router();

PersonalInfoRouter.post("/", async (req: Request, res: Response) => {
  try {
    const {
      name,
      last_name,
      second_last_name,
      gender,
      gender_other,
      date_of_birth,
      city_of_birth,
      state_of_birth,
      country_of_birth,
      user_id,
    } = req.body as IPersonalInfo;
    if (
      !name ||
      !last_name ||
      !second_last_name ||
      !date_of_birth ||
      !city_of_birth ||
      !state_of_birth ||
      !country_of_birth
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields : name, last_name, second_last_name,gender,gender_other,date_of_birth, city_of_birth, state_of_birth, country_of_birth,user_id",
      });
    }
    if (
      typeof name !== "string" ||
      typeof last_name !== "string" ||
      typeof second_last_name !== "string" ||
      typeof state_of_birth !== "string" ||
      typeof city_of_birth !== "string" ||
      typeof state_of_birth !== "string" ||
      typeof country_of_birth !== "string"
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields : name, last_name, second_last_name,gender,gender_other,date_of_birth, city_of_birth, state_of_birth, country_of_birth,user_id",
      });
    }
    const personalInfo = await createPersonalInfo({
      name,
      last_name,
      second_last_name,
      gender,
      gender_other,
      date_of_birth,
      city_of_birth,
      state_of_birth,
      country_of_birth,
      user_id,
    });

    if (!personalInfo) {
      return res.status(500).send({
        status: "Error",
        message: "Error to create the user",
      });
    } else {
      return res.status(200).send({
        ...personalInfo.dataValues,
      });
    }
  } catch (error) {
    return null;
  }
});

PersonalInfoRouter.get(
  "/:personalInfo",
  async (req: Request, res: Response) => {
    try {
      const { personalInfo } = req.params;
      const personal = await readPersonalInfo(Number(personalInfo));
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

PersonalInfoRouter.put(
  "/:personalInfo",
  async (req: Request, res: Response) => {
    try {
      const actualPersonal = req.params.personalInfo;
      const {
        name,
        last_name,
        second_last_name,
        gender,
        gender_other,
        date_of_birth,
        city_of_birth,
        state_of_birth,
        country_of_birth,
        user_id,
      } = req.body as IPersonalInfo;
      if (
        !name ||
        !last_name ||
        !second_last_name ||
        !date_of_birth ||
        !city_of_birth ||
        !state_of_birth ||
        !country_of_birth
      ) {
        return res.status(400).send({
          status: "Error",
          message:
            "Please fill all the Fields : name, last_name, second_last_name,gender,gender_other,date_of_birth, city_of_birth, state_of_birth, country_of_birth,user_id",
        });
      }
      const person = await updatePersonalInfo(
        {
          name,
          last_name,
          second_last_name,
          gender,
          gender_other,
          date_of_birth,
          city_of_birth,
          state_of_birth,
          country_of_birth,
          user_id,
        },
        actualPersonal
      );
      if (!person) {
        return res.status(404).send({
          status: "Error",
          message: "Info nor found",
        });
      }
      return res.status(200).send({
        status: "Ok",
        message: "successful operation",
        person,
      });
    } catch (error) {
      return res.status(500).send({
        status: "Error",
        message: "User not found",
      });
    }
  }
);

PersonalInfoRouter.delete(
  "/:personalInfo",
  async (req: Request, res: Response) => {
    try {
      const personalId = req.params.personalInfo;

      const deletedPersonalInfo = await deletePersonalInfo(personalId);

      if (!deletedPersonalInfo) {
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
