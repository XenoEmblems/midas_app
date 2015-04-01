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
        DataTypes.STRING
      },
      position_id: {
        DataTypes.INTEGER
      },
      post_url: {
        DataTypes.STRING
      },
      post_content: {
        DataTypes.TEXT
      },
      job_ID: {
        DataTypes.STRING
      },
      employer_name: {
        DataTypes.STRING
      },
      salary: {
        DataTypes.STRING
      },
      date_posted: {
        DataTypes.STRING
      },
      date_created: {
        DataTypes.STRING
      },
      post_id: {
        DataTypes.INTEGER
      },
      location: {
        DataTypes.STRING
      },
      is_entry: {
        DataTypes.BOOLEAN
      },
      level: {
        DataTypes.STRING
      }
      employer_id: {
        DataTypes.INTEGER
      },
    }).done(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable("job_posts").done(done)
  }
};
