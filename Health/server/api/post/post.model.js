'use strict';

export default function (sequelize, DataTypes) {
  return sequelize.define('Post', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    content: DataTypes.STRING,
    author: DataTypes.STRING,
    category: DataTypes.STRING,
    createDate: DataTypes.STRING,
    publishedDate: DataTypes.STRING,
    status: DataTypes.INTEGER, // 1 草稿，2 发布，3删除
  });
}
