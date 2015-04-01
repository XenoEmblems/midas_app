"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("job_posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      job_title: {
        type: DataTypes.STRING
      },
      position_id: {
        type: DataTypes.INTEGER
      },
      post_url: {
        type: DataTypes.STRING
      },
      post_content: {
        type: DataTypes.TEXT
      },
      job_ID: {
        type: DataTypes.STRING
      },
      employer_name: {
        type: DataTypes.STRING
      },
      salary: {
        type: DataTypes.STRING
      },
      date_posted: {
        type: DataTypes.STRING
      },
      date_created: {
        type: DataTypes.STRING
      },
      post_id: {
        type: DataTypes.INTEGER
      },
      location: {
        type: DataTypes.STRING
      },
      is_entry: {
        type: DataTypes.BOOLEAN
      },
      level: {
        type: DataTypes.STRING
      },
      employer_id: {
        type: DataTypes.INTEGER
      }
    }).done(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable("job_posts").done(done)
  }
};
