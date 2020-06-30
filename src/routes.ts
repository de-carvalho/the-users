import express from "express";
import configMulter from "./config/multer";

import multer from "multer";

import UserController from "./controllers/UserController";
const upload = multer(configMulter);

const routes = express.Router();
const userController = new UserController();

routes.get("/users", userController.index);
routes.post("/user", upload.single("image"), userController.create);

export default routes;
