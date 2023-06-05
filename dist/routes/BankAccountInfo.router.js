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
exports.BankAccountInfoRouter = void 0;
const express_1 = require("express");
const BankAccountInfo_repo_1 = require("../repositories/BankAccountInfo.repo");
exports.BankAccountInfoRouter = (0, express_1.Router)();
exports.BankAccountInfoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { acc_number, clabe, bank, user_id } = req.body;
        if (!acc_number || !clabe || !bank) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields :acc_number, clabe, bank, user_id ",
            });
        }
        if (typeof acc_number !== "number" ||
            typeof clabe !== "number" ||
            typeof bank !== "string") {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields :acc_number, clabe, bank, user_id ",
            });
        }
        const bankAccountInfo = yield (0, BankAccountInfo_repo_1.createBankAccountInfo)({
            acc_number,
            clabe,
            bank,
            user_id,
        });
        if (!bankAccountInfo) {
            return res.status(500).send({
                status: "Error",
                message: "Error to create the user",
            });
        }
        else {
            return res.status(200).send(Object.assign({}, bankAccountInfo.dataValues));
        }
    }
    catch (error) {
        return null;
    }
}));
exports.BankAccountInfoRouter.get("/:bankAccount", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bankAccount } = req.params;
        const bank = yield (0, BankAccountInfo_repo_1.readBankAccountInfo)(Number(bankAccount));
        if (!bank) {
            return res.status(404).send({
                status: "Error",
                message: "User not found",
            });
        }
        return res.status(200).send({
            status: "ok",
            message: "succesfull operation",
            bank,
        });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "Invalid username supplied",
        });
    }
}));
exports.BankAccountInfoRouter.put("/:bankAccount", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actualBankAccountInfo = req.params.bankAccount;
        const { acc_number, clabe, bank, user_id } = req.body;
        if (!acc_number || !clabe || !bank) {
            return res.status(400).send({
                status: "Error",
                message: "Please fill all the Fields: acc_number,clabe,bank,user_id,",
            });
        }
        const bankAccount = yield (0, BankAccountInfo_repo_1.updateBankAccountInfo)({
            acc_number,
            clabe,
            bank,
            user_id,
        }, actualBankAccountInfo);
        if (!bankAccount) {
            return res.status(404).send({
                status: "Error",
                message: "Info nor found",
            });
        }
        return res.status(200).send({
            status: "Ok",
            message: "successful operation",
            bankAccount,
        });
    }
    catch (error) {
        return res.status(500).send({
            status: "Error",
            message: "User not found",
        });
    }
}));
exports.BankAccountInfoRouter.delete("/:bankAccount", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bankAccountInfoId = req.params.bankAccount;
        const deletebankAccountInfoId = yield (0, BankAccountInfo_repo_1.deleteBankAccountInfo)(bankAccountInfoId);
        if (!deletebankAccountInfoId) {
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
