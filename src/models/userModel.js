import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

import characterModel from "./characterModel.js";

const userModel = sequelize.define("user",
    {
        User_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        Name: {
            type:DataTypes.STRING(45),
            allowNull:false
        },
        Is_Admin: {
            type:DataTypes.TINYINT,
            allowNull:false,
        },
        Email:{
            type:DataTypes.STRING(45),
            allowNull:false,
            primaryKey:true,
        },
        Password:{
            type:DataTypes.STRING(45),
            allowNull:false
        }
    }
)

userModel.belongsTo(characterModel,
    {
        through:"User_has_Character",
        as:"usuarios",
        foreignKey:"User_id"
    }
);
characterModel.hasMany(userModel,
    {
        through:"User_has_Character",
        as:"personjaes",
        foreignKey:"Character_id"
    }
);

export default userModel;