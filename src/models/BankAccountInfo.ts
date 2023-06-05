import {
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";

class BankAccountInfo extends Model<
  InferAttributes<BankAccountInfo>,
  InferCreationAttributes<BankAccountInfo>
> {
  declare id: CreationOptional<number>;
  declare acc_number: number;
  declare clabe: number;
  declare bank: string;
  declare user_id: CreationOptional<number>;
}
export const setupBankInfo = (sequelize: Sequelize) => {
  BankAccountInfo.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      acc_number: DataTypes.INTEGER.UNSIGNED,
      clabe: DataTypes.INTEGER.UNSIGNED,
      bank: DataTypes.STRING,
      user_id: DataTypes.INTEGER.UNSIGNED,
    },
    {
      sequelize,
      modelName: "BankAccountInfo",
    }
  );
};

export default BankAccountInfo;
