Cobbled together idea for logging `architecture`. Too big for a gist.

What are these files supposed to be?

* `userService.js` - An example service from one of our apps, could equally be middleware/services/utility functions.
* `reporter.js` - Essentially this replaces logger.js as the `one thing` that services/middleware need to pull in to handle all the monitoring
* `reporters/*` - The reporters for each of the things we report on.
* `reporters/cloudWatchReporter.js` - pushes to cloudwatch via some cloudwatch client module
* `reporters/dataDogReporter.js` - pushes to dataDog via some dataDog client module
* `reporters/logReporter.js` - writes to log via winston/bunyan/other

Pros:
* If we change logger lib (from winston to bunyan for example) we only need to change things in the one file: logReporter
* services/middleware only need to pull one file in to handle all logging/metrics/etc.
* Its patterny
