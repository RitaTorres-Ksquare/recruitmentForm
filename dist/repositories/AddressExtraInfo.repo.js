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
exports.deleteAddressExtraInfo = exports.updateAddressExtraInfo = exports.readAddressExtraInfo = exports.createAddressExtraInfo = void 0;
const AddresExtraInfo_1 = __importDefault(require("../models/AddresExtraInfo"));
const createAddressExtraInfo = ({ type_of_residency, people, address_id, user_id, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [responses, created] = yield AddresExtraInfo_1.default.findOrCreate({
            where: { user_id: user_id },
            defaults: {
                type_of_residency,
                people,
                address_id,
                user_id,
            },
        });
        if (created) {
            return responses;
        }
        return null;
    }
    catch (error) {
        return null;
    }
});
exports.createAddressExtraInfo = createAddressExtraInfo;
const readAddressExtraInfo = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield AddresExtraInfo_1.default.findOne({
            where: { user_id: user_id },
        });
        return response;
    }
    catch (error) {
        return null;
    }
});
exports.readAddressExtraInfo = readAddressExtraInfo;
const updateAddressExtraInfo = ({ type_of_residency, people, address_id, user_id }, actualId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [affectedCount] = yield AddresExtraInfo_1.default.update({
            type_of_residency,
            people,
            address_id,
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
exports.updateAddressExtraInfo = updateAddressExtraInfo;
const deleteAddressExtraInfo = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield AddresExtraInfo_1.default.destroy({
            where: { user_id: user_id },
        });
        return response;
    }
    catch (error) {
        return null;
    }
});
exports.deleteAddressExtraInfo = deleteAddressExtraInfo;
