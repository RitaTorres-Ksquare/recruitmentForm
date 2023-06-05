"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAcademicInfo = void 0;
const sequelize_1 = require("sequelize");
class AcademicInfo extends sequelize_1.Model {
}
const setupAcademicInfo = (sequelize) => {
    AcademicInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        software_devel_comments: sequelize_1.DataTypes.STRING,
        degree_level: sequelize_1.DataTypes.STRING,
        informal_education: sequelize_1.DataTypes.STRING,
        other_education: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER.UNSIGNED
    }, {
        sequelize,
        modelName: "AcademicInfo",
    });
};
exports.setupAcademicInfo = setupAcademicInfo;
exports.default = AcademicInfo;
