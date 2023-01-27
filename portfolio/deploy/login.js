const form = document.getElementById("login-form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the form from submitting

  // get the values of the form fields
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // validate the form input
  if (!username || !password) {
    alert("Please enter a username and password.");
    return;
  }

  // send a request to the server to authenticate the user
  fetch("/authenticate", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Invalid username or password.");
    })
    .then((data) => {
      // handle successful login
    })
    .catch((error) => {
      alert(error.message);
    });
});
c