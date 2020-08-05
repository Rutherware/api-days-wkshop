const express = require('express');
require('dotenv').config();
const app = express();
const port = 3010;
const request = require('request');
const truliooApiKey = ""; // YOUR API KEY
const truliooMiddleware = require('trulioo-embedid-middleware')({
  apiKey: truliooApiKey
});

app.use(truliooMiddleware);
app.listen(port, () => console.log(`The EmbedID Server is ready. Copy the server URL above.`));
