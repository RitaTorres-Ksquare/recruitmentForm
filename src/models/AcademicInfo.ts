import {
    Model,
    Sequelize,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
  } from "sequelize";
  
  class AcademicInfo extends Model<
    InferAttributes<AcademicInfo>,
    InferCreationAttributes<AcademicInfo>
  > {
    declare id: CreationOptional<number>;
    declare software_devel_comments:string;
    declare degree_level:string;
    declare informal_education:string;
    declare other_education:string;
    declare user_id: CreationOptional<number>;
  }
  export const setupAcademicInfo = (sequelize:Sequelize) =>{
    AcademicInfo.init(
      {
          id:{
              type:DataTypes.INTEGER.UNSIGNED,
              autoIncrement: true,
              primaryKey: true,
          },
          software_devel_comments: DataTypes.STRING,
          degree_level:DataTypes.STRING,
          informal_education:DataTypes.STRING,
          other_education:DataTypes.STRING,
          user_id:DataTypes.INTEGER.UNSIGNED
  
      },
      {
          sequelize,
          modelName: "AcademicInfo",
        }
      );
  }
  
  export default AcademicInfo;