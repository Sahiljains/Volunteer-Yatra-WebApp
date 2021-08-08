const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");
const cors = require("cors");
// google authentication
const { OAuth2Client } = require("google-auth-library");
// const CLIENT_ID =
// 	"777910125108-78qd65oqedqcsh0r2j8rl4fld8li4b92.apps.googleusercontent.com";
// const client = new OAuth2Client(CLIENT_ID);
// Load env variables
dotenv.config();

// Connect to DB
require("./config/db");

// Initialize App
const app = express();

// cors
// var corsOptions = {
// 	origin: "http://localhost",
// };
app.use(cors());

app.get("/", (req, res) => {
	res.json({ message: "Welcome to volunteer yatra application." });
});

// Enabling parsing of request body
app.use(express.json());
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV == "production") app.use(morgan("tiny"));

// Route files
var apiRouter = require("./routes/apis");

// Mounting routes
app.use("/vy/api/v1/", apiRouter);

// Custom Error Handling Middleware
app.use(errorHandler);

// Port for server
const PORT = process.env.PORT || 5000;

const NODE_ENV = process.env.NODE_ENV || "development";

// Starting Server
const server = app.listen(PORT, () =>{
	// createUsers();
	console.log(
		`Server running in ${NODE_ENV} mode on PORT ${PORT}`.cyan.underline
	)
}
);

// Handle unhandled promise rejection
process.on("unhandledRejection", (err) => {
	console.log(`Error: ${err.message}`.red.bold);
	// Close server
	server.close(() => process.exit(1));
});


const User = require('./models/User');

const createUsers = async() => {
	await User.bulkCreate([
		{
			firstName: "Cathy",
			lastName: "Koss",
			email: "Letha_Jaskolski23@hotmail.com",
			password: "RzmtRJL7qMfDZrP",
			role: "Host",
			age: 18
		},
		{
			firstName: "Lela",
			lastName: "Hudson",
			email: "Manuel.Gleichner11@hotmail.com",
			password: "DGCd9Kji9121nkJ",
			role: "Admin",
			age: 70
		},
		{
			firstName: "Taylor",
			lastName: "Ortiz",
			email: "Misael.Gaylord4@yahoo.com",
			password: "g4Wo9HYxqjtcCH",
			role: "Admin",
			age: 74
		},
		{
			firstName: "Loyce",
			lastName: "Jacobson",
			email: "Edward88@hotmail.com",
			password: "3LZ7ygIZuPO4BTR",
			role: "Yatri",
			age: 0
		},
		{
			firstName: "Robbie",
			lastName: "Harvey",
			email: "Jovan_Gaylord35@hotmail.com",
			password: "Gu88iPbjZ36jwZr",
			role: "Host",
			age: 44
		},
		{
			firstName: "Dovie",
			lastName: "Strosin",
			email: "Audra94@hotmail.com",
			password: "L2pubremKEvkhoU",
			role: "Host",
			age: 70
		},
		{
			firstName: "Cindy",
			lastName: "Erdman",
			email: "Ethan.Howe89@yahoo.com",
			password: "kqBQa5eEaOCIW4E",
			role: "Yatri",
			age: 23
		},
		{
			firstName: "Kimberly",
			lastName: "Ernser",
			email: "Alyson.Abshire@yahoo.com",
			password: "2wCKew1tfX31NXA",
			role: "Yatri",
			age: 54
		},
		{
			firstName: "Emmalee",
			lastName: "Satterfield",
			email: "Nicholas36@yahoo.com",
			password: "S1RkBZAqDL6WYvO",
			role: "Admin",
			age: 46
		},
		{
			firstName: "Wilford",
			lastName: "Luettgen",
			email: "Lafayette.Streich73@hotmail.com",
			password: "Cvc0x99dn4054",
			role: "Host",
			age: 17
		}
	])
}