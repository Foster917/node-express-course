const express = require("express"); // gives access to the express library by searching for electron in "node_modules"
const app = express(); //creates an instance of the electron constructor that we name app

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];
app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData,
  });
});

app.listen(8000, function () {
  console.log("server is running");
});
