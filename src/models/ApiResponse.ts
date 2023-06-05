import {
    Model,
    Optional,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
  } from "sequelize";
  import { sequelize } from "../deb";
  
  class ApiResponse extends Model<
    InferAttributes<ApiResponse>,
    InferCreationAttributes<ApiResponse>
  > {
    declare id: CreationOptional<number>;
    declare code: string;
    declare type: string;
    declare message: string;
    declare user_id: number;
  }
  if (sequelize) {
    ApiResponse.init(
      {
          id:{
              type:DataTypes.INTEGER.UNSIGNED,
              autoIncrement: true,
              primaryKey: true,
          },
          code: DataTypes.STRING,
          type: DataTypes.STRING,
          message:DataTypes.STRING,
          user_id:DataTypes.INTEGER.UNSIGNED
  
      },
      {
          sequelize,
          modelName: "ApiResponse",
        }
      );
  }
  
  export default ApiResponse;