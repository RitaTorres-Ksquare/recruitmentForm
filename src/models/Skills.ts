import {
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";

class Skills extends Model<
  InferAttributes<Skills>,
  InferCreationAttributes<Skills>
> {
  declare id: CreationOptional<number>;
  declare preferred_programming_language: string;
  declare experience: string;
  declare disability: string;
  declare user_id: CreationOptional<number>;
}

export const setupSkills = (sequelize: Sequelize) => {
  Skills.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      preferred_programming_language: DataTypes.STRING,
      experience: DataTypes.STRING,
      disability: DataTypes.STRING,
      user_id: DataTypes.INTEGER.UNSIGNED,
    },
    {
      sequelize,
      modelName: "Skill",
    }
  );
};

export default Skills;
