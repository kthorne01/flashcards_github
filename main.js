import { set1, set3, set4, set5, set6, set7, set8, set9, set10, set11, set12, set13 } from './wordsets1.js';
import { set2 } from './wordsets2.js';

// window.onload = randomizeStarPositions;

window.onload = function () {
  randomizeStarPositions();  
  displayWord();
  addWordLists();

  let showFavoritesEl = document.getElementById("show-favorites");
  showFavoritesEl.addEventListener("click", function () {
    words = favorites;
    currentIndex = 0;
    displayWord();
  });
};

let words = set1;
let currentIndex = 0;
let favorites = [];

let flashcard = document.getElementById("flashcard");
let wordEl = document.getElementById("word");
let favoriteEl = document.getElementById("favorite");
let favoriteListEl = document.getElementById("favorite-list");
let prevEl = document.getElementById("prev");
let nextEl = document.getElementById("next");
// let set1El = document.getElementById("set1");
// let set2El = document.getElementById("set2");
// let set3El = document.getElementById("set3");

// Function to display the current word and sentence on the flashcard, but I removed the sentence
// Also marks the favorite button when you click it and resets to not favorited when you go to the next word

// function displayWord() {
//   wordEl.textContent = words[currentIndex].word;
//   if (favorites.includes(words[currentIndex])) {
//     favoriteEl.classList.add("favorited");
//   } else {
//     favoriteEl.classList.remove("favorited");
//   }
// }

function displayWord() {
    console.log(words); // This should log the whole array
    console.log(words[currentIndex]); // This should log the current word object
  
    wordEl.textContent = words[currentIndex].word;
    if (favorites.includes(words[currentIndex])) {
      favoriteEl.classList.add("favorited");
    } else {
      favoriteEl.classList.remove("favorited");
    }
  }
  

// When users favorite a word by touching the heart, it will turn red and next word will reset to not favorited
// ....on swipe

favoriteEl.addEventListener("touchend", function (event) {
  event.preventDefault();
  if (favorites.includes(words[currentIndex])) {
    let index = favorites.indexOf(words[currentIndex]);
    favorites.splice(index, 1);
    favoriteEl.classList.remove("favorited");
  } else {
    favorites.push(words[currentIndex]);
    favoriteEl.classList.add("favorited");
  }
  displayFavorites();
});


// Function to display the list of favorited words on the right side of the page
//Added this on script5
function displayFavorites() {
  favoriteListEl.innerHTML = "";
  for (let i = 0; i < favorites.length; i++) {
    let li = document.createElement("li");
    li.textContent = favorites[i].word;
    favoriteListEl.appendChild(li);
  }
}


function addWordLists() {
  const selectEl = document.querySelector("select");
  selectEl.addEventListener("change", function () {
    
    const selectedSet = selectEl.value;
    if (selectedSet === "set1") {
      words = set1;
    } else if (selectedSet === "set2") {
      words = set2;
    } else if (selectedSet === "set3") {
      words = set3;
    }else if (selectedSet === "set4") {
      words = set4;
    }else if (selectedSet === "set5") {
      words = set5;
    }else if (selectedSet === "set6") {
      words = set6;
    }else if (selectedSet === "set7") {
      words = set7;
    }else if (selectedSet === "set8") {
      words = set8;
    }else if (selectedSet === "set9") {
      words = set9;
    }else if (selectedSet === "set10") {
      words = set10;
    }else if (selectedSet === "set11") {
      words = set11;
    }else if (selectedSet === "set12") {
      words = set12;
    }else if (selectedSet === "set13") {
      words = set13;
    }
    currentIndex = 0;
    displayWord();
  });

}
// Event listener for the favorite button to add or remove the current word from the favorites list
favoriteEl.addEventListener("click", function () {
  if (favorites.includes(words[currentIndex])) {
    let index = favorites.indexOf(words[currentIndex]);
    favorites.splice(index, 1);
    favoriteEl.classList.remove("favorited");
  } else {
    favorites.push(words[currentIndex]);
    favoriteEl.classList.add("favorited");
  }
  displayFavorites();
  if (favorites.includes(words[currentIndex])) {
    favoriteEl.classList.add("favorited");
  }
});

// Event listeners for the previous and next buttons to navigate through the words
prevEl.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    displayWord();
  }
});
nextEl.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= words.length) {
    currentIndex = 0;
  }
  displayWord();
});

// Swipe Ability by adding touch event listeners or swipe event listeners
let startTouchX = null;

flashcard.addEventListener("touchstart", function (event) {
  startTouchX = event.touches[0].clientX;
});

flashcard.addEventListener("touchend", function (event) {
  let endTouchX = event.changedTouches[0].clientX;
  let deltaX = endTouchX - startTouchX;

  if (deltaX > 50) { // swipe right
    prevEl.click();
  } else if (deltaX < -50) { // swipe left
    nextEl.click();
  }
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
