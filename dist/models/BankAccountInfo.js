"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupBankInfo = void 0;
const sequelize_1 = require("sequelize");
class BankAccountInfo extends sequelize_1.Model {
}
const setupBankInfo = (sequelize) => {
    BankAccountInfo.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        acc_number: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        clabe: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        bank: sequelize_1.DataTypes.STRING,
        user_id: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    }, {
        sequelize,
        modelName: "BankAccountInfo",
    });
};
exports.setupBankInfo = setupBankInfo;
exports.default = BankAccountInfo;
