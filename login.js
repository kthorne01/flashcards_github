document.addEventListener("DOMContentLoaded", function() {
    const loginButtonEl = document.getElementById("loginButton");
    const usernameEl = document.getElementById("username");
    const passwordEl = document.getElementById("password");
    const errorMessageEl = document.getElementById("errorMessage");

    loginButtonEl.addEventListener("click", function() {
        const usernameValue = usernameEl.value;
        const passwordValue = passwordEl.value;

        if(usernameValue === "user" && passwordValue === "pass") {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = "index.html";
        } else {
            // ...
        }
        

        // Here, you'd typically call a backend service to authenticate the user.
        // For this example, let's assume a dummy check:
        if(usernameValue === "user" && passwordValue === "pass") {
            // If login is successful, redirect to the main page
            window.location.href = "index.html";
        } else {
            // Show an error message
            errorMessageEl.textContent = "Invalid username or password!";
        }
    });
});

let stars = [];

randomizeStarPositions();
twinkleStars();
twinkleStars2();

function twinkleStars() {
  stars.forEach((star) => {
    const duration = Math.random() * 2;
    const opacity = Math.random();
    star.style.animation = `twinkle ${duration}s linear infinite`;
    star.style.opacity = opacity;
  });
}

function randomizeStarPositions() {
  let numOfStars = 250;
  for (let i = 0; i < numOfStars; i++) {
    const randomDuration = 5;
    let star = document.createElement("div");
    star.classList.add("star");
    star.id = `star${i}`;
    star.style.left = Math.floor(Math.random() * 100) + "vw";
    star.style.top = Math.floor(Math.random() * 100) + "vh";
    document.body.appendChild(star);
    stars.push(star);
  }

  let starOpacity = [];
  for (let i = 0; i < 250; i++) {
    starOpacity[i] = Math.random();
    // starOpacity[i] = 2;
  }

  function updateStars() {
    for (let i = 0; i < 250; i++) {
      let star = document.getElementById(`star${i}`);
      star.style.opacity = starOpacity[i];
    }
  }

  setInterval(updateStars, 1000);
}

function twinkleStars2() {
  stars.forEach((star) => {
    const duration = Math.random() * 2 + 3;
    // const duration = 5;
    const opacity = Math.random();
    // const opacity = 1;
    star.style.animation = `twinkle ${duration}s linear infinite`;
    star.style.opacity = opacity;
  });
}
