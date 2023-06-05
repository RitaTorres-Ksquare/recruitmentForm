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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBankAccountInfo = exports.updateBankAccountInfo = exports.readBankAccountInfo = exports.createBankAccountInfo = void 0;
const BankAccountInfo_1 = __importDefault(require("../models/BankAccountInfo"));
const createBankAccountInfo = ({ acc_number, clabe, bank, user_id, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [responses, created] = yield BankAccountInfo_1.default.findOrCreate({
            where: { user_id: user_id },
            defaults: {
                acc_number,
                clabe,
                bank,
                user_id,
            },
        });
        console.log(created);
        if (created) {
            return responses;
        }
        return null;
    }
    catch (error) {
        return null;
    }
});
exports.createBankAccountInfo = createBankAccountInfo;
const readBankAccountInfo = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield BankAccountInfo_1.default.findOne({
            where: { user_id: user_id },
        });
        return response;
    }
    catch (error) {
        return null;
    }
});
exports.readBankAccountInfo = readBankAccountInfo;
const updateBankAccountInfo = ({ acc_number, clabe, bank, user_id }, actualId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [affectedCount] = yield BankAccountInfo_1.default.update({
            acc_number,
            clabe,
            bank,
            user_id,
        }, { where: { user_id: actualId } });
        if (affectedCount) {
            return affectedCount;
        }
        return null;
    }
    catch (error) {
        return null;
    }
});
exports.updateBankAccountInfo = updateBankAccountInfo;
const deleteBankAccountInfo = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield BankAccountInfo_1.default.destroy({
            where: { user_id: user_id },
        });
        return response;
    }
    catch (error) {
        return null;
    }
});
exports.deleteBankAccountInfo = deleteBankAccountInfo;
