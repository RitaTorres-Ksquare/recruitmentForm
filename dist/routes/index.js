"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PersonalInfo_router_1 = require("./PersonalInfo.router");
const User_router_1 = require("./User.router");
const Address_router_1 = require("./Address.router");
const AddressExtraInfo_router_1 = require("./AddressExtraInfo.router");
const GovermentInfo_router_1 = require("./GovermentInfo.router");
const Profile_router_1 = require("./Profile.router");
const AcademicInfo_router_1 = require("./AcademicInfo.router");
const FormalEducationInfo_router_1 = require("./FormalEducationInfo.router");
const ScholarshipInfo_router_1 = require("./ScholarshipInfo.router");
const BankAccountInfo_router_1 = require("./BankAccountInfo.router");
const Skills_router_1 = require("./Skills.router");
const APIRouter = (0, express_1.Router)();
APIRouter.use("/personalInfo", PersonalInfo_router_1.PersonalInfoRouter);
APIRouter.use("/user", User_router_1.UserRouter);
APIRouter.use("/address", Address_router_1.AddressRouter);
APIRouter.use("/addressExtraInfo", AddressExtraInfo_router_1.AddresExtraInfoRouter);
APIRouter.use("/govermentInfo", GovermentInfo_router_1.GovermentInfoRouter);
APIRouter.use("/profile", Profile_router_1.ProfileRouter);
APIRouter.use("/academicInfo", AcademicInfo_router_1.AcademicInfoRouter);
APIRouter.use("/formalEducationInfo", FormalEducationInfo_router_1.FormalEducationInfoRouter);
APIRouter.use("/scholarshipInfo", ScholarshipInfo_router_1.ScholarshipInfoRouter);
APIRouter.use("/bankAccount", BankAccountInfo_router_1.BankAccountInfoRouter);
APIRouter.use("/skillsInfo", Skills_router_1.SkillsRouter);
exports.default = APIRouter;
