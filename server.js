const express = require("express");

const bodyParser = require("body-parser");

const app = express();

// use middleware to parse the form-data
app.use(bodyParser.urlencoded({ extended: false }));

// submit route to get form data
app.post("/submit", (req, res) => {
	const formData = req.body;
	console.log(
		`Form data received successfully\n\n${JSON.stringify(formData)}`
	);
	res.send(`Form data received successfully<br/>${JSON.stringify(formData)}`);
});

const port = 8080;

app.listen(port, () => {
	console.log(`App is running at: http://localhost:${port}`);
});
