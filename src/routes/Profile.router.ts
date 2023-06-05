import { Router, Request, Response } from "express";
import {
  createProfile,
  readProfile,
  updateProfile,
  deleteProfile,
} from "../repositories/Profile.repo";
import { IProfile } from "../interfaces";

export const ProfileRouter = Router();

ProfileRouter.post("/", async (req: Request, res: Response) => {
  try {
    const {
      phone,
      country_code,
      email,
      alt_email,
      reference,
      other_reference,
      user_id,
    } = req.body as IProfile;
    if (
      !phone ||
      !country_code ||
      !email ||
      !alt_email ||
      !reference ||
      !other_reference
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields : phone,country_code,email,alt_email,reference,other_reference,user_id,",
      });
    }
    if (
      typeof phone !== "string" ||
      typeof country_code !== "string" ||
      typeof email !== "string" ||
      typeof alt_email !== "string" ||
      typeof reference !== "string" ||
      typeof other_reference !== "string"
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields : phone,country_code,email,alt_email,reference,other_reference,user_id, ",
      });
    }
    const profile = await createProfile({
      phone,
      country_code,
      email,
      alt_email,
      reference,
      other_reference,
      user_id,
    });

    if (!profile) {
      return res.status(500).send({
        status: "Error",
        message: "Error to create the user",
      });
    } else {
      return res.status(200).send({
        ...profile.dataValues,
      });
    }
  } catch (error) {
    return null;
  }
});

ProfileRouter.get("/:profile", async (req: Request, res: Response) => {
  try {
    const { profile } = req.params;
    console.log(profile);
    const profileInfo = await readProfile(Number(profile));
    console.log(profileInfo);
    if (!profileInfo) {
      return res.status(404).send({
        status: "Error",
        message: "User not found",
      });
    }
    return res.status(200).send({
      status: "ok",
      message: "succesfull operation",
      profileInfo,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: "Invalid username supplied",
    });
  }
});

ProfileRouter.put("/:profile", async (req: Request, res: Response) => {
  try {
    const actualProfile = req.params.profile;
    const {
      phone,
      country_code,
      email,
      alt_email,
      reference,
      other_reference,
      user_id,
    } = req.body as IProfile;
    if (
      !phone ||
      !country_code ||
      !email ||
      !alt_email ||
      !reference ||
      !other_reference
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields :phone,country_code,email,alt_email,reference,other_reference,user_id, ",
      });
    }

    const profile = await updateProfile(
      {
        phone,
        country_code,
        email,
        alt_email,
        reference,
        other_reference,
        user_id,
      },
      actualProfile
    );
    if (!profile) {
      return res.status(404).send({
        status: "Error",
        message: "Info nor found",
      });
    }
    return res.status(200).send({
      status: "Ok",
      message: "successful operation",
      profile,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: "User not found",
    });
  }
});

ProfileRouter.delete("/:profile", async (req: Request, res: Response) => {
  try {
    const profileId = req.params.profile;
    const profileInfo = await deleteProfile(profileId);
    if (!profileInfo) {
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
