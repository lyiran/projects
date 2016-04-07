'use strict';

export default function (sequelize, DataTypes) {
  return sequelize.define('Category', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    createDate: DataTypes.STRING,
    status: DataTypes.INTEGER, // 1 正常，2 停用，3 删除
  });
}
