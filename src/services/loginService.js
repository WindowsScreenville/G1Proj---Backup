import db from "../configs/connectDB";
import bcrypt from "bcryptjs";

let findUsername = (username) => {
    return new Promise(((resolve, reject) => {
        try {
            db.query("SELECT * FROM users WHERE username = ?", username, function(error, rows) {
                if (error) {
                    reject(error);
                }

                let user = rows[0];
                resolve(user);
            })
        }

        catch (e) {
            reject(e);
        }
    }));
};


let comparePassword = (password, user) => {
    return new Promise(async(resolve, reject) => {
        try {
            let isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) resolve(true);
            resolve("Password entered is incorrect.");
        }

        catch (e) {
            reject(e);
        }
    });
};

let findUserByID = (id) => {
    return new Promise((resolve, reject) => {
        try {
            db.query("SELECT * FROM users WHERE account_id = ?", id, function(error, rows) {
                if (error) {
                    reject(error);
                }
                let user = rows[0];
                resolve(user);
            })
        }

        catch (e) {
            reject(e);
        }
    });
};

let checkForQRCode = (username) => {
    return new Promise(((resolve, reject) => {
        try {
            db.query("SELECT * FROM qrcode WHERE username = ?", username, function(error, rows) {
                if (error) {
                    console.log(error);
                    reject(error);
                }

                let availableQCode = rows[0];
                resolve(availableQCode);
            })
        }

        catch (e) {
            console.log(e);
            reject(e);
        }
    }));
};

module.exports = {
    findUsername: findUsername,
    comparePassword: comparePassword,
    findUserByID: findUserByID,
    checkForQRCode: checkForQRCode
}