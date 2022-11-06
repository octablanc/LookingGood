const { DataTypes } = require('sequelize');

module.exports = (Sequelize)=> {
    Sequelize.define('diet_type', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        }
    },
    {
        timestamps: false
    });
}