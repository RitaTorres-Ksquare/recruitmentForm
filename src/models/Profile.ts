import {
  Model,
  Sequelize,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";

class Profile extends Model<
  InferAttributes<Profile>,
  InferCreationAttributes<Profile>
> {
  declare id: CreationOptional<number>;
  declare phone: string;
  declare country_code: string;
  declare email: string;
  declare alt_email: string;
  declare reference: string;
  declare other_reference: string;
  declare user_id: CreationOptional<number>;
}
export const setupProfile = (sequelize:Sequelize) =>{
  Profile.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      phone: DataTypes.STRING,
      country_code: DataTypes.STRING,
      email: DataTypes.STRING,
      alt_email: DataTypes.STRING,
      reference: DataTypes.STRING,
      other_reference: DataTypes.STRING,
      user_id: DataTypes.INTEGER.UNSIGNED,
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
}

export default Profile;