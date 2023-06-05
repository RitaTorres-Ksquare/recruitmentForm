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
exports.ProfileRouter = void 0;
const express_1 = require("express");
const Profile_repo_1 = require("../repositories/Profile.repo");
exports.ProfileRouter = (0, express_1.Router)();
exports.ProfileRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { phone, country_code, email, alt_email, reference, other_reference, user_id, } = req.body;
        if (!phone ||
            !country_code ||
            !email ||
            !alt_email ||
            !reference ||
            !other_reference) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields : phone,country_code,email,alt_email,reference,other_reference,user_id,",
            });
        }
        if (typeof phone !== "string" ||
            typeof country_code !== "string" ||
            typeof email !== "string" ||
            typeof alt_email !== "string" ||
            typeof reference !== "string" ||
            typeof other_reference !== "string") {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields : phone,country_code,email,alt_email,reference,other_reference,user_id, ",
            });
        }
        const profile = yield (0, Profile_repo_1.createProfile)({
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
        }
        else {
            return res.status(200).send(Object.assign({}, profile.dataValues));
        }
    }
    catch (error) {
        return null;
    }
}));
exports.ProfileRouter.get("/:profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { profile } = req.params;
        console.log(profile);
        const profileInfo = yield (0, Profile_repo_1.readProfile)(Number(profile));
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "Invalid username supplied",
        });
    }
}));
exports.ProfileRouter.put("/:profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualProfile = req.params.profile;
        const { phone, country_code, email, alt_email, reference, other_reference, user_id, } = req.body;
        if (!phone ||
            !country_code ||
            !email ||
            !alt_email ||
            !reference ||
            !other_reference) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields :phone,country_code,email,alt_email,reference,other_reference,user_id, ",
            });
        }
        const profile = yield (0, Profile_repo_1.updateProfile)({
            phone,
            country_code,
            email,
            alt_email,
            reference,
            other_reference,
            user_id,
        }, actualProfile);
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "User not found",
        });
    }
}));
exports.ProfileRouter.delete("/:profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profileId = req.params.profile;
        const profileInfo = yield (0, Profile_repo_1.deleteProfile)(profileId);
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
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "An error occurred while deleting the PersonalInfo",
        });
    }
}));
