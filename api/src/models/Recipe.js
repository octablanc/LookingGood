const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    Id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    dish_summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    health_score: {
      type: DataTypes.INTEGER
    },

    image: {
      type: DataTypes.STRING(300)
    }
    // Steps will be a new table
  });
};