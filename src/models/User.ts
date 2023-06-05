import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Sequelize,
} from "sequelize";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare phone: string;
  declare user_id: CreationOptional<number>;
}

export const setupUser = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      username: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      user_id: DataTypes.INTEGER.UNSIGNED, //llave foranea
    },
    {
      sequelize,
      modelName: "User",
    }
  );
};

export default User;
