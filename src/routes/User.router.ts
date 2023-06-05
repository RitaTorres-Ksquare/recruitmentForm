import { Router, Request, Response } from "express";
import {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} from "../repositories/User.repo";
import { IUser } from "../interfaces";

export const UserRouter = Router();

UserRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { username, firstName, lastName, email, phone } = req.body as IUser;
    if (!username || !firstName || !lastName || !email || !phone) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields: username firstName,lastName,email,phone,user_id,",
      });
    }
    if (
      typeof username !== "string" ||
      typeof firstName !== "string" ||
      typeof lastName !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string"
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields: username,firstName,lastName,email,phone,user_id,",
      });
    }
    const user = await createUser({
      username,
      firstName,
      lastName,
      email,
      phone,
    });
    if (!user) {
      return res.status(500).send({
        status: "Error",
        message: "Error to create the user",
      });
    } else {
      return res.status(200).send({
        ...user.dataValues,
      });
    }
  } catch (error) {
    return null;
  }
});

UserRouter.get("/:username", async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const user = await readUser(username);
    if (user===null) {
      return res.status(404).send({
        status: "Error",
        message: "User not found",
      });
    }
    return res.status(200).send({
      status: "ok",
      message: "succesfull operation",
      user,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: "Invalid username supplied",
    });
  }
});

UserRouter.put("/:username", async (req: Request, res: Response) => {
  try {
    const actualUsername = req.params.username;
    const { username, firstName, lastName, email, phone } = req.body as IUser;
    if (!username || !firstName || !lastName || !email || !phone) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields: username,firstName,lastName,email,phone,user_id,",
      });
    }
    if (
      typeof username !== "string" ||
      typeof firstName !== "string" ||
      typeof lastName !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string"
    ) {
      return res.status(400).send({
        status: "Error",
        message:
          "Please fill all the Fields: username,firstName,lastName,email,phone,user_id,",
      });
    }
    const user = await updateUser(
      {
        username,
        firstName,
        lastName,
        email,
        phone,
      },
      actualUsername
    );
    if (!user) {
      return res.status(404).send({
        status: "Error",
        message: "Info nor found",
      });
    }
    return res.status(200).send({
      status: "Ok",
      message: "successful operation",
      user,
    });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: "User not found",
    });
  }
});

UserRouter.delete("/:username", async (req: Request, res: Response) => {
  try {
    const userId = req.params.username;
    const deleteUsers = await deleteUser(userId);
    if (!deleteUsers) {
      return res.status(404).send({
        status: "Error",
        message: "User not found",
      });
    }
    return res.status(200).send({
      status: "Ok",
      message: "Successfully deleted the User",
    });
  } catch (error) {
    return res.status(500).send({
      status: "Error",
      message: "An error occurred while deleting the User",
    });
  }
});
