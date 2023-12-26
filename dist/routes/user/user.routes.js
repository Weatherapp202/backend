"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../../controllers/user/userController");
const index_routes_1 = require("../index.routes");
// metodos
index_routes_1.router.get("/user", userController_1.getAllUsers);
index_routes_1.router.get("/user/:id", userController_1.getUserByID);
index_routes_1.router.patch("/user/updateUser", userController_1.updateUser);
index_routes_1.router.post("/user/newUser", userController_1.addUser);
index_routes_1.router.delete("/user/deleteUser", userController_1.deleteUser);
exports.default = index_routes_1.router;
