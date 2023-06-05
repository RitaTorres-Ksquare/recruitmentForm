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
exports.startDB = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const PersonalInfo_1 = require("../models/PersonalInfo");
const User_1 = require("../models/User");
const Addres_1 = require("../models/Addres");
const AddresExtraInfo_1 = require("../models/AddresExtraInfo");
const GovermentInfo_1 = require("../models/GovermentInfo");
const Profile_1 = require("../models/Profile");
const AcademicInfo_1 = require("../models/AcademicInfo");
const FormalEducationInfo_1 = require("../models/FormalEducationInfo");
const ScholarshipInfo_1 = require("../models/ScholarshipInfo");
const BankAccountInfo_1 = require("../models/BankAccountInfo");
const Skills_1 = require("../models/Skills");
exports.sequelize = new sequelize_1.Sequelize("postgres://postgres:titi2134@localhost:5432/Form");
const startDB = (url) => __awaiter(void 0, void 0, void 0, function* () {
    //sequelize = new Sequelize(url);
    (0, PersonalInfo_1.setupPersonalInfo)(exports.sequelize);
    (0, User_1.setupUser)(exports.sequelize);
    (0, Addres_1.setupAddress)(exports.sequelize);
    (0, AddresExtraInfo_1.setupAddressExtraInfo)(exports.sequelize);
    (0, GovermentInfo_1.setupGovermentInfo)(exports.sequelize);
    (0, Profile_1.setupProfile)(exports.sequelize);
    (0, AcademicInfo_1.setupAcademicInfo)(exports.sequelize);
    (0, FormalEducationInfo_1.setupFormalEducation)(exports.sequelize);
    (0, ScholarshipInfo_1.setupScholarshipInfo)(exports.sequelize);
    (0, BankAccountInfo_1.setupBankInfo)(exports.sequelize);
    (0, Skills_1.setupSkills)(exports.sequelize);
    exports.sequelize.authenticate();
    return exports.sequelize;
});
exports.startDB = startDB;
