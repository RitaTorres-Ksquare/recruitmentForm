"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupGovermentInfo = void 0;
const sequelize_1 = require("sequelize");
class GovermentInfo extends sequelize_1.Model {
}
const setupGovermentInfo = (sequelize) => {
    GovermentInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        CURP: sequelize_1.DataTypes.STRING,
        identification_number: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.STRING,
    }, {
        sequelize,
        modelName: "GovermentInfo",
    });
};
exports.setupGovermentInfo = setupGovermentInfo;
exports.default = GovermentInfo;
