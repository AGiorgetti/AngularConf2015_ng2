// a very good article on getting and post data to express
// https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static("./"));

// the server-side model
function TodoItemJs(id, task) {
	this.id = id;
	this.task = task;
	this.completed = false;
}

var todoList = [];
var _idSeed = 0;
function getNextId() {
	return _idSeed++;
}

app.get("/api/list", function (req, res) {
	res.send(todoList);
});

app.get("/api/list/:id", function (req, res) {
	res.send(todoList[req.params.id - 1]);
});

// create: just post the task description
app.post("/api/list", function (req, res) {
	// create the new item, and send it back to the caller
	var newItem = new TodoItemJs(getNextId(), req.body.task);
	todoList.push(newItem);
	res.send(newItem);
});

// remove: remove the item, returns the removed item
app.delete("/api/list/:id", function (req, res) {
	for (var i = 0; i < todoList.length; i++) {
		if (todoList[i].id === parseInt(req.params.id)) {
			var itm = todoList[i];
			todoList.splice(i, 1);
			res.send(itm);
		}
	}
});

// todo: update function

// todo: enable notifications to connected clients that something changed

var server = app.listen(process.env.port || 3000, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('app listening at http://%s:%s', host, port);

});