"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupProfile = void 0;
const sequelize_1 = require("sequelize");
class Profile extends sequelize_1.Model {
}
const setupProfile = (sequelize) => {
    Profile.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        phone: sequelize_1.DataTypes.STRING,
        country_code: sequelize_1.DataTypes.STRING,
        email: sequelize_1.DataTypes.STRING,
        alt_email: sequelize_1.DataTypes.STRING,
        reference: sequelize_1.DataTypes.STRING,
        other_reference: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    }, {
        sequelize,
        modelName: "Profile",
    });
};
exports.setupProfile = setupProfile;
exports.default = Profile;
