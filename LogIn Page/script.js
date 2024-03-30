 
      function myMenuFunction() {
        var i = document.getElementById("navMenu");

        if (i.className === "nav-menu") {
          i.className += " responsive";
        } else {
          i.className = "nav-menu";
        }
      }
 

   
      var a = document.getElementById("loginBtn");
      var b = document.getElementById("registerBtn");
      var x = document.getElementById("login");
      var y = document.getElementById("register");

      function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
      }

      function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
      }
    // document.getElementById("signup-link").addEventListener("click", function(event) {
//   event.preventDefault();
//   document.querySelector(".login-form").classList.remove("slide-in");
//   document.querySelector(".signup-form").classList.add("slide-in");
// });

// document.getElementById("login-link").addEventListener("click", function(event) {
//   event.preventDefault();
//   document.querySelector(".signup-form").classList.remove("slide-in");
//   document.querySelector(".login-form").classList.add("slide-in");
// });

// document.getElementById("login-form").addEventListener("submit", function(event) {
//   event.preventDefault();
//   var username = document.getElementById("login-username").value;
//   var password = document.getElementById("login-password").value;
//   var loginMessage = document.getElementById("login-message");

//   // Check if user exists in localStorage
//   var user = JSON.parse(localStorage.getItem(username));
//   if (user && user.password === password) {
//     loginMessage.textContent = "Login successful!";
//     // You can redirect or perform any other action here after successful login
//   } else {
//     loginMessage.textContent = "Invalid username or password.";
//   }
// });

// document.getElementById("signup-form").addEventListener("submit", function(event) {
//   event.preventDefault();
//   var email = document.getElementById("signup-email").value;
//   var username = document.getElementById("signup-username").value;
//   var password = document.getElementById("signup-password").value;
//   var signupMessage = document.getElementById("signup-message");

//   // Check if username already exists in localStorage
//   if (localStorage.getItem(username)) {
//     signupMessage.textContent = "Username already exists. Please choose another one.";
//   } else {
//     // Save new user data to localStorage
//     var newUser = {
//       email: email,
//       username: username,
//       password: password
//     };
//     localStorage.setItem(username, JSON.stringify(newUser));
//     signupMessage.textContent = "Sign up successful!";
//     // You can redirect or perform any other action here after successful signup
//   }
// });
document.getElementById("signup-link").addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector(".login-form").classList.remove("slide-in");
  document.querySelector(".signup-form").classList.add("slide-in");
});

document.getElementById("login-link").addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector(".signup-form").classList.remove("slide-in");
  document.querySelector(".login-form").classList.add("slide-in");
});

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;
  var loginMessage = document.getElementById("login-message");

  // Check if user exists in localStorage
  var user = JSON.parse(localStorage.getItem(username));
  if (user && user.password === password) {
    // Alert for successful login
    alert("Login successful!");
    // You can redirect or perform any other action here after successful login
  } else {
    loginMessage.textContent = "Invalid username or password.";
  }
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("signup-email").value;
  var username = document.getElementById("signup-username").value;
  var password = document.getElementById("signup-password").value;
  var signupMessage = document.getElementById("signup-message");

  // Check if username already exists in localStorage
  if (localStorage.getItem(username)) {
    signupMessage.textContent = "Username already exists. Please choose another one.";
  } else {
    // Save new user data to localStorage
    var newUser = {
      email: email,
      username: username,
      password: password
    };
    localStorage.setItem(username, JSON.stringify(newUser));
    // Alert for successful signup
    alert("Sign up successful!");
    // You can redirect or perform any other action here after successful signup
  }
});
