import db from "../configs/connectDB";

let getAdminPage = (req, res) => {
    loadTable().then (async (data) => {
        console.log(data[0])
        return res.render ("admin", {
        data: data, qrcode: req.flash("qrcode")
    }); 
    });
    
}

let loadTable = () => {
    return new Promise(((resolve, reject) => {
        try {
            db.query("SELECT *, CONCAT_WS(' ', first_name, middle_name, last_name, extension) AS visitors_name " +
            "FROM visitors_log " + 
            "INNER JOIN qrcode USING (account_id) " +
            "INNER JOIN users USING (username)" +
            "ORDER BY date_time DESC", function(error, rows) {
                if (error) {
                    reject(error);
                }

                else {
                    resolve(rows);
                }
            })
        }

        catch (e) {
            reject(e);
        }
    }));
}

module.exports = {
    getAdminPage: getAdminPage,
    loadTable: loadTable
};