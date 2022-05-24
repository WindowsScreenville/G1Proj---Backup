import fillupService from "../services/fillupService";
import homePageController, { getHomePage } from "./homePageController";
import {validationResult} from "express-validator";

var index;
let getFillupPage = (req, res) => {
    var a = req.user;
    index = a;
    return  res.render("fillup",{user: req.user, errors: req.flash("errors")
    })};


let fillup = async(req, res) => {

    // Validate all the required fields

    let errorsArr = [];
    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });

        req.flash("errors", errorsArr);
        return res.redirect("/fillup");
    }


    // NULLIFY NON TRUE FIELDS
    if (req.body.headache == 1) {
        var severity_headache = req.body.severityheadache;
        var duration_headache = req.body.durationheadache;
    }

    else {
        var severity_headache = 0;
        var duration_headache = 0;
    }

    if (req.body.nasalcongestion == 1) {
        var severity_nasalcongestion = req.body.severitynasalcongestion;
        var duration_nasalcongestion = req.body.durationnasalcongestion;
    }

    else {
        var severity_nasalcongestion = 0;
        var duration_nasalcongestion = 0;
    }

    if (req.body.sorethroat == 1) {
        var severity_sorethroat = req.body.severitysorethroat;
        var duration_sorethroat = req.body.durationsorethroat;
    }

    else {
        var severity_sorethroat = 0;
        var duration_sorethroat = 0;
    }

    if (req.body.cough == 1) {
        var severity_cough = req.body.severitycough;
        var duration_cough = req.body.durationcough;
    }

    else {
        var severity_cough = 0;
        var duration_cough = 0;
    }

    if (req.body.nightsweats == 1) {
        var severity_nightsweats = req.body.severitynightsweats;
        var duration_nightsweats = req.body.durationnightsweats;
    }

    else {
        var severity_nightsweats = 0;
        var duration_nightsweats = 0;
    }

    if (req.body.chestpain == 1) {
        var severity_chestpain = req.body.severitychestpain;
        var duration_chestpain = req.body.durationchestpain;
    }

    else {
        var severity_chestpain = 0;
        var duration_chestpain = 0;
    }

    if (req.body.difficultybreathing == 1) {
        var severity_difficultybreathing = req.body.severitydifficultybreathing;
        var duration_difficultybreathing = req.body.durationdifficultybreathing;
    }

    else {
        var severity_difficultybreathing = 0;
        var duration_difficultybreathing = 0;
    }

    if (req.body.lossofappetite == 1) {
        var severity_lossofappetite = req.body.severitylossofappetite;
        var duration_lossofappetite = req.body.durationlossofappetite;
    }

    else {
        var severity_lossofappetite = 0;
        var duration_lossofappetite = 0;
    }

    if (req.body.weightloss == 1) {
        var severity_weightloss = req.body.severityweightloss;
        var duration_weightloss = req.body.durationweightloss;
    }

    else {
        var severity_weightloss = 0;
        var duration_weightloss = 0;
    }

    if (req.body.nausea == 1) {
        var severity_nausea = req.body.severitynausea;
        var duration_nausea = req.body.durationnausea;
    }

    else {
        var severity_nausea = 0;
        var duration_nausea = 0;
    }

    if (req.body.vomiting == 1) {
        var severity_vomiting = req.body.severityvomiting;
        var duration_vomiting = req.body.durationvomiting;
    }

    else {
        var severity_vomiting = 0;
        var duration_vomiting = 0;
    }

    if (req.body.diarrhea == 1) {
        var severity_diarrhea = req.body.severitydiarrhea;
        var duration_diarrhea = req.body.durationdiarrhea;
    }

    else {
        var severity_diarrhea = 0;
        var duration_diarrhea = 0;
    }

    if (req.body.bodyaches == 1) {
        var severity_bodyaches = req.body.severitybodyaches;
        var duration_bodyaches = req.body.durationbodyaches;
    }

    else {
        var severity_bodyaches = 0;
        var duration_bodyaches = 0;
    }

    if (req.body.fatigue == 1) {
        var severity_fatigue = req.body.severityfatigue;
        var duration_fatigue = req.body.durationfatigue;
    }

    else {
        var severity_fatigue = 0;
        var duration_fatigue = 0;
    }

    try {
        let formresponses = {
            username: index.username,
            purpose: req.body.purpose,

            headache: req.body.headache,
            severityheadache: severity_headache,
            durationheadache: duration_headache,
            
            nasalcongestion: req.body.nasalcongestion,
            severitynasalcongestion: severity_nasalcongestion,
            durationnasalcongestion: duration_nasalcongestion,
            
            sorethroat: req.body.sorethroat,
            severitysorethroat: severity_sorethroat,
            durationsorethroat: duration_sorethroat,

            cough: req.body.cough,
            severitycough: severity_cough,
            durationcough: duration_cough,

            nightsweats: req.body.nightsweats,
            severitynightsweats: severity_nightsweats,
            durationnightsweats: duration_nightsweats,

            chestpain: req.body.chestpain,
            severitychestpain: severity_chestpain,
            durationchestpain: duration_chestpain,

            difficultybreathing: req.body.difficultybreathing,
            severitydifficultybreathing: severity_difficultybreathing,
            durationdifficultybreathing: duration_difficultybreathing,

            lossofappetite: req.body.lossofappetite,
            severitylossofappetite: severity_lossofappetite,
            durationlossofappetite: duration_lossofappetite,

            weightloss: req.body.weightloss,
            severityweightloss: severity_weightloss,
            durationweightloss: duration_weightloss,

            nausea: req.body.nausea,
            severitynausea: severity_nausea,
            durationnausea: duration_nausea,

            vomiting: req.body.vomiting,
            severityvomiting: severity_vomiting,
            durationvomiting: duration_vomiting,

            diarrhea: req.body.diarrhea,
            severitydiarrhea: severity_diarrhea,
            durationdiarrhea: duration_diarrhea,

            bodyaches: req.body.bodyaches,
            severitybodyaches: severity_bodyaches,
            durationbodyaches: duration_bodyaches,

            fatigue: req.body.fatigue,
            severityfatigue: severity_fatigue,
            durationfatigue: duration_fatigue,

            contacttracing: req.body.contacttracing
        }


        var data = await fillupService.saveDataCreateQRCode(formresponses);
        var signal = 1;
        var user = Object.assign({}, data, {signal});
        console.log("VALUES OF USER:");
        console.log(user);
        // req.flash("qrcode_data", qrcode_data.qrcode);
        // return res.redirect("/", done(null, user, null));
        // return res.render("homepage.ejs", {user});

        // return res.render("homepage.ejs", {
        //     user: user, qrcode: user.qrcode
        //     });
        // req.user.push(data, {signal});
        
        req.user = Object.assign({}, data, {signal});
        getHomePage(req, res);
    }

    catch (e) {
        req.flash("errors", e);
        return res.redirect("/fillup");
    }
}

module.exports = {
    getFillupPage: getFillupPage,
    fillup: fillup
}