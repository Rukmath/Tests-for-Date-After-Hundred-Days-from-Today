const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const todaysDate = new Date();
  const newDate = addDays(
    new Date(
      todaysDate.getFullYear(),
      todaysDate.getMonth(),
      todaysDate.getDate()
    ),
    100
  );

  response.send(
    `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  );
});

module.exports = app;
