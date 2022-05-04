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

module.exports = {
    checkForQRCode: checkForQRCode
};