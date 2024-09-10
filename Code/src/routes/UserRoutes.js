const UserRouter = require("express").Router();

const { createUser, readUser, updateUser, deleteUser } = require("../controllers/UserControllers");

UserRouter.post("/create", createUser);
UserRouter.get("/read", readUser);
UserRouter.put("/update/:id", updateUser);
UserRouter.delete("/delete/:id", deleteUser);

module.exports = UserRouter;
