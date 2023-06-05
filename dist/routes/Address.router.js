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
exports.AddressRouter = void 0;
const express_1 = require("express");
const Address_repo_1 = require("../repositories/Address.repo");
exports.AddressRouter = (0, express_1.Router)();
exports.AddressRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { street, in_between_street_a, in_between_street_b, city, state, country, zip, proof_of_address, user_id, } = req.body;
        if (!street ||
            !in_between_street_a ||
            !in_between_street_b ||
            !city ||
            !state ||
            !country ||
            !zip ||
            !proof_of_address) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields : street,in_between_street_a,in_between_street_b,city,state,country,zip,proof_of_address,user_id,",
            });
        }
        if (typeof street !== "string" ||
            typeof in_between_street_a !== "string" ||
            typeof in_between_street_b !== "string" ||
            typeof city !== "string" ||
            typeof state !== "string" ||
            typeof country !== "string" ||
            typeof zip !== "string" ||
            typeof proof_of_address !== "string") {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields : street,in_between_street_a,in_between_street_b,city,state,country,zip,proof_of_address,user_id,",
            });
        }
        const address = yield (0, Address_repo_1.createAddress)({
            street,
            in_between_street_a,
            in_between_street_b,
            city,
            state,
            country,
            zip,
            proof_of_address,
            user_id,
        });
        if (!address) {
            return res.status(500).send({
                status: "Error",
                message: "Error to create the user",
            });
        }
        else {
            return res.status(200).send(Object.assign({}, address.dataValues));
        }
    }
    catch (error) {
        return null;
    }
}));
exports.AddressRouter.get("/:address", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address } = req.params;
        const personalAddress = yield (0, Address_repo_1.readAddress)(Number(address));
        if (!personalAddress) {
            return res.status(404).send({
                status: "Error",
                message: "User not found",
            });
        }
        return res.status(200).send({
            status: "ok",
            message: "succesfull operation",
            personalAddress,
        });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "Invalid username supplied",
        });
    }
}));
exports.AddressRouter.put("/:address", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualAddress = req.params.address;
        const { street, in_between_street_a, in_between_street_b, city, state, country, zip, proof_of_address, user_id, } = req.body;
        if (!street ||
            !in_between_street_a ||
            !in_between_street_b ||
            !city ||
            !state ||
            !country ||
            !zip ||
            !proof_of_address) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields : street,in_between_street_a,in_between_street_b,city,state,country,zip,proof_of_address,user_id,",
            });
        }
        const address = yield (0, Address_repo_1.updateAddress)({
            street,
            in_between_street_a,
            in_between_street_b,
            city,
            state,
            country,
            zip,
            proof_of_address,
            user_id,
        }, actualAddress);
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
exports.AddressRouter.delete("/:address", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addressId = req.params.address;
        const deleteAddress1 = yield (0, Address_repo_1.deleteAddress)(addressId);
        if (!deleteAddress1) {
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
