import {
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";

class GovermentInfo extends Model<
  InferAttributes<GovermentInfo>,
  InferCreationAttributes<GovermentInfo>
> {
  declare id: CreationOptional<number>;
  declare CURP: string;
  declare identification_number: string;
  declare user_id: CreationOptional<number>;
}

export const setupGovermentInfo = (sequelize: Sequelize) => {
  GovermentInfo.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      CURP: DataTypes.STRING,
      identification_number: DataTypes.STRING,
      user_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "GovermentInfo",
    }
  );
};

export default GovermentInfo;
