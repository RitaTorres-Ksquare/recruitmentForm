import {
  Model,
  Optional,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";
import { sequelize } from "../deb";

class PersonalInfo extends Model<
  InferAttributes<PersonalInfo>,
  InferCreationAttributes<PersonalInfo>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare last_name: string;
  declare second_last_name: string;
  declare gender: CreationOptional<string>;
  declare gender_other: CreationOptional<string>;
  declare date_of_birth: string;
  declare city_of_birth: string;
  declare state_of_birth: string;
  declare country_of_birth: string;
  declare user_id: CreationOptional<number>;
}
export const setupPersonalInfo = (sequelize:Sequelize) =>{
  PersonalInfo.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      second_last_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      gender_other: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      city_of_birth: DataTypes.STRING,
      state_of_birth: DataTypes.STRING,
      country_of_birth: DataTypes.STRING,
      user_id: DataTypes.INTEGER.UNSIGNED,
    },
    {
      sequelize,
      modelName: "PersonalInfo",
    }
  );
}



export default PersonalInfo;
