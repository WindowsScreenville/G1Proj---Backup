
let getHomePage = (req, res) => {
    return res.render ("homepage.ejs", {
    user: req.user, qrcode: req.flash("qrcode")
    });
}

module.exports = {
    getHomePage: getHomePage
};