// for query selector, how does it know to grab the id from the login.handlebars... i.e. how does in know which file it's looking in?

// on the Student.js model, do we need lines 67-71 commented back in?

// add a logoutbutton the the nav bar

const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/students/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
          console.log('asldkfj')
        } else {
          alert('Failed to log in.');
          console.log('Failed to log in')
        }
      }
};

const enrollFormHandler = async (event) => {
    event.preventDefault();
  
    const firstname = document.querySelector('#first-name').value.trim();
    const lastname = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#email-enroll').value.trim();
    const password = document.querySelector('#password-enroll').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ firstname, lastname, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.enroll-form')
  .addEventListener('submit', enrollFormHandler);