/*HEADACHE STARTS HERE*/
document.querySelector('#headache').addEventListener('change', function() {
	['#yes1-1Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value == 1) {
  	document.querySelector('#yes1-' + this.value + 'Field').className = '';
    // document.querySelector('#yes1-' + this.value).value = '';
  }
}, false);
/*HEADACHE ENDS HERE*/

/*NASAL CONGESTION STARTS HERE*/
document.querySelector('#nasal-congestion').addEventListener('change', function() {
	['#yes2-1Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#yes2-' + this.value + 'Field').className = '';
    // document.querySelector('#yes2-' + this.value).value = '';
  }
}, false);
/*NASAL CONGESTION ENDS HERE*/

/*SORE THROAT STARTS HERE*/
document.querySelector('#sore-throat').addEventListener('change', function() {
	['#yes3-1Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#yes3-' + this.value + 'Field').className = '';
    // document.querySelector('#yes3-' + this.value).value = '';
  }
}, false);
/*SORE THROAT ENDS HERE*/

/*COUGH STARTS HERE*/
document.querySelector('#cough').addEventListener('change', function() {
	['#yes4-1Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#yes4-' + this.value + 'Field').className = '';
    // document.querySelector('#' + this.value).value = '';
  }
}, false);
/*COUGH THROAT ENDS HERE*/

/*NIGHT SWEATS STARTS HERE*/
document.querySelector('#night-sweats').addEventListener('change', function() {
	['#yes5-1Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#yes5-' + this.value + 'Field').className = '';
    // document.querySelector('#' + this.value).value = '';
  }
}, false);
/*NIGHT SWEATS ENDS HERE*/

/*CHEST PAIN STARTS HERE*/
document.querySelector('#chest-pain').addEventListener('change', function() {
	['#yes6-1Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#yes6-' + this.value + 'Field').className = '';
    // document.querySelector('#' + this.value).value = '';
  }
}, false);
/*CHEST PAIN ENDS HERE*/

/*DIFFICULTY/SHORTNESS IN BREATHING STARTS HERE*/
document.querySelector('#difficulty-breathing').addEventListener('change', function() {
	['#yes7-1Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#yes7-' + this.value + 'Field').className = '';
    // document.querySelector('#' + this.value).value = '';
  }
}, false);
/*DIFFICULTY/SHORTNESS IN BREATHING ENDS HERE*/

/*LOSS OF APPETITE STARTS HERE*/
document.querySelector('#loss-of-appetite').addEventListener('change', function() {
	['#yes8-1Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#yes8-' + this.value + 'Field').className = '';
    // document.querySelector('#' + this.value).value = '';
  }
}, false);
/*LOSS OF APPETITE ENDS HERE*/

/*UNEXPLAINED WEIGHT LOSS STARTS HERE*/
document.querySelector('#weight-loss').addEventListener('change', function() {
	['#yes9-1Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#yes9-' + this.value + 'Field').className = '';
    // document.querySelector('#' + this.value).value = '';
  }
}, false);
/*UNEXPLAINED WEIGHT LOSS ENDS HERE*/

/*NAUSEA STARTS HERE*/
document.querySelector('#nausea').addEventListener('change', function() {
	['#yes10-1Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#yes10-' + this.value + 'Field').className = '';
    // document.querySelector('#' + this.value).value = '';
  }
}, false);
/*NAUSEA ENDS HERE*/

/*VOMITTING STARTS HERE*/
document.querySelector('#vomiting').addEventListener('change', function() {
	['#yes11-1Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#yes11-' + this.value + 'Field').className = '';
    // document.querySelector('#' + this.value).value = '';
  }
}, false);
/*VOMITTING ENDS HERE*/

/*DIARRHEA STARTS HERE*/
document.querySelector('#diarrhea').addEventListener('change', function() {
	['#yes12-1Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#yes12-' + this.value + 'Field').className = '';
    // document.querySelector('#' + this.value).value = '';
  }
}, false);
/*DIARRHEA ENDS HERE*/

/*MUSCLE/BODY ACHES STARTS HERE*/
document.querySelector('#body-aches').addEventListener('change', function() {
	['#yes13-1Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#yes13-' + this.value + 'Field').className = '';
    // document.querySelector('#' + this.value).value = '';
  }
}, false);
/*MUSCLE/BODY ACHES ENDS HERE*/

/*FATIGUE STARTS HERE*/
document.querySelector('#fatigue').addEventListener('change', function() {
	['#yes14-1Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#yes14-' + this.value + 'Field').className = '';
    // document.querySelector('#' + this.value).value = '';
  }
}, false);
/*FATIGUE ENDS HERE*/
