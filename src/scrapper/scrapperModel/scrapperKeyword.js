import { DataTypes } from 'sequelize';
import dbConfig from '../../config/serverConfig.js';

const Keyword = dbConfig.server.define('Keyword', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  keyword: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  usedTimes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
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
export default Keyword;
