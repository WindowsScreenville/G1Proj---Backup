const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/signup', (req, res) => {
    res.render('signup-almerol');
})

router.get('/ques', (req, res) => {
    res.render('questionnaire-tandoc');
})

router.get('/home', (req, res) => {
    res.render('home-tandoc');
})

module.exports = router;