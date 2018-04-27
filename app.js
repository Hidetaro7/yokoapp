const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
	fs.readFile("./data.json", "utf-8", function (err, data) {
		if(!err) {
			res.status(200).json(data);
			console.log(data);
		}
	});
	
})

app.listen(3000);