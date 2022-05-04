import express from "express";
import loginController from "../controllers/loginController";
import registerController from "../controllers/registerController";
import homePageController from "../controllers/homePageController";
import fillupController from "../controllers/fillupController";
import auth from "../validation/authValidation";
import passport from "passport";
import initPassportLocal from "../controllers/passportLocalController";
import tofillupController from "../controllers/tofillupController";

let router = express.Router();

initPassportLocal();

let initWebRoutes = (app) => {
    router.get("/", loginController.checkLoggedIn, homePageController.getHomePage);

    router.get('/login', loginController.checkLoggedOut, loginController.getLoginPage);
    router.post('/login', passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));
    router.get('/fillup', tofillupController.checkLoggedIn, fillupController.getFillupPage);
    router.get('/register', registerController.getRegisterPage);
    router.post('/register', auth.validateRegister, registerController.createNewUser);
    router.post('/fillup', passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/fillup",
        successFlash: true,
        failureFlash: true
    }));
    router.post('/sendform', fillupController.fillup);
    router.post('/', fillupController.fillup);
    router.post('/logout', loginController.postLogOut);
    
    return app.use("/", router);    
};
module.exports = initWebRoutes;
