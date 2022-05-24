let getAdminLoginPage = (req, res) => {
    // var a = req.user;
    // index = a;
    return  res.render("adminlogin")};

let checkAdminLoggedIn = (req, res, next) => {
        if (!req.isAuthenticated()) {
            return res.redirect("/adminlogin");
        }
        next();
    };
    
let checkAdminLoggedOut = (req, res, next) => {
        if (req.isAuthenticated()) {
            return res.redirect("/admin");
        }
        next();
    };
    
let postAdminLogOut = (req, res) => {
        req.session.destroy(function(err) {
            return res.redirect("/adminlogin");
        });
    };

    module.exports = {
        getAdminLoginPage: getAdminLoginPage,
        checkAdminLoggedIn: checkAdminLoggedIn,
        checkAdminLoggedOut: checkAdminLoggedOut,
        postAdminLogOut: postAdminLogOut
    };