import db from "../configs/connectDB";

const QRCode = require("qrcode");

let saveDataCreateQRCode = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let errors = await checkForErrors();
            
            if (errors) {
                reject("Please fill up the form correctly.");
            }

            else {
                let account_id = createAccountID(data.username);
                let qrcode = await createQRCode(account_id);

                let formdata = {
                    // qrcode: qrcode,
                    username: data.username,
                    account_id: account_id,
                    temperature: 3,
                    headache: data.headache,
                    severityheadache: data.severityheadache,
                    durationheadache: data.durationheadache,
                    
                    nasalcongestion: data.nasalcongestion,
                    severitynasalcongestion: data.severitynasalcongestion,
                    durationnasalcongestion: data.durationnasalcongestion,
                    
                    sorethroat: data.sorethroat,
                    severitysorethroat: data.severitysorethroat,
                    durationsorethroat: data.durationsorethroat,

                    cough: data.cough,
                    severitycough: data.severitycough,
                    durationcough: data.durationcough,

                    nightsweats: data.nightsweats,
                    severitynightsweats: data.severitynightsweats,
                    durationnightsweats: data.durationnightsweats,

                    chestpain: data.chestpain,
                    severitychestpain: data.severitychestpain,
                    durationchestpain: data.durationchestpain,

                    difficultybreathing: data.difficultybreathing,
                    severitydifficultybreathing: data.severitydifficultybreathing,
                    durationdifficultybreathing: data.durationdifficultybreathing,

                    lossofappetite: data.lossofappetite,
                    severitylossofappetite: data.severitylossofappetite,
                    durationlossofappetite: data.durationlossofappetite,

                    weightloss: data.weightloss,
                    severityweightloss: data.severityweightloss,
                    durationweightloss: data.durationweightloss,

                    nausea: data.nausea,
                    severitynausea: data.severitynausea,
                    durationnausea: data.durationnausea,

                    vomiting: data.vomiting,
                    severityvomiting: data.severityvomiting,
                    durationvomiting: data.durationvomiting,

                    diarrhea: data.diarrhea,
                    severitydiarrhea: data.severitydiarrhea,
                    durationdiarrhea: data.durationdiarrhea,

                    bodyaches: data.bodyaches,
                    severitybodyaches: data.severitybodyaches,
                    durationbodyaches: data.durationbodyaches,

                    fatigue: data.fatigue,
                    severityfatigue: data.severityfatigue,
                    durationfatigue: data.durationfatigue,

                    contacttracing: data.contacttracing,


                    // starttime: getTimeToday(),
                    // expirationtime: getExpirationTime()
                }

                console.log("MAO NI GIINPUT NGA VALUES:");
                console.log(formdata);

                db.query("INSERT INTO form_data SET ?",  {username: formdata.username, account_id: formdata.account_id, temperature: formdata.temperature,
                    headache_positive: formdata.headache, headache_severity: formdata.severityheadache, headache_duration: formdata.durationheadache,
                    congestion_positive: formdata.nasalcongestion, congestion_severity: formdata.severitynasalcongestion, congestion_duration: formdata.durationnasalcongestion,
                    sorethroat_positive: formdata.sorethroat, sorethroat_severity: formdata.severitysorethroat, sorethroat_duration: formdata.durationsorethroat,
                    cough_positive: formdata.cough, cough_severity: formdata.severitycough, cough_duration: formdata.durationcough,
                    nightsweats_positive: formdata.nightsweats, nightsweats_severity: formdata.severitynightsweats, nightsweats_duration: formdata.durationnightsweats,
                    chestpain_positive: formdata.chestpain, chestpain_severity: formdata.severitychestpain, chestpain_duration: formdata.durationchestpain,
                    breathingdifficulty_positive: formdata.difficultybreathing, breathingdifficulty_severity: formdata.severitydifficultybreathing, breathingdifficulty_duration: formdata.durationdifficultybreathing,
                    appetiteloss_positive: formdata.lossofappetite, appetiteloss_severity: formdata.severitylossofappetite, appetiteloss_duration: formdata.durationlossofappetite,
                    weightloss_positive: formdata.weightloss, weightloss_severity: formdata.severityweightloss, weightloss_duration: formdata.durationweightloss,
                    nausea_positive: formdata.nausea, nausea_severity: formdata.severitynausea, nausea_duration: formdata.durationnausea,
                    vomiting_positive: formdata.vomiting, vomiting_severity: formdata.severityvomiting, vomiting_duration: formdata.durationvomiting,
                    diarrhea_positive: formdata.diarrhea, diarrhea_severity: formdata.severitydiarrhea, diarrhea_duration: formdata.durationdiarrhea,
                    bodyaches_positive: formdata.bodyaches, bodyaches_severity: formdata.severitybodyaches, bodyaches_duration: formdata.durationbodyaches,
                    fatigue_positive: formdata.fatigue, fatigue_severity: formdata.severityfatigue, fatigue_duration: formdata.durationfatigue,
                    contact_positive: formdata.contacttracing}, function(error, rows) {
                    if (error) {
                        console.log(error);
                        reject(error);
                    }
                })

                let qrcode_data = {
                    username: data.username,
                    account_id: account_id,
                    qrcode: qrcode,
                    code_start: getTimeToday(),
                    code_expire: getExpirationTime(),
                    purpose: data.purpose

                }

                db.query("INSERT INTO qrcode SET ?",  {username: qrcode_data.username, account_id: qrcode_data.account_id, qrcode: qrcode_data.qrcode,
                    code_start: qrcode_data.code_start, code_expire: qrcode_data.code_expire, purpose: qrcode_data.purpose}, function(error, rows) {
                    if (error) {
                        console.log(error);
                        reject(error);
                    }
                })


                db.query("SELECT * FROM users WHERE username = ?", qrcode_data.username, function(error, rows) {
                    if (error) {
                        reject(error);
                    }
    
                    var signal = 1;
                    let timeremaining = (qrcode_data.code_expire - qrcode_data.code_start) / 60000;
                    let data = rows[0];
                    var user = Object.assign({}, data, qrcode_data, {signal, timeremaining});
                    resolve(user);
                })

                

                // var user = Object.assign({}, user_data, qrcode_data);




                // db.query("INSERT INTO qrcode SET ?",  {username: formdata.username, account_id: formdata.accountid, qrcode: formdata.qrcode, code_start: formdata.starttime, code_expire: formdata.expirationtime}, function(error, rows) {
                //     if (error) {
                //         console.log(error);
                //         reject(error);
                //     }
                // })

                // resolve(user);
            }
        }

        catch (e) {
            reject(e); 
        } 
    });
};

let createQRCode = async (account_id) => {
    try {   
        return QRCode.toDataURL(account_id);
    }

    catch (err) {
        console.log(err);
    }
};

let createAccountID = (username) => {
    return username + " " + getTimeToday();
};

let getExpirationTime = () => {
    let dateobj = new Date ();
    return new Date (dateobj.getTime() + 240*60000); //240 na siya, 240 * 60000
    
};

let getTimeToday = () => {
    let dateobj = new Date ();
    // let date = ("0" + dateobj.getDate()).slice(-2);
    // let month = ("0" + dateobj.getMonth() + 1).slice(-2);
    // let year = dateobj.getFullYear();
    // let hours = dateobj.getHours();
    // let minutes = dateobj.getMinutes();
    // let seconds = dateobj.getSeconds();
    // return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    return new Date (dateobj.getTime());
};

let checkForErrors = () => {
    return false;
};

module.exports = {
    saveDataCreateQRCode: saveDataCreateQRCode,
    createQRCode: createQRCode,
    createAccountID: createAccountID,
    checkForErrors: checkForErrors,
    getTimeToday: getTimeToday
}