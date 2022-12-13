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
  
    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#email-enroll').value.trim();
    const password = document.querySelector('#password-enroll').value.trim();
  
    if (firstName && lastName && email && password) {
      const response = await fetch('/api/students', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password }),
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