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
exports.AddresExtraInfoRouter = void 0;
const express_1 = require("express");
const AddressExtraInfo_repo_1 = require("../repositories/AddressExtraInfo.repo");
exports.AddresExtraInfoRouter = (0, express_1.Router)();
exports.AddresExtraInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type_of_residency, people, address_id, user_id } = req.body;
        if (!type_of_residency || !people || !address_id) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields : type of residency, people, addressId",
            });
        }
        if (typeof type_of_residency !== "string" ||
            typeof people !== "string" ||
            typeof address_id !== "string") {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields : type of residency, people, addressId",
            });
        }
        const addressExtraInfo = yield (0, AddressExtraInfo_repo_1.createAddressExtraInfo)({
            type_of_residency,
            people,
            address_id,
            user_id,
        });
        if (!addressExtraInfo) {
            return res.status(500).send({
                status: "Error",
                message: "Error to create the user",
            });
        }
        else {
            return res.status(200).send(Object.assign({}, addressExtraInfo.dataValues));
        }
    }
    catch (error) {
        return null;
    }
}));
exports.AddresExtraInfoRouter.get("/:addressExtraInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { addressExtraInfo } = req.params;
        const personal = yield (0, AddressExtraInfo_repo_1.readAddressExtraInfo)(Number(addressExtraInfo));
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
exports.AddresExtraInfoRouter.put("/:addressExtraInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualAddressExtraInfo = req.params.addressExtraInfo;
        const { type_of_residency, people, address_id, user_id } = req.body;
        if (!type_of_residency || !people || !address_id) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields :  type of residency, people, addressId",
            });
        }
        const address = yield (0, AddressExtraInfo_repo_1.updateAddressExtraInfo)({
            type_of_residency,
            people,
            address_id,
            user_id,
        }, actualAddressExtraInfo);
        if (!address) {
            return res.status(404).send({
                status: "Error",
                message: "Info nor found",
            });
        }
        return res.status(200).send({
            status: "Ok",
            message: "successful operation",
            address,
        });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "User not found",
        });
    }
}));
exports.AddresExtraInfoRouter.delete("/:addressExtraInfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addressExtraInfoId = req.params.addressExtraInfo;
        const deletedExtraPersonal = yield (0, AddressExtraInfo_repo_1.deleteAddressExtraInfo)(addressExtraInfoId);
        if (!deletedExtraPersonal) {
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
