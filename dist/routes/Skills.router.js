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
exports.SkillsRouter = void 0;
const express_1 = require("express");
const Skills_repo_1 = require("../repositories/Skills.repo");
exports.SkillsRouter = (0, express_1.Router)();
exports.SkillsRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { preferred_programming_language, experience, disability, user_id } = req.body;
        if (!preferred_programming_language || !experience || !disability) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields: preferred_programming_language,experience,disability,user_id",
            });
        }
        if (typeof preferred_programming_language !== "string" ||
            typeof experience !== "string" ||
            typeof disability !== "string") {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields: preferred_programming_language,experience,disability,user_id",
            });
        }
        const skill = yield (0, Skills_repo_1.createSkills)({
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
        }
        else {
            return res.status(200).send(Object.assign({}, skill.dataValues));
        }
    }
    catch (error) {
        return null;
    }
}));
exports.SkillsRouter.get("/:skillsInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { skill } = req.params;
        const skillsInfo = yield (0, Skills_repo_1.readSkills)(Number(skill));
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "Invalid username supplied",
        });
    }
}));
exports.SkillsRouter.put("/:skillsInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skillsInfo = req.params.skillsInfo;
        const { preferred_programming_language, experience, disability, user_id } = req.body;
        if (!preferred_programming_language || !experience || !disability) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields: preferred_programing,experience,disability",
            });
        }
        const skills = yield (0, Skills_repo_1.updateSkills)({
            preferred_programming_language,
            experience,
            disability,
            user_id,
        }, skillsInfo);
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "User not found",
        });
    }
}));
exports.SkillsRouter.delete("/:skillsInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skillsId = req.params.skillsInfo;
        const deleteSkillsId = yield (0, Skills_repo_1.deleteSkills)(skillsId);
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "An error occurred while deleting the Goverment Info",
        });
    }
}));
