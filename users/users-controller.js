// import users from "./users.js";
import * as usersDao from "./users-dao.js";
// only support single user login
// let currentUser = null;

// we use async to make sure the function is asynchronous
// and we use await to make sure the function is executed in order
function UsersController(app) {
    const findAllUsers = async (req, res) => {
        const users = await usersDao.findAllUsers();
        res.send(users);
    };

    //find the user by username: profile/username
    const findUserByUsername = async (req, res) => {
        const username = req.params.id;
        const user = await usersDao.findUserByUsername(username);
        res.json(user);
    };
    //find the user by username: profile/id
    const findUserById = async (req, res) => {
        const id = req.params.id;
        const user = await usersDao.findUserById(id);
        res.json(user);
    };

    const deleteUserById = async (req, res) => {
        const id = req.params.id;
        const status = await usersDao.deleteUser(id);
        res.json(status);
    };

    const createUser = async (req, res) => {
        const user = await usersDao.createUser(req.body);
        res.json(user);
    };

    const updateCurrentUser = async (req, res) => {
        req.session.currentUser = req.body;
        const status = await usersDao.updateUser(req.session.currentUser);
        res.json(status);
    };

    const updateUser = async (req, res) => {
        const status = await usersDao.updateUser(req.body);
        res.json(status);
    };

    const login = async (req, res) => {
        const user = req.body;
        const foundUser = await usersDao.findUserByCredentials(
            req.body.username,
            req.body.password
        );
        if (foundUser) {
            // use the key currentUser to store the user we found
            req.session["currentUser"] = foundUser;
            // only support single user login
            // currentUser = foundUser;
            res.send(foundUser);
        } else {
            res.sendStatus(404);
        }
    };
    const logout = async (req, res) => {
        // directly destroy the user
        req.session.destroy();
        // only for single user logout
        // currentUser = null;
        res.sendStatus(204);
    };

    const profile = async (req, res) => {
        // if there is an user in the session, return the user
        const currentUser = req.session["currentUser"];
        if (currentUser) {
            res.send(currentUser);
        }
    };

    const register = async (req, res) => {
        const user = req.body;
        // const foundUser = users.find((user) => user.username === req.body.username);
        const foundUser = await usersDao.findUserByUsername(req.body.username);
        if (foundUser) {
            res.sendStatus(409);
        } else {
            // const newUser = { ...user, id: new Date().getTime() };
            const newUser = await usersDao.createUser(user);
            req.session["currentUser"] = newUser;
            // currentUser = newUser;
            // users.push(newUser);
            res.json(newUser);
        }
    };

    app.post("/api/users/login", login);
    app.post("/api/users/logout", logout);
    app.get("/api/users/profile", profile);
    app.post("/api/users/register", register);

    app.get("/api/users", findAllUsers);
    app.get("/api/users/profile/:id", findUserById);
    app.delete("/api/users/:id", deleteUserById);
    app.post("/api/users", createUser);
    app.put("/api/users/:id", updateCurrentUser);
    app.put("/api/users/update/:id", updateUser);
}

export default UsersController;