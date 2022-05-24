import db from "../configs/connectDB";

let getHomePage = (req, res) => {
    loadHomePage(req.user.username).then (async (qr_data) => {
        if (!qr_data) {
            var signal = 0;
            return res.render ("homepage.ejs", {
            user: req.user, qrcode: req.flash("qrcode")    
        });
        }

        if (qr_data) {
            var signal = 1;
            req.user = Object.assign({}, req.user, qr_data, {signal});
            return res.render ("homepage.ejs", {
            user: req.user, qrcode: req.flash("qrcode")    
        });
        }
    });
}

let loadHomePage = (username) => {
    console.log("GIKAN SA HOMECONTROLLER: " + username);
    return new Promise(((resolve, reject) => {
        try {
            db.query("SELECT * FROM qrcode WHERE username = ?", username, function(error, rows) {
                if (error) {
                    reject(error);
                }

                else {
                    let qr_data = rows[0];
                    resolve(qr_data);
                }
            })
            
        }

        catch (e) {
            reject(e);
        }
    }));
}

module.exports = {
    getHomePage: getHomePage,
    loadHomePage: loadHomePage
};