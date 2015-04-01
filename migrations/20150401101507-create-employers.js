"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("employers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      company_name: {
        type: DataTypes.STRING
      },
      company_url: {
        type: DataTypes.STRING
      },
      company_logo: {
        type: DataTypes.STRING
      },
      glassdoor_id: {
        type: DataTypes.INTEGER
      },
      glassdoor_rating: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("employers").done(done);
  }
};