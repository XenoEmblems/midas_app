var application_root = __dirname,
    express          = require('express'),
    bodyParser       = require('body-parser'),
    path             = require('path'),
    logger           = require('morgan'),
    models           = require('./models'),
    sequelize        = require('sequelize'),
    JobPost          = models.job_posts,
    Employer         = models.employers,
    Position         = models.positions,
    feeds            = require('./feeds');  //feedGetter.craigslist


var app = express();



// Populates database on server start
feeds.getMuse();
feeds.getIndeed();
//feeds.getCraigs(); //switched off for Heroku

// Adds to database every 2 hours
var timedMuse    = setInterval(function(){feeds.getMuse()}, 7190000);
var timedIndeed = setInterval(function(){feeds.getIndeed()}, 7180000);
//var timedCraigs = setInterval(function(){feeds.getCraigs()}, 7200000);





// Server Configuration
app.use(logger('dev'));
app.use( bodyParser() );
app.use( express.static( path.join( application_root, 'public' )));
app.use( express.static( path.join( application_root, 'browser' )));

//process.env.GLASSDOOR_KEY; wherever an API key is needed


// Routes


//Query Route  -- Used for specific scoped queries 
app.get('/job_posts/query', function (req,res) {
  var queryParams = '%' + req.query.q + '%';
  console.log(queryParams);
    JobPost
    .findAll({
      limit: 500,
      order: [['id', 'DESC']],
      where: {
        post_content: {
          $or: [
          {$like: queryParams}
        ]}
      }
    }).then(function(jobposts) {
      res.send(jobposts);
    });
});

//Searches the title
app.get('/job_posts/title_query', function (req,res) {
  var queryParams = '%' + req.query.q + '%';
  console.log(queryParams);
    JobPost
    .findAll({
      limit: 500,
      order: [['id', 'DESC']],
      where: {
        job_title: {
          $or: [
          {$like: queryParams}
        ]}
      }
    }).then(function(jobposts) {
      res.send(jobposts);
    });
});



//Get all the Jobs - Limited to 700 & LIFO sorted
app.get('/job_posts', function(req, res) {
  JobPost
    .findAll({limit: 700, order: [['id', 'DESC']]})
    .then(function(jobposts) {
      res.send(jobposts);
    });

});

//Read the Jobs
app.get('/job_posts/:id', function(req, res) {
  JobPost
    .findOne({
      where: { id: req.params.id },
      include: [
      { model: Employer },
      { model: Position },      //questionable comma
    ]})
      .then(function(jobpost) {
        res.send(jobpost);
       });
});

//Create the Jobs
app.post('/job_posts', function(req, res) {
  JobPost
    .create(req.body)
    .then(function(newPost) {
      res.send(newPost);
    });
});

//create craigslist jobs after checking for uniqueness
app.post('/craigs', function(req, res) {
  if (!req.body.post_url){
    console.log("no post_url, can't continue")
  } else {
    JobPost
    .count({
      where: {post_url: req.body.post_url}
    }).then(function(count){
      if (!count){
        JobPost.create(req.body);
      }
    })
  }
});


//Update the Jobs
app.put('/job_posts/:id', function(req, res) {
  JobPost
    .findOne({
      where: { id: req.params.id },
      include: [
      { model: Employer },
      { model: Position },      //questionable comma 2
    ]})
      .then(function(jobpost) {
        jobpost
          .update(req.body)
          .then(function(updatedPost){
          res.send(updatedPost);
      });
    });
});

//Delete the Jobs
app.delete('/job_posts/:id', function(req, res) {
  JobPost
    .findOne(req.params.id)
    .then(function(jobpost) {
      jobpost
        .destroy()
        .then(function() {
          res.send(jobpost)
        });
    });
});


//live query for employers (not in our db)
app.get('/employer_info', function(req, res) {
  var employerName = req.query.name;
  feeds.getEmployer(employerName, function (err, result) {
    if (err) {
      res.send("error: ", err)
    } else if (result) {
      res.send(result);
    }
  });
});


//Get the Employers
app.get('/employers', function(req, res) {
  Employer
    .findAll()
    .then(function(employers) {
      res.send(employers);
    });
});

//Read the Employers
app.get('/employers/:id', function(req, res) {
  Employer
    .findAll()
    .then(function(employers) {
      res.send(employers)
    });
});

//Create the Employer
app.post('/job_posts/:id/employers', function(req, res) {
  JobPost
    .findOne(req.params.id)
    .then(function(jobpost){
      Employer
        .create(req.body)
        .then(function(newEmployer) {
          employer
            .addEmployer(newEmployer)
            .then(function(employer) {
              res.send(employer)
            });
        });
    });
});

//Update the Employer
app.put('/employers/:id', function(req, res) {
  Employer
    .findOne({
      where: { id: req.params.id }
    })
    .then(function(employer) {
        employer
          .update(req.body)
          .then(function(updatedEmployer) {
            res.send(updatedEmployer)
        });
    });
});

//Delete the Employer

app.delete('/employers/:id', function(req, res) {
  Employer
    .findOne(req.params.id)
    .then(function(employer) {
      employer
        .destroy()
        .then(function() {
          res.send(employer);
        });
    });
});

//live query for employers (not in our db)
app.get('/position_info', function(req, res) {
  var positionName = req.query.name;
  feeds.getPosition(positionName, function (err, result) {
    if (err) {
      res.send("error: ", err)
    } else if (result) {
      res.send(result);
    }
  });
});

//Get All the Positions

app.get('/positions', function(req, res) {
  Position
    .findAll()
    .then(function(positions) {
      res.send(positions);
    });
});

//Read the Positions

app.get('/positions/:id', function(req, res) {
  Position
    .findOne(req.params.id)
    .then(function(position) {
      res.send(position);
    });
});

//Create the Positions

app.post('/job_posts/:id/positions', function(req, res) {
  JobPost
    .findOne(req.params.id)
    .then(function(jobpost){
      Position
        .create(req.body)
        .then(function(newPosition) {
          position
            .addPosition(newPosition)
            .then(function(position) {
              res.send(position)
            });
        });
    });
});

//Update the Positions

app.put('/positions/:id', function(req, res) {
  Position
    .findOne(req.params.id)
    .then(function(position) {
      position
        .update(req.body)
        .then(function(updatedPosition) {
          res.send(updatedPosition)
        });
    });
});

//Delete the Positions
app.delete('/positions/:id', function(req, res) {
  Position
    .findOne(req.params.id)
    .then(function(position) {
      position
        .destroy()
        .then(function() {
          res.send(position);
        });
    });
});






// Export app as module
module.exports = app;
