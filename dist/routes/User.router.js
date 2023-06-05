"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const User_repo_1 = require("../repositories/User.repo");
exports.UserRouter = (0, express_1.Router)();
exports.UserRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, firstName, lastName, email, phone } = req.body;
        if (!username || !firstName || !lastName || !email || !phone) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields: username firstName,lastName,email,phone,user_id,",
            });
        }
        if (typeof username !== "string" ||
            typeof firstName !== "string" ||
            typeof lastName !== "string" ||
            typeof email !== "string" ||
            typeof phone !== "string") {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields: username,firstName,lastName,email,phone,user_id,",
            });
        }
        const user = yield (0, User_repo_1.createUser)({
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
        }
        else {
            return res.status(200).send(Object.assign({}, user.dataValues));
        }
    }
    catch (error) {
        return null;
    }
}));
exports.UserRouter.get("/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username } = req.params;
        const user = yield (0, User_repo_1.readUser)(username);
        if (user === null) {
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "Invalid username supplied",
        });
    }
}));
exports.UserRouter.put("/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualUsername = req.params.username;
        const { username, firstName, lastName, email, phone } = req.body;
        if (!username || !firstName || !lastName || !email || !phone) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields: username,firstName,lastName,email,phone,user_id,",
            });
        }
        if (typeof username !== "string" ||
            typeof firstName !== "string" ||
            typeof lastName !== "string" ||
            typeof email !== "string" ||
            typeof phone !== "string") {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields: username,firstName,lastName,email,phone,user_id,",
            });
        }
        const user = yield (0, User_repo_1.updateUser)({
            username,
            firstName,
            lastName,
            email,
            phone,
        }, actualUsername);
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "User not found",
        });
    }
}));
exports.UserRouter.delete("/:username", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.username;
        const deleteUsers = yield (0, User_repo_1.deleteUser)(userId);
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "An error occurred while deleting the User",
        });
    }
}));
