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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
//variables de entorno
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
const deb_1 = require("./deb");
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if ("postgres://postgres:titi2134@localhost:5432/example-cruid") {
            const sequelize = yield (0, deb_1.startDB)("postgres://postgres:titi2134@localhost:5432/example-cruid");
            yield sequelize.authenticate();
            //await sequelize.sync({ force: true });
            // await sequelize.sync();
            console.log(`App is up and tunning at port: ${PORT}`);
        }
    }
    catch (error) {
        console.error(error);
        process.abort();
    }
}));
