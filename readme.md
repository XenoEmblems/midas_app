Team: Midas
Product: Rozay_n_ur_Résumé
Team Members: Eric Doyle, Nicholas Butterworth, Will Barbee

url: http://midasjobs.herokuapp.com/
trello: https://trello.com/b/9hm79Lz3/team-midas


User Stories
-	As a user, I want an application that streamlines the job search experience for me. Did I mention that I'm a recent graduate of a Web Development Intensive entering the market as a junior developer in New York City?
-	As a user, I'd like access to aggregated data that makes me feel as though I have arrived at “one stop shop,” tailored specifically to my needs.
-	As a user, I would like these services delivered to me on a platform that is intuitive and enjoyable.

Dev stories
-	As a dev, I would like to learn to seamlessly incorporate data from multiple API’s, maximizing the quality and quantity of data available to me.
-	As a dev, I would like to learn how to “sift” through this data, extracting the essentials to be used as needed. I would like to limit these results to optimize the performance of my app.
-	As a dev, I would like learn to collaborate within a small team of other devs, working together to overcome the many challenges that one faces in this process.
-	As a dev, I would like to see an app through from its conception to production.
-	As a dev, I would like to increase my comfort and understanding in using Git and Heroku.
-	As a dev, I would like to become re-acquainted with Backbone.js and other client-side/front-end technologies that I learned earlier in the course.


API’s

The following APIs were utilized:

       ☻ Indeed (http://www.indeed.com/jsp/apiinfo.jsp)
       ☻ Glassdoor (http://www.glassdoor.com/api/index.htm)
       ☻ theMuse.com (https://www.themuse.com/developers - job-listing)
       ☻ Craigslist (RSS-formatted searches)

Limitations and utility of the APIs:
-	Glassdoor would only provide an API key upon proof of a certain volume of traffic--proof that Team Midas could not, at this time, provide.
-	Glassdoor DID provide employer rating and salary range data (low, median, high) that are displayed their individual modals as optional information for the user to peruse at their desire/convenience
-	theMuse.com, a site that was previously unknown to Team Midas, provided lofty stylistic goals and, secondarily, a solid chunk of user data with a very limited search criteria
-	Indeed's API provides developers with more thorough and more plentiful data in XML that was parsed into JSON and combined with what was previously-obtained to form a MONSTER mass of data
-	Craigslist does not offer an API, but does offer RSS feeds, which we were able to parse and transform into objects for our database. Craigslist unfortunately blocks RSS requests from Heroku and other AWS-hosted services, which eradicated use of that data (for beta v0.1.1)
-	Reinforced the importance of good documentation.

Walk-through

-	upon landing on the page, the user is prompted to input her first and last name
-	that input is then prepended to the top of the page, revealing a clean interface that has the appearance of a résumé
-	 in the ‘Job Opportunities’ section of the résumé, the user has the option to show all jobs available in the database at that time, or to search for 6 previously configured searches: javascript, ruby, git, node, backbone, and front-end
-	When the user is interested in additional information, clicking on an individual job posting will render the full job post view
-	If the user is intrigued to do so, there is the option to click on the employer or job title for information from Glassdoor on employer ratings and salary ranges, respectively

Technologies Used

Backbars - suite library to organize dependencies and generate some scaffolding for our project (ty McK!)
Backbone - used to organize front-end views and models
Express - used for routes
Request - used for API calls to populate database
xml2js - used to parse XML in API responses
Sequelize - ORM for Postgres
Require - managing dependencies including our own home-grown modules (/feeds)

Feed-related code is isolated via the use of Require. Feed-specific parsing of response data is further isolated in publisher-specific modules.  

While POST routes are provided, the bulk of data is loaded into the db on the server side.  Internal query responses are limited to 500 and simply sorted in LIFO order by ID. 

While has-many and belongs-to relations are defined in the app's models and migrations, associations between job posts and employer/position data are handled on-the-fly in client logic.

