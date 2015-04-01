var application_root = __dirname,
    express          = require('express'),
    bodyParser       = require('body-parser'),
    path             = require('path'),
    logger           = require('morgan'),
    models           = require('./models'),
    Jobpost          = models.job_posts,
    Employer         = models.employers,
    Position         = models.positions;


var app = express();

// Server Configuration
app.use(logger('dev'));
app.use( bodyParser() );
app.use( express.static( path.join( application_root, 'public' )));
app.use( express.static( path.join( application_root, 'browser' )));

//process.env.GLASSDOOR_KEY; wherever an API key is needed


// Routes
//Get all the Jobs
app.get('/job_posts', function(req, res) {
  Jobpost
    .findAll()
    .then(function(jobposts) {
      res.send(jobposts);
    });

});
//Read the Jobs
app.get('/job_posts/:id', function(req, res) {
  Jobpost
    .findOne({
      where: { id: req.params.id },
      include: [
      { model: Employer },
      { model: Position },
      ]
      .then(function(jobpost) {
        res.send(jobpost);
       })
    });
});

//Create the Jobs
app.post('/job_posts', function(req, res) {
  Jobpost
    .create(req.body)
    .then(function(newPost) {
      res.send(newPost);
    });
});

//Update the Jobs
app.put('/job_posts/:id', function(req, res) {
  Jobpost
    .findOne({
      where: { id: req.params.id },
      include: [
      { model: Employer },
      { model: Position },
      ]
      .then(function(jobpost) {
        res.send(jobpost);
      })
    });
});

//Delete the Jobs
app.delete('/job_posts/:id', function(req, res) {
  Jobpost
    .findOne(req.params.id)
    .then(function(jobpost) {
      jobpost
        .destroy()
        .then(function() {
          res.send(jobpost)
        });
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
  Jobpost
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
  Jobpost
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
