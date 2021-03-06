'use strict';

var Sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    const Profiles = sequelize.define('Profiles', {
        profilesID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userID : {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'userID'
            }
        },
        age: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        interest: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        social_media:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
        {
            freezeTableName: true,
        });

    return Profiles;
}; 