import express from "express";
import loginController from "../controllers/loginController";
import registerController from "../controllers/registerController";
import adminloginController from "../controllers/adminloginController";
import adminController from "../controllers/adminController";
import homePageController from "../controllers/homePageController";
import fillupController from "../controllers/fillupController";
import cleanDatabase from "../services/cleanDatabase";
import auth from "../validation/authValidation";
import passport from "passport";
import initPassportLocal from "../controllers/passportLocalController";
import tofillupController from "../controllers/tofillupController";
import QRCodeService from "../services/QRCodeService";

let router = express.Router();

initPassportLocal();
setInterval(function(){cleanDatabase.deleteData()}, 1000);
// cleanDatabase.deleteData();

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
    router.get("/admin", adminloginController.checkAdminLoggedIn, adminController.getAdminPage);
    router.get('/adminlogin', adminloginController.checkAdminLoggedOut, adminloginController.getAdminLoginPage);
    router.post('/adminlogin', passport.authenticate("admin-local", {
        successRedirect: "/admin",
        failureRedirect: "/adminlogin",
        successFlash: true,
        failureFlash: true
    }));
    router.post('/register', auth.validateRegister, registerController.createNewUser);
    router.post('/fillup', passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/fillup",
        successFlash: true,
        failureFlash: true
    }));
    router.get('/changeqrcode', QRCodeService.changeQRCode);
    router.post('/sendform', auth.validateFillup, fillupController.fillup);
    router.post('/', auth.validateFillup, fillupController.fillup);
    // router.post('/', fillupController.fillup);
    router.post('/logout', loginController.postLogOut);
    router.post('/adminlogout', adminloginController.postAdminLogOut);

    return app.use("/", router);    
};
module.exports = initWebRoutes;
