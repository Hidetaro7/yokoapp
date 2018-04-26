const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
	fs.readFile("./data.txt", "utf-8", function (err, txt) {
		res.send(txt);
		console.log(txt)
	});
	
})

app.listen(3000);