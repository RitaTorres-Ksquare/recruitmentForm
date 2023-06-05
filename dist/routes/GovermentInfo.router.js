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
exports.GovermentInfoRouter = void 0;
const express_1 = require("express");
const GovermentInfo_repo_1 = require("../repositories/GovermentInfo.repo");
exports.GovermentInfoRouter = (0, express_1.Router)();
exports.GovermentInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { CURP, identification_number, user_id } = req.body;
        if (!CURP || !identification_number) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields: CURP, Identification number",
            });
        }
        if (typeof CURP !== "string" ||
            typeof identification_number !== "string") {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields: CURP, Identification number",
            });
        }
        const goverment = yield (0, GovermentInfo_repo_1.createGovermenInfo)({
            CURP,
            identification_number,
            user_id,
        });
        if (!goverment) {
            return res.status(500).send({
                status: "Error",
                message: "Error to create the user",
            });
        }
        else {
            return res.status(200).send(Object.assign({}, goverment.dataValues));
        }
    }
    catch (error) {
        return null;
    }
}));
exports.GovermentInfoRouter.get("/:govermentInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { goverment } = req.params;
        const govermentInfo = yield (0, GovermentInfo_repo_1.readGovermentInfo)(Number(goverment));
        if (!govermentInfo) {
            return res.status(404).send({
                status: "Error",
                message: "User not found",
            });
        }
        return res.status(200).send({
            status: "ok",
            message: "succesfull operation",
            govermentInfo,
        });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "Invalid username supplied",
        });
    }
}));
exports.GovermentInfoRouter.put("/:govermentInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const govermentInfo = req.params.govermentInfo;
        const { CURP, identification_number, user_id } = req.body;
        if (!CURP || !identification_number) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields: CURP, Identification number",
            });
        }
        const goverment = yield (0, GovermentInfo_repo_1.updateGovermentInfo)({
            CURP,
            identification_number,
            user_id,
        }, govermentInfo);
        if (!goverment) {
            return res.status(404).send({
                status: "Error",
                message: "Info nor found",
            });
        }
        return res.status(200).send({
            status: "Ok",
            message: "successful operation",
            goverment,
        });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "User not found",
        });
    }
}));
exports.GovermentInfoRouter.delete("/govermentInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const govermentId = req.params.govermentInfo;
        const deleteGoverment = yield (0, GovermentInfo_repo_1.deleteGovermentInfo)(govermentId);
        if (!deleteGoverment) {
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
