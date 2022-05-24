import db from "../configs/connectDB";
import bcrypt from "bcryptjs";

let findAdminUsername = (username) => {
    return new Promise(((resolve, reject) => {
        try {
            db.query("SELECT * FROM admin_users WHERE username = ?", username, function(error, rows) {
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


let compareAdminPassword = (password, user) => {
    return new Promise(async(resolve, reject) => {
        try {
            // let isMatch = await bcrypt.compare(password, user.password);
            if (password === user.password) {
                resolve(true);
            }

            else {
                resolve("Password entered is incorrect.");
            }
            
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
    findAdminUsername: findAdminUsername,
    compareAdminPassword: compareAdminPassword,
    findUserByID: findUserByID,
    checkForQRCode: checkForQRCode
}