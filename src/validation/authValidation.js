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

    check("birthday", "Please enter valid birthdate.")
    .isLength({min:1}).isBefore(),

    check("address", "Please enter your address.")
    .isLength({min:5}),

    check("mobilenum", "Please enter your contact number.")
    .isLength({min:11}),

    check("kind", "Please enter user type.")
    .isLength({min:1}),

    check("password","Password must be at least 2 characters long.")
    .isLength({min:2}),

    check("confirmpassword","Password mismatch between the password and entered confirm passowrd.")
    .custom((value, {req}) => {
        return value === req.body.password
    }),

    check("studidnum")
    .custom(async(value, {req}) => {
        if (req.body.kind == "student" && value == "")
        throw new Error("Please enter your student ID number.")
    }),

    check("courseyearsec")
    .custom(async(value, {req}) => {
        if (req.body.kind == "student" && value == "")
        throw new Error("Please enter your course, year and section.")
    }),

    check("emplyidnum")
    .custom(async(value, {req}) => {
        if (req.body.kind == "employee" && value == "")
        throw new Error("Please enter your employee ID number.")
    })
];

let validateFillup = [
    check("purpose", "Missed Fill Up: Purpose")
    .isLength({min:3}),

    check("headache", "Missed Fill Up: Headache")
    .isLength({min:1}),

    check("durationheadache")
    .custom(async(value, {req}) => {
        if (req.body.headache == "1" && value == null)
        throw new Error("HEADACHE: Please select the duration.")
    }),

    check("nasalcongestion", "Missed Fill Up: Nasal Congestion")
    .isLength({min:1}),

    check("durationnasalcongestion")
    .custom(async(value, {req}) => {
        if (req.body.nasalcongestion == "1" && value == null)
        throw new Error("NASAL CONGESTION: Please select the duration.")
    }),

    check("sorethroat", "Missed Fill Up: Sore Throat")
    .isLength({min:1}),

    check("durationsorethroat")
    .custom(async(value, {req}) => {
        if (req.body.sorethroat == "1" && value == null)
        throw new Error("SORE THROAT: Please select the duration.")
    }),

    check("cough", "Missed Fill Up: Cough")
    .isLength({min:1}),

    check("durationcough")
    .custom(async(value, {req}) => {
        if (req.body.cough == "1" && value == null)
        throw new Error("COUGH: Please select the duration.")
    }),

    check("nightsweats", "Missed Fill Up: Night Sweats")
    .isLength({min:1}),

    check("durationnightsweats")
    .custom(async(value, {req}) => {
        if (req.body.nightsweats == "1" && value == null)
        throw new Error("NIGHT SWEATS: Please select the duration.")
    }),

    check("chestpain", "Missed Fill Up: Chest Pain")
    .isLength({min:1}),

    check("durationchestpain")
    .custom(async(value, {req}) => {
        if (req.body.chestpain == "1" && value == null)
        throw new Error("CHEST PAIN: Please select the duration.")
    }),

    check("difficultybreathing", "Missed Fill Up: Breathing Difficulty")
    .isLength({min:1}),

    check("durationdifficultybreathing")
    .custom(async(value, {req}) => {
        if (req.body.difficultybreathing == "1" && value == null)
        throw new Error("BREATHING DIFFICULTY: Please select the duration.")
    }),

    check("lossofappetite", "Missed Fill Up: Loss of Appetite")
    .isLength({min:1}),

    check("durationlossofappetite")
    .custom(async(value, {req}) => {
        if (req.body.lossofappetite == "1" && value == null)
        throw new Error("LOSS OF APPETITE: Please select the duration.")
    }),

    check("weightloss", "Missed Fill Up: Unexplained Weight Loss")
    .isLength({min:1}),

    check("durationweightloss")
    .custom(async(value, {req}) => {
        if (req.body.weightloss == "1" && value == null)
        throw new Error("UNEXPLAINED WEIGHT LOSS: Please select the duration.")
    }),

    check("nausea", "Missed Fill Up: Nausea")
    .isLength({min:1}),

    check("durationnausea")
    .custom(async(value, {req}) => {
        if (req.body.nausea == "1" && value == null)
        throw new Error("NAUSEA: Please select the duration.")
    }),

    check("vomiting", "Missed Fill Up: Vomiting")
    .isLength({min:1}),

    check("durationvomiting")
    .custom(async(value, {req}) => {
        if (req.body.vomiting == "1" && value == null)
        throw new Error("VOMITING: Please select the duration.")
    }),

    check("diarrhea", "Missed Fill Up: Diarrhea")
    .isLength({min:1}),

    check("durationdiarrhea")
    .custom(async(value, {req}) => {
        if (req.body.diarrhea == "1" && value == null)
        throw new Error("DIARRHEA: Please select the duration.")
    }),

    check("bodyaches", "Missed Fill Up: Body Aches")
    .isLength({min:1}),

    check("durationbodyaches")
    .custom(async(value, {req}) => {
        if (req.body.bodyaches == "1" && value == null)
        throw new Error("BODY ACHES: Please select the duration.")
    }),

    check("fatigue", "Missed Fill Up: Fatigue")
    .isLength({min:1}),

    check("durationfatigue")
    .custom(async(value, {req}) => {
        if (req.body.fatigue == "1" && value == null)
        throw new Error("FATIGUE: Please select the duration.")
    }),

    check("contacttracing", "Missed Fill Up: Have Contact")
    .isLength({min:1})
];

module.exports = {
    validateRegister: validateRegister,
    validateFillup: validateFillup
}