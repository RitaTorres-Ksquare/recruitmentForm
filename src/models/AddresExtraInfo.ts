import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
    Sequelize
  } from "sequelize";

  class AddresExtraInfo extends Model<
  InferAttributes<AddresExtraInfo>,
  InferCreationAttributes<AddresExtraInfo>
> {
  declare id: CreationOptional<number>;
  declare type_of_residency:string;
  declare people:string;
  declare address_id:number;
}

export const setupAddressExtraInfo= (sequelize:Sequelize)=>{
    AddresExtraInfo.init({
        id:{
            type:DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        type_of_residency:DataTypes.STRING,
        people:DataTypes.STRING,
        address_id:DataTypes.INTEGER,
    },
    {sequelize,
    modelName: "AddresExtraInfo",}
    )
}

export default AddresExtraInfo;