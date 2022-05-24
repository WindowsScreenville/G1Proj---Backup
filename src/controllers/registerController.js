import {validationResult} from "express-validator";
import registerService from "../services/registerService";

let getRegisterPage = (req, res) => {
    return  res.render("register", {
        errors: req.flash("errors")
    });
};

var errorsArr = [];

let createNewUser = async(req, res) => {
    console.log(req.body);

    // Validate all the required fields
    errorsArr = [];
    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });

        req.flash("errors", errorsArr);
        return res.redirect("/register");
    }

    //FIX BLANK FIELDS [E.G., STUDENT ID, COURSE AND YEAR, EMPLOYEE ID]
    if (req.body.studidnum == "") {
        var studidnum = req.body.studidnum;
    }

    else {
        var studidnum = "N/A";
    }

    if (req.body.courseyearsec == "") {
        var courseyearsec = req.body.courseyearsec;
    }

    else {
        var courseyearsec = "N/A";
    }

    if (req.body.emplyidnum == "") {
        var emplyidnum = req.body.emplyidnum;
    }

    else {
        var emplyidnum = "N/A";
    }


    // CREATE NEW USER
    try {
        let newUser = {
            firstname: req.body.firstname,
            middlename: req.body.middlename,
            lastname: req.body.lastname,
            extension: req.body.extension,
            lastname: req.body.lastname,
            sex: req.body.sex,
            age: req.body.age,
            birthday: req.body.birthday,
            address: req.body.address,
            mobilenum: req.body.mobilenum,
            kind: req.body.kind,
            studidnum: studidnum,
            courseyearsec: courseyearsec,
            emplyidnum: emplyidnum,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword
        };


        
        let message = await registerService.createNewUser(newUser);
        console.log("Message: " + message);
        req.flash("subtext", "Success! Your username is");
        req.flash("message", message);
        return res.redirect("/login");
    }

    catch (e) {
        req.flash("errors", e);
        return res.redirect("/register");
    }
}

module.exports = {
    getRegisterPage: getRegisterPage,
    createNewUser: createNewUser,
    errorsArr: errorsArr
};