import passportLocal from "passport-local";
import passport from "passport";
import loginService from "../services/loginService";
import adminloginService from "../services/adminloginService";
import qrcodehide from "../public/qrcodehide";


let LocalStrategy = passportLocal.Strategy;

var QRCodeService = require("../services/QRCodeService");
var timetoday = require("../services/fillupService");

let initPassportLocal = () => {
    passport.use('local', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, username, password, done) => {
            try {
                await loginService.findUsername(username).then(async (user2) => {
                    if (!user2) {
                        return done(null, false, req.flash("errors", `This username "${username}" doesn't exist`));
                    }

                    if (user2) {
                        let match = await loginService.comparePassword(password, user2);
                        if (match === true) {
                            var qrcode_data = await QRCodeService.checkForQRCode(user2.username);
                            // console.log(qrcode_data);
                            if (qrcode_data)
                            {
                                var timeremaining = qrcode_data.code_expire - timetoday.getTimeToday();
                                console.log(timeremaining);
                                if (timeremaining <= 0) {
                                    console.log("EXPIRE NA IYANG QR CODE...");
                                    var message = "your QR Code has expired!"
                                    var user = Object.assign({}, user2, {message});
                                    return done(null, user, null);
                                }

                                else {
                                    var signal = 1;
                                    timeremaining = timeremaining / 60;
                                    var user = Object.assign({}, user2, qrcode_data, {signal, timeremaining});
                                    // console.log(user);
                                    return done(null, user, null);
                                    // return done(null, user, req.flash("qrcode", qrcode_data.qrcode));
                                }
                                
                            }

                            else {
                                console.log("WALAY QR CODE...");
                                var message = "you have no valid QR Code."
                                var user = Object.assign({}, user2, {message});
                                console.log(user);
                                return done(null, user, null);    
                            }
                            
                        } else {
                            return done(null, false, req.flash("errors", match)
                            )
                        }
                    }
                });
            } catch (err) {
                console.log(err);
                return done(null, false, { message: err });
            }
        }));



        passport.use('admin-local', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
            },
            async (req, username, password, done) => {
            try {
                console.log("ENTERING...");
                await adminloginService.findAdminUsername(username).then(async (admin) => {
                    if (!admin) {
                        return done(null, false, req.flash("errors", `This username "${username}" doesn't exist`));
                    }
    
                    if (admin) {
                        console.log("SAKTO ANG USERNAME: ADMIN...");
                        let match = await adminloginService.compareAdminPassword(password, admin);
                        if (match === true) {
                            return done(null, admin, null)
                            
                        } else {
                            return done(null, false, req.flash("errors", match)
                            )
                        }
                    }
                });
            } catch (err) {
                console.log(err);
                return done(null, false, { message: err });
            }
        }));
 
};

passport.serializeUser((user, done) => {
    done(null, user);
});

// passport.serializeUser((user, done) => {
//         var key = {
//             id: user.id,
//             type: user.userType
//         }
//         done(null, key);
// });

passport.deserializeUser((user, done) => {
    done(null, user);
  });

module.exports = initPassportLocal;
