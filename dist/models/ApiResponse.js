"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const deb_1 = require("../deb");
class ApiResponse extends sequelize_1.Model {
}
if (deb_1.sequelize) {
    ApiResponse.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        code: sequelize_1.DataTypes.STRING,
        type: sequelize_1.DataTypes.STRING,
        message: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER.UNSIGNED
    }, {
        sequelize: deb_1.sequelize,
        modelName: "ApiResponse",
    });
}
exports.default = ApiResponse;
