  // POP UP ADDITIONAL DETAILS FOR STUDENTS
  document.querySelector('#user-type').addEventListener('change', function() {
    ['#popup-container-student'].forEach(function(value) {
      document.querySelector(value).className = 'hidden';
      document.querySelector(value).value = 'none';
    });

    if (this.value == 'student') { 
      document.querySelector('#popup-container-student').className = '';
      document.querySelector('#' + this.value).value = '';
    }
  }, false);

  //POP UP ADDITIONAL DETAILS FOR EMPLOYEES
  document.querySelector('#user-type').addEventListener('change', function() {
    ['#popup-container-employee'].forEach(function(value) {
      document.querySelector(value).className = 'hidden';
      document.querySelector(value).value = 'none';
    });

    if (this.value == 'employee') { 
      document.querySelector('#popup-container-employee').className = '';
      document.querySelector('#' + this.value).value = '';
    }
  }, false);
