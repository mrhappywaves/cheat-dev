const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username-signup');
    const emailEl = document.querySelector('#email-signup');
    const passwordEl = document.querySelector('#password-signup');

    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        email: emailEl.value,
        password: passwordEl.value
      }),
      headers: { 'Content-Type': 'application/json'}
    })
      .then(function() {
        document.location.replace('/');
      })
      .catch (err => console.log(err));
  };
  
  //   if (username && email && password) {
  //     const response = await fetch('/api/users', {
  //       method: 'POST',
  //       body: JSON.stringify({ username, email, password }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     if (response.ok) {
  //       console.log('success');
  //       document.location.replace('/topic');
  //     } else {
  //       alert('Failed to sign up.');
  //     }
  //   }
  // };
  

  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

