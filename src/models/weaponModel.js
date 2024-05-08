import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";


const weaponModel = sequelize.define("Weapon",
    {
        Weapon_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        Name: {
            type:DataTypes.STRING(45),
            allowNull:false
        },
        Damage: {
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Category: {
            type:DataTypes.STRING(45),
            allowNull:false
        },
        Accuracy: {
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Race_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
    }
)


export default weaponModel;