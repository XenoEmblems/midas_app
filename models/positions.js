"use strict";
module.exports = function(sequelize, DataTypes) {
  var positions = sequelize.define("positions", {
    name: DataTypes.STRING,
    pay_low: DataTypes.INTEGER,
    pay_median: DataTypes.INTEGER,
    pay_high: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
       positions.hasMany(models.job_posts, {
        foreignKey: 'position_id'
       });
      }
    }
  });
  return positions;
};