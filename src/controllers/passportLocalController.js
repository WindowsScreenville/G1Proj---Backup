import passportLocal from "passport-local";
import passport from "passport";
import loginService from "../services/loginService";
import qrcodehide from "../public/qrcodehide";

let LocalStrategy = passportLocal.Strategy;

var QRCodeService = require("../services/QRCodeService");
var timetoday = require("../services/fillupService");

let initPassportLocal = () => {
    passport.use(new LocalStrategy({
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
                            console.log(qrcode_data);
                            if (qrcode_data)
                            {
                                var timeremaining = qrcode_data.code_expire - timetoday.getTimeToday();
                                console.log(timeremaining);
                                if (timeremaining <= 0) {
                                    console.log("EXPIRE NA IYANG QR CODE...");
                                    var message = "your QR Code has expired!"
                                    var notif = {message};
                                    var user = Object.assign({}, user2, notif);
                                    return done(null, user, null);
                                }

                                else {
                                    var signal = 1;
                                    timeremaining = timeremaining / 60;
                                    var user = Object.assign({}, user2, qrcode_data, {signal, timeremaining});
                                    return done(null, user, null);
                                    // return done(null, user, req.flash("qrcode", qrcode_data.qrcode));
                                }
                                
                            }

                            else {
                                console.log("WALAY QR CODE...");
                                var message = "you have no valid QR Code."
                                var notif = {message};
                                var user = Object.assign({}, user2, notif);
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
 
};

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
  });

module.exports = initPassportLocal;
