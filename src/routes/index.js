const loginRoute = require('./login');
const siteRoute = require('./site');
const coursesRoute = require('./courses');

function route(app) {
    app.use('/login', loginRoute);
    app.use('/', siteRoute);
    app.use('/courses', coursesRoute);
}

module.exports = route;
