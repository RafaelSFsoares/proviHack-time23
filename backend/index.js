const express = require ('express');

const app = express()
const port = 3000;

// routes(app)


app.listen(port, () => console.log(`Listening ${port}`));


module.exports = app;