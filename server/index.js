const express = require('express');
const request = require('request');


const app = express();
const PORT = process.env.PORT || 3000;
const DIST_PATH = path.join(__dirname, "../dist");

app.get('/api', (req, res) => {
  res.send("This is /api");
});

app.get('/listen', (req, res) => {
  res.sendFile(path.join(DIST_PATH, "index.html"));
});

app.post("/postToSpotify", (req, res) => {
  
  request.post("https://slack.com/api/chat.postMessage", payload, function(
    error,
    response,
    body
  ) {
    if (error) {
      console.log("error", error);
    }
    console.log("res", response);
  });
})

app.listen(PORT, function () {
 console.log('App listening on port: ' + PORT);
});