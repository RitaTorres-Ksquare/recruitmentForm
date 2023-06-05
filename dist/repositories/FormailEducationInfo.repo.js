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
exports.delateFormalEducationInfo = exports.updateFormalEducationInfo = exports.readFormalEducationInfo = exports.createFormalEducationInfo = void 0;
const FormalEducationInfo_1 = __importDefault(require("../models/FormalEducationInfo"));
const createFormalEducationInfo = ({ university_name, state, country, career_name, classes_completed, proof_classes_completed, degree_completed, proof_degree_completed, license_completed, proof_license_completed, user_id, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [responses, created] = yield FormalEducationInfo_1.default.findOrCreate({
            where: { user_id: user_id },
            defaults: {
                university_name,
                state,
                country,
                career_name,
                classes_completed,
                proof_classes_completed,
                degree_completed,
                proof_degree_completed,
                license_completed,
                proof_license_completed,
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
exports.createFormalEducationInfo = createFormalEducationInfo;
const readFormalEducationInfo = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield FormalEducationInfo_1.default.findOne({
            where: { user_id: user_id },
        });
        return response;
    }
    catch (error) {
        return null;
    }
});
exports.readFormalEducationInfo = readFormalEducationInfo;
const updateFormalEducationInfo = ({ university_name, state, country, career_name, classes_completed, proof_classes_completed, degree_completed, proof_degree_completed, license_completed, proof_license_completed, user_id, }, actualId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [affectedCount] = yield FormalEducationInfo_1.default.update({
            university_name,
            state,
            country,
            career_name,
            classes_completed,
            proof_classes_completed,
            degree_completed,
            proof_degree_completed,
            license_completed,
            proof_license_completed,
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
exports.updateFormalEducationInfo = updateFormalEducationInfo;
const delateFormalEducationInfo = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield FormalEducationInfo_1.default.destroy({
            where: { user_id: user_id },
        });
        return response;
    }
    catch (error) {
        return null;
    }
});
exports.delateFormalEducationInfo = delateFormalEducationInfo;
