"use strict";
module.exports = function(sequelize, DataTypes) {
  var job_posts = sequelize.define('job_posts', {
      job_title: DataTypes.STRING,
      position: DataTypes.STRING,
      post_url: DataTypes.STRING,
      post_content: DataTypes.TEXT,
      job_ID: DataTypes.INTEGER,
      employer_name: DataTypes.STRING,
      salary: DataTypes.STRING,
      date_posted: DataTypes.STRING,
      date_created: DataTypes.STRING,
      post_id: DataTypes.INTEGER,
      location: DataTypes.STRING,
      is_entry: DataTypes.BOOLEAN,
      employer_id: DataTypes.INTEGER,
}, {

  timestamps: true,

  classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return job_posts;
};
