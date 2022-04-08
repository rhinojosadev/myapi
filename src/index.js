const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const myapiRouter = require('./routers/myapi');

app.use(express.json());
app.use(myapiRouter);

app.listen(port, () => {
    console.log('\x1b[32m%s\x1b[0m', 'Server is up on port ' + port);
})