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
exports.PersonalInfoRouter = void 0;
const express_1 = require("express");
const PersonalInfo_repo_1 = require("../repositories/PersonalInfo.repo");
exports.PersonalInfoRouter = (0, express_1.Router)();
exports.PersonalInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, last_name, second_last_name, gender, gender_other, date_of_birth, city_of_birth, state_of_birth, country_of_birth, user_id, } = req.body;
        if (!name ||
            !last_name ||
            !second_last_name ||
            !date_of_birth ||
            !city_of_birth ||
            !state_of_birth ||
            !country_of_birth) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields : name, last_name, second_last_name,gender,gender_other,date_of_birth, city_of_birth, state_of_birth, country_of_birth,user_id",
            });
        }
        if (typeof name !== "string" ||
            typeof last_name !== "string" ||
            typeof second_last_name !== "string" ||
            typeof state_of_birth !== "string" ||
            typeof city_of_birth !== "string" ||
            typeof state_of_birth !== "string" ||
            typeof country_of_birth !== "string") {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields : name, last_name, second_last_name,gender,gender_other,date_of_birth, city_of_birth, state_of_birth, country_of_birth,user_id",
            });
        }
        const personalInfo = yield (0, PersonalInfo_repo_1.createPersonalInfo)({
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
        }
        else {
            return res.status(200).send(Object.assign({}, personalInfo.dataValues));
        }
    }
    catch (error) {
        return null;
    }
}));
exports.PersonalInfoRouter.get("/:personalInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { personalInfo } = req.params;
        const personal = yield (0, PersonalInfo_repo_1.readPersonalInfo)(Number(personalInfo));
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "Invalid username supplied",
        });
    }
}));
exports.PersonalInfoRouter.put("/:personalInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualPersonal = req.params.personalInfo;
        const { name, last_name, second_last_name, gender, gender_other, date_of_birth, city_of_birth, state_of_birth, country_of_birth, user_id, } = req.body;
        if (!name ||
            !last_name ||
            !second_last_name ||
            !date_of_birth ||
            !city_of_birth ||
            !state_of_birth ||
            !country_of_birth) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields : name, last_name, second_last_name,gender,gender_other,date_of_birth, city_of_birth, state_of_birth, country_of_birth,user_id",
            });
        }
        const person = yield (0, PersonalInfo_repo_1.updatePersonalInfo)({
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
        }, actualPersonal);
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "User not found",
        });
    }
}));
exports.PersonalInfoRouter.delete("/:personalInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personalId = req.params.personalInfo;
        const deletedPersonalInfo = yield (0, PersonalInfo_repo_1.deletePersonalInfo)(personalId);
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "An error occurred while deleting the PersonalInfo",
        });
    }
}));
