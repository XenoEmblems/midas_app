"use strict";
module.exports = function(sequelize, DataTypes) {
  var jobPosts = sequelize.define('job_posts', {
      job_title: DataTypes.STRING,
      position_id: DataTypes.INTEGER,
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
      level: DataTypes.STRING,
      employer_id: DataTypes.INTEGER
}, {

  timestamps: true,

  classMethods: {
      associate: function(models) {
      jobPosts.belongsTo(models.positions, { foreignKey: 'position_id' });
      jobPosts.belongsTo(models.employers, { foreignKey: 'employer_id' });
    }
  }
});
  return jobPosts;
};
