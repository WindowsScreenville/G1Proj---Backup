
let hideorview = (signal) => {
    if (signal == 1) {
        console.log("ENTERING...");
        var tosurvey = document.getElementById("tosurvey-display");
        tosurvey.setAttribute("style", "visibility: none");
        console.log("DONE...");
        // });

        //     if (this.value !== '') {
        //     document.querySelector('#' + this.value + 'Field').className = '';
        //     document.querySelector('#' + this.value).value = '';
        // }
        // }, false);
    }

     else {

     }
}

module.exports = {
    hideorview: hideorview
}
