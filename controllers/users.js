"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAllUser = exports.updateUser = exports.deleteUser = exports.getUser = exports.getAllUsers = exports.createUser = void 0;
var fs_1 = require("fs");
var uuid_1 = require("uuid");
//Read the users data from users.json
var users = JSON.parse(fs_1.default.readFileSync('./user.json', 'utf-8'));
var createUser = function (req, res) {
    var user = req.body;
    console.log(user);
    users.push(__assign(__assign({}, user), { id: (0, uuid_1.v4)() }));
    // Write the updated users back to the JSON file
    fs_1.default.writeFileSync('./user.json', JSON.stringify(users));
    res.send('User added successfully!');
};
exports.createUser = createUser;
var getAllUsers = function (req, res) {
    res.send(users);
};
exports.getAllUsers = getAllUsers;
var getUser = function (req, res) {
    var id = req.params.id;
    var foundUser = users.find(function (user) { return user.id === id; });
    if (!foundUser) {
        res.status(404).send("User with the id ".concat(id, " not found"));
    }
    else {
        res.send(foundUser);
    }
};
exports.getUser = getUser;
var deleteUser = function (req, res) {
    var id = req.params.id;
    users = users.filter(function (user) { return user.id !== id; });
    // Write the updated users back to the JSON file
    fs_1.default.writeFileSync('./user.json', JSON.stringify(users));
    res.send("User with the id ".concat(id, " deleted from the database."));
};
exports.deleteUser = deleteUser;
var updateUser = function (req, res) {
    var id = req.params.id;
    var _a = req.body, name = _a.name, email = _a.email, birth = _a.birth;
    var user = users.find(function (user) { return user.id === id; });
    if (!user) {
        res.status(404).send("User with the id ".concat(id, " not found"));
        return;
    }
    if (name)
        user.name = name;
    if (email)
        user.email = email;
    if (birth)
        user.birth = birth;
    // Write the updated users back to the JSON file
    fs_1.default.writeFileSync('./user.json', JSON.stringify(users));
    res.send("User with the id ".concat(id, " has been updated"));
};
exports.updateUser = updateUser;
var updateAllUser = function (req, res) {
    var id = req.params.id;
    var _a = req.body, name = _a.name, email = _a.email, birth = _a.birth;
    var user = users.find(function (user) { return user.id === id; });
    if (!user) {
        res.status(404).send("User with the id ".concat(id, " not found"));
        return;
    }
    user.name = name || user.name;
    user.email = email || user.email;
    user.birth = birth || user.birth;
    // Write the updated users back to the JSON file
    fs_1.default.writeFileSync('./user.json', JSON.stringify(users));
    res.send("User with the id ".concat(id, " has been updated"));
};
exports.updateAllUser = updateAllUser;
