"use strict";
module.exports = function(sequelize, DataTypes) {
  var employers = sequelize.define("employers", {
    company_name: DataTypes.STRING,
    company_url: DataTypes.STRING,
    company_logo: DataTypes.STRING,
    glassdoor_id: DataTypes.INTEGER,
    glassdoor_rating: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return employers;
};