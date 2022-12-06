import { Sequelize, DataTypes } from "sequelize";
import { database } from "../configs/db.config.js";

export const User = database.define("User", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  steamid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profileurl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  openid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
