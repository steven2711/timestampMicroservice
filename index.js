const express = require("express");

const PORT = 3000;

const app = express();

app.get("/api/timestamp/:dateString?", (req, res, next) => {
  // a colon designates a url param
  // add a question mark to make the url param optional
  const dateString = req.params.dateString;

  let date;

  // Check if dateString is empty

  if (!dateString) {
    date = new Date();
  } else {
    if (!isNaN(dateString)) {
      date = new Date(parseInt(dateString));
    } else {
      date = new Date(dateString);
    }
  }

  // Check if dateString is valid

  if (date.toString() === "Invalid Date") {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
  }
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
