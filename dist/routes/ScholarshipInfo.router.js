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
exports.ScholarshipInfoRouter = void 0;
const express_1 = require("express");
const ScholarshipInfo_repo_1 = require("../repositories/ScholarshipInfo.repo");
exports.ScholarshipInfoRouter = (0, express_1.Router)();
exports.ScholarshipInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { level, kind, period, user_id } = req.body;
        if (!level || !kind || !period) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields: level,kind,period",
            });
        }
        if (typeof level !== "string" ||
            typeof kind !== "string" ||
            typeof period !== "number") {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields: level,kind,period,user_id,",
            });
        }
        const scholarshipInfo = yield (0, ScholarshipInfo_repo_1.createScholarshipInfo)({
            level,
            kind,
            period,
            user_id,
        });
        if (!scholarshipInfo) {
            return res.status(500).send({
                status: "Error",
                message: "Error to create the user",
            });
        }
        else {
            return res.status(200).send(Object.assign({}, scholarshipInfo.dataValues));
        }
    }
    catch (error) {
        return null;
    }
}));
exports.ScholarshipInfoRouter.get("/:scholarshipInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { scholarshipInfo } = req.params;
        const scholarship = yield (0, ScholarshipInfo_repo_1.readScholarshipInfo)(Number(scholarshipInfo));
        if (!scholarship) {
            return res.status(404).send({
                status: "Error",
                message: "User not found",
            });
        }
        return res.status(200).send({
            status: "ok",
            message: "succesfull operation",
            scholarship,
        });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "Invalid username supplied",
        });
    }
}));
exports.ScholarshipInfoRouter.put("/:scholarshipInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualScholarshipInfo = req.params.scholarshipInfo;
        const { level, kind, period, user_id } = req.body;
        if (!level || !kind || !period) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields: level,kind,period,user_id ",
            });
        }
        const scholarship = yield (0, ScholarshipInfo_repo_1.updateScholarshipInfo)({
            level,
            kind,
            period,
            user_id,
        }, actualScholarshipInfo);
        if (!scholarship) {
            return res.status(404).send({
                status: "Error",
                message: "Info nor found",
            });
        }
        return res.status(200).send({
            status: "Ok",
            message: "successful operation",
            scholarship,
        });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "User not found",
        });
    }
}));
exports.ScholarshipInfoRouter.delete("/:scholarshipInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const scholarshipInfoId = req.params.scholarshipInfo;
        const deletescholarshipInfoId = yield (0, ScholarshipInfo_repo_1.deleteScholarshipInfo)(scholarshipInfoId);
        if (!deletescholarshipInfoId) {
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
