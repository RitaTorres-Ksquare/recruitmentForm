"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupUser = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
const setupUser = (sequelize) => {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        username: sequelize_1.DataTypes.STRING,
        firstName: sequelize_1.DataTypes.STRING,
        lastName: sequelize_1.DataTypes.STRING,
        email: sequelize_1.DataTypes.STRING,
        phone: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER.UNSIGNED, //llave foranea
    }, {
        sequelize,
        modelName: "User",
    });
};
exports.setupUser = setupUser;
exports.default = User;
