"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAddressExtraInfo = void 0;
const sequelize_1 = require("sequelize");
class AddresExtraInfo extends sequelize_1.Model {
}
const setupAddressExtraInfo = (sequelize) => {
    AddresExtraInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        type_of_residency: sequelize_1.DataTypes.STRING,
        people: sequelize_1.DataTypes.STRING,
        address_id: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.STRING
    }, { sequelize,
        modelName: "AddresExtraInfo", });
};
exports.setupAddressExtraInfo = setupAddressExtraInfo;
exports.default = AddresExtraInfo;
