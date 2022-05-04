require('dotenv').config();
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import connectFlash from "connect-flash";
import session from "express-session";
import passport from "passport";
const path = require('path');
const mysql = require("mysql");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// use cookie parser
app.use(cookieParser('secret'));

// config session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

// enable flash message
app.use(connectFlash());

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

//Config view engine
configViewEngine(app);

app.use(passport.initialize());
app.use(passport.session());

// init all web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () =>console.log(`Building a login system with NodeJS is running on port ${port}!`));
