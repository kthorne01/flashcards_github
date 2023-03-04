window.onload = randomizeStarPositions;

window.onload = function () {
  loadFavoritesFromStorage();
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

// Function to display the current word and sentence on the flashcard, but I removed the sentence
// Also marks the favorite button when you click it and resets to not favorited when you go to the next word
function displayWord() {
  wordEl.textContent = words[currentIndex].word;
  if (favorites.includes(words[currentIndex])) {
    favoriteEl.classList.add("favorited");
  } else {
    favoriteEl.classList.remove("favorited");
  }
}


function loadFavoritesFromStorage() {
  if(localStorage.getItem("favorites")){
    favorites = JSON.parse(localStorage.getItem("favorites"));
    displayFavorites();
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
  { word: "play" },
  { word: "the" },
  { word: "we" },
  { word: "are" },
  { word: "me" },
  { word: "she" },
  { word: "with" },
  { word: "for" },
  { word: "and" },
  { word: "have" },
  { word: "see" },
  { word: "does" },
  { word: "not" },
  { word: "school" },
  { word: "what" },
];

let set3 = [
  { word: "down" },
  { word: "out" },
  { word: "very" },
  { word: "up" },
  { word: "be" },
  { word: "come" },
  { word: "good" },
  { word: "pull" },
  { word: "fun" },
  { word: "make" },
  { word: "they" },
  { word: "too" },
  { word: "jump" },
  { word: "move" },
  { word: "run" },
];

let set4 = [
  { word: "two" },
  { word: "again" },
  { word: "help" },
  { word: "new" },
  { word: "there" },
  { word: "use" },
  { word: "could" },
  { word: "live" },
  { word: "one" },
  { word: "then" },
  { word: "three" },
  { word: "eat" },
  { word: "no" },
  { word: "of" },
  { word: "under" },
];

let set5 = [
  { word: "who" },
  { word: "all" },
  { word: "call" },
  { word: "day" },
  { word: "her" },
  { word: "want" },
  { word: "around" },
  { word: "by" },
  { word: "place" },
  { word: "many" },
  { word: "walk" },
  { word: "away" },
  { word: "now" },
  { word: "some" },
  { word: "today" },
];

let set6 = [
  { word: "way" },
  { word: "why" },
  { word: "green" },
  { word: "grow" },
  { word: "pretty" },
  { word: "should" },
  { word: "together" },
  { word: "water" },
  { word: "from" },
  { word: "any" },
  { word: "happy" },
  { word: "once" },
  { word: "ago" },
  { word: "boy" },
  { word: "girl" },
];

let set7 = [
  { word: "how" },
  { word: "old" },
  { word: "people" },
  { word: "after" },
  { word: "buy" },
  { word: "done" },
  { word: "every" },
  { word: "soon" },
  { word: "work" },
  { word: "about" },
  { word: "animal" },
  { word: "carry" },
  { word: "eight" },
  { word: "give" },
  { word: "our" },
];

let set8 = [
  { word: "blue" },
  { word: "into" },
  { word: "or" },
  { word: "because" },
  { word: "other" },
  { word: "small" },
  { word: "find" },
  { word: "food" },
  { word: "more" },
  { word: "over" },
  { word: "start" },
  { word: "warm" },
  { word: "caught" },
  { word: "flew" },
  { word: "know" },
];

let set9 = [
  { word: "laugh" },
  { word: "listen" },
  { word: "were" },
  { word: "found" },
  { word: "hard" },
  { word: "near" },
  { word: "woman" },
  { word: "would" },
  { word: "write" },
  { word: "four" },
  { word: "large" },
  { word: "none" },
  { word: "only" },
  { word: "put" },
  { word: "round" },
];

let set10 = [
  { word: "another" },
  { word: "climb" },
  { word: "full" },
  { word: "great" },
  { word: "poor" },
  { word: "began" },
  { word: "better" },
  { word: "guess" },
  { word: "learn" },
  { word: "through" },
  { word: "right" },
  { word: "sure" },
  { word: "color" },
  { word: "early" },
  { word: "instead" },
];

let set11 = [
  { word: "oh" },
  { word: "thought" },
  { word: "above" },
  { word: "nothing" },
  { word: "build" },
  { word: "fall" },
  { word: "knew" },
  { word: "money" },
  { word: "toward" },
  { word: "answer" },
  { word: "brought" },
  { word: "busy" },
  { word: "door" },
  { word: "enough" },
  { word: "eyes" },
];

let set12 = [
  { word: "brother" },
  { word: "father" },
  { word: "friend" },
  { word: "love" },
  { word: "mother" },
  { word: "picture" },
  { word: "been" },
  { word: "children" },
  { word: "month" },
  { word: "question" },
  { word: "their" },
  { word: "year" },
  { word: "before" },
  { word: "front" },
  { word: "heard" },
];

let set13 = [
  { word: "push" },
  { word: "tomorrow" },
  { word: "your" },
  { word: "favorite" },
  { word: "few" },
  { word: "gone" },
  { word: "surprise" },
  { word: "wonder" },
  { word: "young" },
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

function saveWord() {
  if (favorites.includes(words[currentIndex])) {
    let index = favorites.indexOf(words[currentIndex]);
    favorites.splice(index, 1);
    favoriteEl.classList.remove("favorited");
  } else {
    favorites.push(words[currentIndex]);
    favoriteEl.classList.add("favorited");
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  displayFavorites();
  
}

// Event listener for the favorite button to add or remove the current word from the favorites list
favoriteEl.addEventListener("click", function(){
  saveWord()
  if (favorites.includes(words[currentIndex])) {
    favoriteEl.classList.add("favorited");
  }
});

// When users favorite a word by touching the heart, it will turn red and next word will reset to not favorited
// ....on swipe

favoriteEl.addEventListener("touchend", function (event) {
  event.preventDefault();
  saveWord()
});

// Event listener for the favorite buttong to add or remove the current word from the favorites list with swiping
// favoriteEl.addEventListener("touchend", function () {
//   if (favorites.includes(words[currentIndex])) {
//     let index = favorites.indexOf(words[currentIndex]);
//     favorites.splice(index, 1);
//     favoriteEl.classList.remove("favorited");
//   } else {
//     favorites.push(words[currentIndex]);
//     favoriteEl.classList.add("favorited");
//   }
//   displayFavorites();
//   if (favorites.includes(words[currentIndex])) {
//     favoriteEl.classList.add("favorited");
//   }
// });


// let touchStartX = 0;
// let touchEndX = 0;

// flashcard.addEventListener("touchstart", function (event) {
//   touchStartX = event.touches[0].clientX;
// });

// flashcard.addEventListener("touchend", function (event) {
//   touchEndX = event.changedTouches[0].clientX;
//   let swipeDistance = touchEndX - touchStartX;
//   if (swipeDistance < -minDistance) {
//     // swipe left, go to next card
//     currentIndex++;
//     if (currentIndex >= words.length) {
//       currentIndex = 0;
//     }
//     displayWord();
//   } else if (swipeDistance > minDistance) {
//     // swipe right, go to previous card
//     if (currentIndex > 0) {
//       currentIndex--;
//       displayWord();
//     }
//   } else {
//     // tap, toggle favorite
//     if (favorites.includes(words[currentIndex])) {
//       let index = favorites.indexOf(words[currentIndex]);
//       favorites.splice(index, 1);
//       favoriteEl.classList.remove("favorited");
//     } else {
//       favorites.push(words[currentIndex]);
//       favoriteEl.classList.add("favorited");
//     }
//     displayFavorites();
//     if (favorites.includes(words[currentIndex])) {
//       favoriteEl.classList.add("favorited");
//     }
//   }
// });






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

// When I add this code in, it stops my stars from working and it does not get the heart to turn back gray
// let swipe = new Hammer(flashcard);
// swipe.on("swipeleft", function () {
//   if (currentIndex < words.length - 1) {
//     currentIndex++;
//     displayWord();
//   }
// });
// swipe.on("swiperight", function () {
//   if (currentIndex > 0) {
//     currentIndex--;
//     displayWord();
//   }
// });
// swipe.get("swipe").set({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: minDistance });

// ******Stars******

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
