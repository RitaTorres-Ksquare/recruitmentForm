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
exports.AcademicInfoRouter = void 0;
const express_1 = require("express");
const AcademicInfo_repo_1 = require("../repositories/AcademicInfo.repo");
exports.AcademicInfoRouter = (0, express_1.Router)();
exports.AcademicInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { software_devel_comments, degree_level, informal_education, other_education, user_id, } = req.body;
        if (!software_devel_comments ||
            !degree_level ||
            !informal_education ||
            !other_education) {
            console.log(res);
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields : sofware_devel_comments,degree_level,informal_education,other_education,user_id",
            });
        }
        if (typeof software_devel_comments !== "string" ||
            typeof degree_level !== "string" ||
            typeof informal_education !== "string" ||
            typeof other_education !== "string") {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields : sofware_devel_comments,degree_level,informal_education,other_education,user_id",
            });
        }
        const academic = yield (0, AcademicInfo_repo_1.createAcademicInfo)({
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
        }
        else {
            return res.status(200).send(Object.assign({}, academic.dataValues));
        }
    }
    catch (error) {
        return null;
    }
}));
exports.AcademicInfoRouter.get("/:academicInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { academic } = req.params;
        const academicInfo1 = yield (0, AcademicInfo_repo_1.readAcademicInfo)(Number(academic));
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "Invalid username supplied",
        });
    }
}));
exports.AcademicInfoRouter.put("/:academicInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualAcademicInfo = req.params.academicInfo;
        const { software_devel_comments, degree_level, informal_education, other_education, user_id, } = req.body;
        if (!software_devel_comments ||
            !degree_level ||
            !informal_education ||
            !other_education) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields :sofware_devel_comments,degree_level,informal_education,other_education,user_id ",
            });
        }
        const academic = yield (0, AcademicInfo_repo_1.updateAcademicInfo)({
            software_devel_comments,
            degree_level,
            informal_education,
            other_education,
            user_id,
        }, actualAcademicInfo);
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "User not found",
        });
    }
}));
exports.AcademicInfoRouter.delete("/:academicInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const academicId = req.params.academicInfo;
        const deleteAcademic = yield (0, AcademicInfo_repo_1.deleteAcademicInfo)(academicId);
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "An error occurred while deleting the Academic Info",
        });
    }
}));
