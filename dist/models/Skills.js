"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSkills = void 0;
const sequelize_1 = require("sequelize");
class Skills extends sequelize_1.Model {
}
const setupSkills = (sequelize) => {
    Skills.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        preferred_programming_language: sequelize_1.DataTypes.STRING,
        experience: sequelize_1.DataTypes.STRING,
        disability: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    }, {
        sequelize,
        modelName: "Skill",
    });
};
exports.setupSkills = setupSkills;
exports.default = Skills;
