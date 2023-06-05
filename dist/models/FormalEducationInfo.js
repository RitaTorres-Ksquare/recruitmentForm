"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupFormalEducation = void 0;
const sequelize_1 = require("sequelize");
class FormalEducationInfo extends sequelize_1.Model {
}
const setupFormalEducation = (sequelize) => {
    FormalEducationInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        university_name: sequelize_1.DataTypes.STRING,
        state: sequelize_1.DataTypes.STRING,
        country: sequelize_1.DataTypes.STRING,
        career_name: sequelize_1.DataTypes.STRING,
        classes_completed: sequelize_1.DataTypes.BOOLEAN,
        proof_classes_completed: sequelize_1.DataTypes.STRING,
        degree_completed: sequelize_1.DataTypes.BOOLEAN,
        proof_degree_completed: sequelize_1.DataTypes.STRING,
        license_completed: sequelize_1.DataTypes.BOOLEAN,
        proof_license_completed: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    }, {
        sequelize,
        modelName: "FormalEducationInfo",
    });
};
exports.setupFormalEducation = setupFormalEducation;
exports.default = FormalEducationInfo;
