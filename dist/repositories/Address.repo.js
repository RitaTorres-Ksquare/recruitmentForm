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
exports.deleteAddress = exports.updateAddress = exports.readAddress = exports.createAddress = void 0;
const Addres_1 = __importDefault(require("../models/Addres"));
const createAddress = ({ street, in_between_street_a, in_between_street_b, city, state, country, zip, proof_of_address, user_id, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [responses, created] = yield Addres_1.default.findOrCreate({
            where: { user_id: user_id },
            defaults: {
                street,
                in_between_street_a,
                in_between_street_b,
                city,
                state,
                country,
                zip,
                proof_of_address,
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
exports.createAddress = createAddress;
const readAddress = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield Addres_1.default.findOne({
            where: { user_id: user_id },
        });
        return response;
    }
    catch (error) {
        return null;
    }
});
exports.readAddress = readAddress;
const updateAddress = ({ street, in_between_street_a, in_between_street_b, city, state, country, zip, proof_of_address, user_id, }, actualId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [affectedCount] = yield Addres_1.default.update({
            street,
            in_between_street_a,
            in_between_street_b,
            city,
            state,
            country,
            zip,
            proof_of_address,
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
exports.updateAddress = updateAddress;
const deleteAddress = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield Addres_1.default.destroy({
            where: { user_id: user_id },
        });
        return response;
    }
    catch (error) {
        return null;
    }
});
exports.deleteAddress = deleteAddress;
