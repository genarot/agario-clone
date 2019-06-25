// All things express
const app = require('../server').app;


app.use( (res,req) => {
    res.status(404)
        .send('<h1>Page not found</h1>')
});
console.log('expressMain');

module.exports = app;
