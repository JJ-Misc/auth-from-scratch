const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User.js");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
	res.send("This is the API!");
});

app.get("/api", function (req, res) {
	res.send("This is the API!");
});

app.get("/api/home", function (req, res) {
	res.send("This is from Express!");
});

app.get("/api/secret", function (req, res) {
	res.send("The password is potato");
});

app.post("/api/register", function (req, res) {
	console.log("The request body: ", req.body);
	const { email, password } = req.body;
	const user = new User({ email, password });
	user.save(function (err) {
		if (err) {
			res.status(500).send(
				"Error registering new user."
			);
		} else {
			res.status(200).send("Welcome to the club!");
		}
	});
});

const mongo_uri = "mongodb://localhost/react-auth";
const options = {
	useCreateIndex: true,
	useNewUrlParser: true, 
	useUnifiedTopology: true
}
function cb(err) {
	if (err) {throw err;} 
	else {console.log(`Connected to ${mongo_uri}`);
	}
}
// mongoose.connect(mongo_uri, options, cb)
	//.catch(error => console.log(error));

app.listen(process.env.PORT || 8080);
