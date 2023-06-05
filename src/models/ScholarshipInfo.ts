import {
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";

class ScholarshipInfo extends Model<
  InferAttributes<ScholarshipInfo>,
  InferCreationAttributes<ScholarshipInfo>
> {
  declare id: CreationOptional<number>;
  declare level: string;
  declare kind: string;
  declare period: number;
  declare user_id: CreationOptional<number>;
}

export const setupScholarshipInfo = (sequelize: Sequelize) => {
  ScholarshipInfo.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      level: DataTypes.STRING,
      kind: DataTypes.STRING,
      period: DataTypes.INTEGER.UNSIGNED,
      user_id: DataTypes.INTEGER.UNSIGNED,
    },
    {
      sequelize,
      modelName: "ScholarshipInfo",
    }
  );
};

export default ScholarshipInfo;
