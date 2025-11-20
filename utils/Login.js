
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      // Basic validation
      if(email && password) {
        alert(`Logged in as ${email}`);
      } else {
        alert('Please fill in all fields');
      }
    });

