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
exports.deleteScholarshipInfo = exports.updateScholarshipInfo = exports.readScholarshipInfo = exports.createScholarshipInfo = void 0;
const ScholarshipInfo_1 = __importDefault(require("../models/ScholarshipInfo"));
const createScholarshipInfo = ({ level, kind, period, user_id, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [responses, created] = yield ScholarshipInfo_1.default.findOrCreate({
            where: { user_id: user_id },
            defaults: {
                level,
                kind,
                period,
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
exports.createScholarshipInfo = createScholarshipInfo;
const readScholarshipInfo = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield ScholarshipInfo_1.default.findOne({
            where: { user_id: user_id },
        });
        return response;
    }
    catch (error) {
        return null;
    }
});
exports.readScholarshipInfo = readScholarshipInfo;
const updateScholarshipInfo = ({ level, kind, period, user_id }, actualId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [affectedCount] = yield ScholarshipInfo_1.default.update({
            level,
            kind,
            period,
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
exports.updateScholarshipInfo = updateScholarshipInfo;
const deleteScholarshipInfo = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield ScholarshipInfo_1.default.destroy({
            where: { user_id: user_id },
        });
        return response;
    }
    catch (error) {
        return null;
    }
});
exports.deleteScholarshipInfo = deleteScholarshipInfo;
