var express = require("express");
var authRouter = require("./auth");
var hostRouter = require("./host");
var aadharRouter = require("./aadhar");
var profileRouter = require("./profile");
var commentRouter = require('./comment')
var adminRouter = require('./admin')
var volunteerRouter = require('./volunteer')
// var bookRouter = require("./book");

var app = express();

app.use("/auth/", authRouter);
app.use("/host/", hostRouter);
app.use("/profile/", profileRouter);
app.use("/aadhar/", aadharRouter);
app.use("/comment/", commentRouter);
app.use("/admin/", adminRouter);
app.use("/volunteer/", volunteerRouter);
// app.use("/book/", bookRouter);

module.exports = app;
