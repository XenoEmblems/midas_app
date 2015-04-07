"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
   	migration.changeColumn(
  	'job_posts',
  	'post_url',
  	DataTypes.TEXT
	)// add altering commands here, calling 'done' when finished
    done();
  },

  down: function(migration, DataTypes, done) {
  	migration.changeColumn(
  	'job_posts',
  	'post_url',
  	DataTypes.STRING
)
    // add reverting commands here, calling 'done' when finished
    done();
  }
};
