/** @format */

// User.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
let timestampPlugin = require("./plugins/timestamps.js");

// Number of salting loops for bcrypt
const saltRounds = 10;

// Instantiate an instance of Schema with email and password
const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		validate: (value) => validator.isEmail(value),
	},
	password: {
		type: String,
		required: true,
	},
});

// Password authentication with bcrypt's compare method
//? Why isn't this just in the schema def above?
UserSchema.methods.isCorrectPassword = function (password, callback) {
	// compare() takes the submitted password and compares its hash to our stored hash. A callback handles errors.
	bcrypt.compare(password, this.password, function (err, same) {
		if (err) {
			callback(err);
		} else {
			callback(err, same);
		}
	});
};

// Add the timestamp plugin
UserSchema.plugin(timestampPlugin);

// Use Schema's pre middleware to listen for the "save" operation and supply a handler. The cb doesn't need the request or response objects, just the next() method.
UserSchema.pre("save", function (next) {
	// Check if document is new or a new password has been set. These are Mongoose Schema methods available to our instance.
	if (this.isNew || this.isModified("password")) {
		// Saving reference to this because of changing scopes. At this point "this" refers to our schema instance - UserSchema
		const document = this;
		// Hash the password. The final argument to hash() provides a callback that, if there's an error, passes the error to the next middleware, and otherwise, on success, overwrites the password with its hash, before passing off to the next middleware.
		bcrypt.hash(document.password, saltRounds, function (
			err,
			hashedPassword
		) {
			if (err) {
				next(err);
			} else {
				document.password = hashedPassword;
				next();
			}
		});
		// If there's no new document or if the document hasn't been modified, then just pass off to the next middleware.
	} else {
		next();
	}
});

// Use the model method to pass in a name for our instance, in this case "User", and the schema.
module.exports = mongoose.model("User", UserSchema);
