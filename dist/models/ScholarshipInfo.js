"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupScholarshipInfo = void 0;
const sequelize_1 = require("sequelize");
class ScholarshipInfo extends sequelize_1.Model {
}
const setupScholarshipInfo = (sequelize) => {
    ScholarshipInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        level: sequelize_1.DataTypes.STRING,
        kind: sequelize_1.DataTypes.STRING,
        period: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        user_id: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    }, {
        sequelize,
        modelName: "ScholarshipInfo",
    });
};
exports.setupScholarshipInfo = setupScholarshipInfo;
exports.default = ScholarshipInfo;
