import dbConfig from '../../config/serverConfig.js';
import { DataTypes } from 'sequelize';

const Result = dbConfig.server.define('Results', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  link: {
    type: DataTypes.TEXT, 
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Result.prototype.setWebsiteTarget = async function(websiteTarget) {
  this.websiteTargetId = websiteTarget.id;
  await this.save();
};

Result.prototype.addResultKeyword = async function(resultKeyword) {
  this.resultKeywordId = resultKeyword.id;
  await this.save();
};
export default Result;
