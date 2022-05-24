import db from "../configs/connectDB";
import fillupService from "../services/fillupService";

// var db1 = require("../configs/connectDB");
// var db2 = require("../configs/connectDB");
let selectToBeDeleted = () => {
    return new Promise(async(resolve, reject) => {
        try {
            var delete_list = [];
            var timetoday = fillupService.getTimeToday();
            db.query("SELECT * FROM qrcode", function(error, rows) {
                if (error) {
                    reject(error);
                }

                for (let i = 0; i < rows.length; i++)
                {
                    if (rows[i].code_expire - timetoday < 0) {
                        delete_list.push(rows[i].account_id);
                    }
                }
                // rows.forEach(insertToBeDeleted);
                resolve(delete_list);
            })
        }

        catch (e) {
            reject(e);
        }
    });


    
}

let deleteData = () => {
        // console.log("DIARA KO...");
        selectToBeDeleted().then(delete_list => {
           console.log("LIST: " + delete_list);
            for (let i = 0; i < delete_list.length; i++) {
            let sql = `DELETE FROM qrcode WHERE account_id = ?`;
            db.query(sql, delete_list[i], function(error, result, fields) {
                if (error) {
                    throw(error);
                }
                console.log("TO DELETE>>>");
                console.log("RECORD DELETED: ", result.affectedRows);
                })
            }

            for (let i = 0; i < delete_list.length; i++) {
                let sql = `DELETE FROM form_data WHERE account_id = ?`;
                db.query(sql, delete_list[i], function(error, result, fields) {
                    if (error) {
                        throw(error);
                    }
                    console.log("TO DELETE FORM DATA>>>");
                    console.log("[FORM DATA] RECORD DELETED: ", result.affectedRows);
                    })
                }
        });
        
            
        
        
        
          
}

let insertToBeDeleted = (item, i, arr) => {
    var delete_list = [];
    var timetoday = fillupService.getTimeToday();
    if (arr[i].code_expire - timetoday < 0) {
        delete_list.push(arr[i].account_id);
        console.log("BAG-ONG NASULOD: ", delete_list[i]);
    }

    console.log("LIST: ", delete_list);
}


module.exports = {
    selectToBeDeleted: selectToBeDeleted,
    deleteData: deleteData
}