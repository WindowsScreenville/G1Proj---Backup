import db from "../configs/connectDB";

var qrcode
let checkForQRCode = (username) => {
    return new Promise(((resolve, reject) => {
        try {
            db.query("SELECT * FROM qrcode WHERE username = ?", username, function(error, rows) {
                if (error) {
                    reject(error);
                }

                let qrcode_data = rows[0];
                resolve(qrcode_data);
            })
        }

        catch (e) {
            reject(e);
        }
    }));
    
}

let changeQRCode = (req, res) => {
    var user2 = req.user;
    console.log("ACCOUNT ID: " + user2.username);
    let sql = "DELETE FROM qrcode WHERE username = ?";
    db.query(sql, user2.username, function(error, result, fields) {
        if (error) {
            throw(error);
        }
        console.log("TO DELETE>>>");
        console.log("RECORD DELETED: ", result.affectedRows);
        })

    sql = "DELETE FROM form_data WHERE username = ?";
    db.query(sql, user2.username, function(error, result, fields) {
        if (error) {
            throw(error);
        }
        console.log("TO DELETE>>>");
        console.log("RECORD DELETED: ", result.affectedRows);
        })

    user2.signal = 0;
    console.log("SIGNAL NOW: " + user2.signal);

    var message = "you have no valid QR Code."
    var user = Object.assign({}, user2, {message});
    return res.render("homepage.ejs", {user});
}

module.exports = {
    checkForQRCode: checkForQRCode,
    changeQRCode: changeQRCode
};