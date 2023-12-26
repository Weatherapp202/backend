"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = void 0;
const index_routes_1 = require("../../routes/index.routes");
const loginService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const userFounded = yield index_routes_1.prismaClient.user.findFirst({
        where: {
            name: username,
        },
    });
    if (userFounded) {
        userFounded.password === password &&
            res.send({
                message: "login success",
            });
    }
    else {
        res.send({ message: "login failed" });
    }
});
exports.loginService = loginService;