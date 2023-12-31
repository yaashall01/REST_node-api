
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = require("../controllers/users");
var router = express_1.default.Router();
router.get('/', users_1.getAllUsers);
router.post('/', users_1.createUser);
router.get('/:id', users_1.getUser);
router.delete('/:id', users_1.deleteUser);
router.patch('/users/:id', users_1.updateUser);
router.put('/users/:id', users_1.updateAllUser);
exports.default = router;
