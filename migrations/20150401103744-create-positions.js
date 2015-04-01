"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("positions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      pay_low: {
        type: DataTypes.INTEGER
      },
      pay_median: {
        type: DataTypes.INTEGER
      },
      pay_high: {
        type: DataTypes.INTEGER
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
    migration.dropTable("positions").done(done);
  }
};