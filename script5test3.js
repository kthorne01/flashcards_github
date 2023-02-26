window.onload = randomizeStarPositions;

window.onload = function () {
  displayWord();
  addWordLists();

  let showFavoritesEl = document.getElementById("show-favorites");
  showFavoritesEl.addEventListener("click", function () {
    words = favorites;
    currentIndex = 0;
    displayWord();
  });
};

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

// Function to display the current word and sentence on the flashcard
// Don't need this block in script5 I think....
function displayWord() {
  wordEl.textContent = words[currentIndex].word;
  if (favorites.includes(words[currentIndex])) {
    favoriteEl.classList.add("favorited");
  } else {
    favoriteEl.classList.remove("favorited");
  }
}

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

//   function addWordLists() {
let set1 = [
  { word: "I" },
  { word: "like" },
  { word: "do" },
  { word: "to" },
  { word: "you" },
  { word: "he" },
  { word: "can" },
  { word: "go" },
  { word: "a" },
  { word: "this" },
  { word: "is" },
  { word: "my" },
  { word: "look" },
  { word: "little" },
  { word: "where" },
];

words = set1;

let set2 = [
  { word: "word1" },
  { word: "word2" },
  { word: "word3" },
  { word: "word4" },
  { word: "word5" },
  { word: "word6" },
  { word: "word7" },
  { word: "word8" },
  { word: "word9" },
  { word: "word10" },
  { word: "word11" },
  { word: "word12" },
  { word: "word13" },
  { word: "word14" },
  { word: "word15" },
];

let set3 = [
  { word: "word1" },
  { word: "word2" },
  { word: "word3" },
  { word: "word4" },
  { word: "word5" },
  { word: "word6" },
  { word: "word7" },
  { word: "word8" },
  { word: "word9" },
  { word: "word10" },
  { word: "word11" },
  { word: "word12" },
  { word: "word13" },
  { word: "word14" },
  { word: "word15" },
];

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

let stars = [];

randomizeStarPositions();
twinkleStars();

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

function twinkleStars() {
  stars.forEach((star) => {
    const duration = Math.random() * 2 + 3;
    // const duration = 5;
    const opacity = Math.random();
    // const opacity = 1;
    star.style.animation = `twinkle ${duration}s linear infinite`;
    star.style.opacity = opacity;
  });
}
