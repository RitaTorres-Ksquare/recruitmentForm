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
exports.FormalEducationInfoRouter = void 0;
const express_1 = require("express");
const FormailEducationInfo_repo_1 = require("../repositories/FormailEducationInfo.repo");
exports.FormalEducationInfoRouter = (0, express_1.Router)();
exports.FormalEducationInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { university_name, state, country, career_name, classes_completed, proof_classes_completed, degree_completed, proof_degree_completed, license_completed, proof_license_completed, user_id, } = req.body;
        if (!university_name ||
            !state ||
            !country ||
            !career_name ||
            !classes_completed ||
            !proof_classes_completed ||
            !degree_completed ||
            !proof_degree_completed ||
            !license_completed ||
            !proof_license_completed) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields : university_name,state,country,career_name,classes_completed,proof_classes_completed,degree_completed,proof_degree_completed,license_completed,proof_license_completed,user_id, ",
            });
        }
        if (typeof university_name !== "string" ||
            typeof state !== "string" ||
            typeof country !== "string" ||
            typeof career_name !== "string" ||
            typeof classes_completed !== "boolean" ||
            typeof proof_classes_completed !== "string" ||
            typeof degree_completed !== "boolean" ||
            typeof proof_degree_completed !== "string" ||
            typeof license_completed !== "boolean" ||
            typeof proof_license_completed !== "string") {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields : university_name,state,country,career_name,classes_completed,proof_classes_completed,degree_completed,proof_degree_completed,license_completed,proof_license_completed,user_id, ",
            });
        }
        const formalEducation = yield (0, FormailEducationInfo_repo_1.createFormalEducationInfo)({
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
        }
        else {
            return res.status(200).send(Object.assign({}, formalEducation.dataValues));
        }
    }
    catch (error) {
        return null;
    }
}));
exports.FormalEducationInfoRouter.get("/:formalEducationInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { formalEducationInfo } = req.params;
        const education = yield (0, FormailEducationInfo_repo_1.readFormalEducationInfo)(Number(formalEducationInfo));
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "Invalid username supplied",
        });
    }
}));
exports.FormalEducationInfoRouter.put("/:formalEducationInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualFormalEducation = req.params.formalEducationInfo;
        const { university_name, state, country, career_name, classes_completed, proof_classes_completed, degree_completed, proof_degree_completed, license_completed, proof_license_completed, user_id, } = req.body;
        if (!university_name ||
            !state ||
            !country ||
            !career_name ||
            !classes_completed ||
            !proof_classes_completed ||
            !degree_completed ||
            !proof_degree_completed ||
            !license_completed ||
            !proof_license_completed) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields: university_name,state,country,career_name,classes_completed,proof_classes_completed,degree_completed,proof_degree_completed,license_completed,proof_license_completed",
            });
        }
        const formal = yield (0, FormailEducationInfo_repo_1.updateFormalEducationInfo)({
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
        }, actualFormalEducation);
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "User not found",
        });
    }
}));
exports.FormalEducationInfoRouter.delete("/:formalEducationInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const formalEducationInfoId = req.params.formalEducationInfo;
        const deleteformalEducationInfoId = yield (0, FormailEducationInfo_repo_1.delateFormalEducationInfo)(formalEducationInfoId);
        if (!deleteformalEducationInfoId) {
            return res.status(404).send({
                status: "Error",
                message: "PersonalInfo not found",
            });
        }
        return res.status(200).send({
            status: "Ok",
            message: "Successfully deleted the PersonalInfo",
        });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "An error occurred while deleting the PersonalInfo",
        });
    }
}));
