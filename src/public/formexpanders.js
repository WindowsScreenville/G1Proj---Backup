/*HEADACHE STARTS HERE*/
document.querySelector('#headache').addEventListener('change', function() {
	['#yesField'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
    console.log("EXPANDERS WORKING....");
  });

	if (this.value !== '') {
  	document.querySelector('#' + this.value + 'Field').className = '';
    document.querySelector('#' + this.value).value = '';
  }
}, false);
/*HEADACHE ENDS HERE*/

/*NASAL CONGESTION STARTS HERE*/
document.querySelector('#nasal-congestion').addEventListener('change', function() {
	['#yes1Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#' + this.value + '1Field').className = '';
    document.querySelector('#' + this.value).value = '';
  }
}, false);
/*NASAL CONGESTION ENDS HERE*/

/*SORE THROAT STARTS HERE*/
document.querySelector('#sore-throat').addEventListener('change', function() {
	['#yes2Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#' + this.value + '2Field').className = '';
    document.querySelector('#' + this.value).value = '';
  }
}, false);
/*SORE THROAT ENDS HERE*/

/*COUGH STARTS HERE*/
document.querySelector('#cough').addEventListener('change', function() {
	['#yes3Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#' + this.value + '3Field').className = '';
    document.querySelector('#' + this.value).value = '';
  }
}, false);
/*COUGH THROAT ENDS HERE*/

/*NIGHT SWEATS STARTS HERE*/
document.querySelector('#night-sweats').addEventListener('change', function() {
	['#yes4Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#' + this.value + '4Field').className = '';
    document.querySelector('#' + this.value).value = '';
  }
}, false);
/*NIGHT SWEATS ENDS HERE*/

/*CHEST PAIN STARTS HERE*/
document.querySelector('#chest-pain').addEventListener('change', function() {
	['#yes5Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#' + this.value + '5Field').className = '';
    document.querySelector('#' + this.value).value = '';
  }
}, false);
/*CHEST PAIN ENDS HERE*/

/*DIFFICULTY/SHORTNESS IN BREATHING STARTS HERE*/
document.querySelector('#difficulty-breathing').addEventListener('change', function() {
	['#yes6Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#' + this.value + '6Field').className = '';
    document.querySelector('#' + this.value).value = '';
  }
}, false);
/*DIFFICULTY/SHORTNESS IN BREATHING ENDS HERE*/

/*LOSS OF APPETITE STARTS HERE*/
document.querySelector('#loss-of-appetite').addEventListener('change', function() {
	['#yes7Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#' + this.value + '7Field').className = '';
    document.querySelector('#' + this.value).value = '';
  }
}, false);
/*LOSS OF APPETITE ENDS HERE*/

/*UNEXPLAINED WEIGHT LOSS STARTS HERE*/
document.querySelector('#weight-loss').addEventListener('change', function() {
	['#yes8Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#' + this.value + '8Field').className = '';
    document.querySelector('#' + this.value).value = '';
  }
}, false);
/*UNEXPLAINED WEIGHT LOSS ENDS HERE*/

/*NAUSEA STARTS HERE*/
document.querySelector('#nausea').addEventListener('change', function() {
	['#yes9Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#' + this.value + '9Field').className = '';
    document.querySelector('#' + this.value).value = '';
  }
}, false);
/*NAUSEA ENDS HERE*/

/*VOMITTING STARTS HERE*/
document.querySelector('#vomiting').addEventListener('change', function() {
	['#yes10Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#' + this.value + '10Field').className = '';
    document.querySelector('#' + this.value).value = '';
  }
}, false);
/*VOMITTING ENDS HERE*/

/*DIARRHEA STARTS HERE*/
document.querySelector('#diarrhea').addEventListener('change', function() {
	['#yes11Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#' + this.value + '11Field').className = '';
    document.querySelector('#' + this.value).value = '';
  }
}, false);
/*DIARRHEA ENDS HERE*/

/*MUSCLE/BODY ACHES STARTS HERE*/
document.querySelector('#body-aches').addEventListener('change', function() {
	['#yes12Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#' + this.value + '12Field').className = '';
    document.querySelector('#' + this.value).value = '';
  }
}, false);
/*MUSCLE/BODY ACHES ENDS HERE*/

/*FATIGUE STARTS HERE*/
document.querySelector('#fatigue').addEventListener('change', function() {
	['#yes13Field'].forEach(function(value) {
    document.querySelector(value).className = 'hidden';
    document.querySelector(value).value = 'none';
  });

	if (this.value !== '') {
  	document.querySelector('#' + this.value + '13Field').className = '';
    document.querySelector('#' + this.value).value = '';
  }
}, false);
/*FATIGUE ENDS HERE*/
