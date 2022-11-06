const { DataTypes } = require('sequelize');

module.exports = (Sequelize)=> {
    Sequelize.define('step', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        step: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    })
}