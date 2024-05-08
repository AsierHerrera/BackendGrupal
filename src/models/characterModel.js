import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

import weaponModel from "./weaponModel.js";
import mapModel from "./mapModel.js";
import raceModel from "./raceModel.js";


const characterModel = sequelize.define("Character",
    {
        Character_id:{
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        Name: {
            type:DataTypes.STRING(45),
            allowNull:false
        },
        Life_points: {
            type:DataTypes.INTEGER,
            //defaultValue:true,
            allowNull:false
        },
        Hostile:{
            type:DataTypes.TINYINT,
            allowNull:false,
        },
        Race_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        Map_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        Weapon_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
    }
)

characterModel.belongsTo(weaponModel,{as:"arma",foreignKey:"Weapon_id"});
weaponModel.hasMany(characterModel,{foreignKey:"Weapon_id"});
characterModel.belongsTo(mapModel,{as:"mapa",foreignKey:"Map_id"});
mapModel.hasMany(characterModel,{foreignKey:"Map_id"});
characterModel.belongsTo(raceModel,{as:"raza",foreignKey:"Race_id"});
raceModel.hasMany(characterModel,{foreignKey:"Race_id"});

export default characterModel;