Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var users_1 = require("./routes/users");
var app = (0, express_1.default)();
var PORT = 8080;
app.use(body_parser_1.default.json());
app.use('/users', users_1.default);
app.get('/', function (req, res) {
    console.log('[a get request received]');
    res.send('<h1>Homepage</h1>');
});
//create a router to update users data
app.listen(PORT, function () { return console.log("Server is running on Port : " + PORT); });
