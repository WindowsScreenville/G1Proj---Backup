import {check} from "express-validator";

let validateRegister = [
    check("firstname", "Please enter your first name.")
    .isLength({min:1}),

    check("lastname", "Please enter your last name.")
    .isLength({min:1}),

    check("sex", "Please select your sex.")
    .isLength({min:1}),

    check("age", "Please enter your age.")
    .isLength({min:1}),

    check("birthday", "Please enter your birthday.")
    .isLength({min:1}),

    check("address", "Please enter your address.")
    .isLength({min:1}),

    check("mobilenum", "Please enter your contact number.")
    .isLength({min:1}),

    check("kind", "Please enter user type.")
    .isLength({min:1}),

    check("password","Password must be at least 2 characters long.")
    .isLength({min:2}),

    check("confirmpassword","Password mismatch between the password and entered confirm passowrd.")
    .custom((value, {req}) => {
        return value === req.body.password
    })
];

module.exports = {
    validateRegister: validateRegister
}