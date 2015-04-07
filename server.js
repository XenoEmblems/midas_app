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



/*

  TEST FUNCTION TO FILL DATABASE
   un-comment "feeds.test()" below and it will check
   both craigslist and the muse when the server relaunches
                                  */

feeds.getMuse();
//feeds.getCraigs();
feeds.getIndeed();

var timedMuse    = setInterval(function(){feeds.getMuse()}, 7190000);
//var timedCraigs = setInterval(function(){feeds.getCraigs()}, 7200000);
var timedIndeed = setInterval(function(){feeds.getIndeed()}, 7180000);
// setInterval(feeds.test(),7200000);
// setInterval(feeds.testtwo(),400);



// Server Configuration
app.use(logger('dev'));
app.use( bodyParser() );
app.use( express.static( path.join( application_root, 'public' )));
app.use( express.static( path.join( application_root, 'browser' )));

//process.env.GLASSDOOR_KEY; wherever an API key is needed


// Routes

//Jobs Query Route

// app.get('/job_posts/query', function (req, res) {
//   JobPost
//   .query("SELECT * FROM job_posts WHERE post_content LIKE %node%", { type: JobPost.QueryTypes.SELECT})
//   .then(function(jobpost) {
//       res.send(jobpost);
//   });
// });

//Query Route
app.get('/job_posts/query', function (req,res) {
  var queryParams = '%' + req.query.q + '%';
  console.log(queryParams);
    JobPost
    .findAll({
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


//Get all the Jobs
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
