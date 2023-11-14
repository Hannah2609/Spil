window.addEventListener("load", sidenVises);

let liv = 3;
let point = 0;
let rndNum;

// --------- generer random nummer -------------

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function sidenVises() {
  console.log("sidenVises");

  hideAllScreens();
  document.querySelector("#start").classList.remove("hide");

  //  document.querySelector("#startknap_container").classList.add("pulse");
  document
    .querySelector("#startknap_container")
    .addEventListener("click", VisInstructions);
}

function VisInstructions() {
  console.log("VisInstructions");

  hideAllScreens();
  document.querySelector("#instructions").classList.remove("hide");

  document.querySelector("#play_container").classList.add("pulse");
  document
    .querySelector("#play_container")
    .addEventListener("click", StartSpillet);

  // document.querySelector("#instructions_background").volume = 0.3;
  // document.querySelector("#instructions_background").play();
}

function StartSpillet() {
  console.log("startspillet");

  // document.querySelector("#instructions_background").pause();
  // document.querySelector("#background_music").volume = 0.05;
  // document.querySelector("#background_music").play();

  hideAllScreens();
  document.querySelector("#game").classList.remove("hide");

  point = 0;
  liv = 3;

  document.querySelector("#current_point").textContent = point;
  document.querySelector("#current_liv").textContent = liv;

  // document.querySelector("#winning_sound").pause();
  // document.querySelector("#losing_sound").pause();

  rndNum = generateRandomNumber(12);
  //---------- Rød plade får ny random position og falder ---------
  document.querySelector("#red_container").classList.add("pos" + rndNum);
  document.querySelector("#red_container").classList.add("falling");
  document
    .querySelector("#red_container")
    .addEventListener("mousedown", clickRed);

  rndNum = generateRandomNumber(12);
  //---------- Grøn plade får ny random position og falder ---------
  document.querySelector("#green_container").classList.add("pos" + rndNum);
  document.querySelector("#green_container").classList.add("falling");
  document
    .querySelector("#green_container")
    .addEventListener("mousedown", clickGreen);

  rndNum = generateRandomNumber(12);
  //---------- Pink plade får ny random position og falder ---------
  document.querySelector("#pink_container").classList.add("pos" + rndNum);
  document.querySelector("#pink_container").classList.add("falling");
  document
    .querySelector("#pink_container")
    .addEventListener("mousedown", clickPink);

  rndNum = generateRandomNumber(12);
  //---------- Lilla plade får ny random position og falder ---------
  document.querySelector("#lilla_container").classList.add("pos" + rndNum);
  document.querySelector("#lilla_container").classList.add("falling");
  document
    .querySelector("#lilla_container")
    .addEventListener("mousedown", clickLilla);
  //-------------- Tiden begynder ---------------
  document.querySelector("#timer_sprite").classList.add("timer");
  document
    .querySelector("#timer_sprite")
    .addEventListener("animationend", endGame);
  //Lytter efter om falling-animationen har kørt 1 gang
  document
    .querySelector("#red_container")
    .addEventListener("animationiteration", genstartRed);
  document
    .querySelector("#green_container")
    .addEventListener("animationiteration", genstartGreen);
  document
    .querySelector("#pink_container")
    .addEventListener("animationiteration", genstartPink);
  document
    .querySelector("#lilla_container")
    .addEventListener("animationiteration", genstartLilla);
}

// -------------- red -----------

function clickRed() {
  console.log("clickRed");
  document
    .querySelector("#red_container")
    .removeEventListener("mousedown", clickRed);

  // document.querySelector("#rigtig_plade_sound").volume = 0.2;
  // document.querySelector("#rigtig_plade_sound").play();

  document.querySelector("#red_container").classList.add("frys");
  document.querySelector("#red").classList.add("rotateForsvind");

  document
    .querySelector("#red_container")
    .addEventListener("animationend", genstartRed);

  point = point + 1;
  console.log(point);
  document.querySelector("#current_point").textContent = point;
  if (point === 10) {
    endGame();
  }
  document
    .querySelector("#timer_sprite")
    .addEventListener("animationend", endGame);
}

function genstartRed() {
  console.log("funktion genstart");

  document
    .querySelector("#red_container")
    .removeEventListener("animationend", genstartRed);

  //fjerner alle klasser og nyt flow
  document.querySelector("#red_container").classList = "";
  document.querySelector("#red").classList = "";
  document.querySelector("#red").offsetLeft;

  //giver ny random position og begynder falling igen
  let rndNum = generateRandomNumber(12);
  console.log(rndNum);
  document.querySelector("#red_container").classList.add("pos" + rndNum);
  document.querySelector("#red_container").classList.add("falling");
  document
    .querySelector("#red_container")
    .addEventListener("mousedown", clickRed);
}
//--------  green -----------

function clickGreen() {
  console.log("clickGreen");
  document
    .querySelector("#green_container")
    .removeEventListener("mousedown", clickGreen);

  // document.querySelector("#forkerte_plader_sound").volume = 0.5;
  // document.querySelector("#forkerte_plader_sound").play();

  document.querySelector("#green_container").classList.add("frys");
  document.querySelector("#green").classList.add("rotateForsvind");

  document
    .querySelector("#green_container")
    .addEventListener("animationend", genstartGreen);

  liv = liv - 1;
  console.log(liv);
  document.querySelector("#current_liv").textContent = liv;
  if (liv === 0) {
    endGame();
  }
  document
    .querySelector("#timer_sprite")
    .addEventListener("animationend", endGame);
}

function genstartGreen() {
  console.log("funktion genstart");

  document
    .querySelector("#green_container")
    .removeEventListener("animationend", genstartGreen);

  //fjerner alle klasser og nyt flow
  document.querySelector("#green_container").classList = "";
  document.querySelector("#green").classList = "";
  document.querySelector("#green").offsetLeft;

  //giver ny random position og begynder falling igen
  let rndNum = generateRandomNumber(12);
  console.log(rndNum);
  document.querySelector("#green_container").classList.add("pos" + rndNum);

  document.querySelector("#green_container").classList.add("falling");
  document
    .querySelector("#green_container")
    .addEventListener("mousedown", clickGreen);
}

//--------  pink  -----------

function clickPink() {
  console.log("clickPink");
  document
    .querySelector("#pink_container")
    .removeEventListener("mousedown", clickPink);

  // document.querySelector("#forkerte_plader_sound").volume = 0.5;
  // document.querySelector("#forkerte_plader_sound").play();

  document.querySelector("#pink_container").classList.add("frys");
  document.querySelector("#pink").classList.add("rotateForsvind");

  document
    .querySelector("#pink_container")
    .addEventListener("animationend", genstartPink);

  liv = liv - 1;
  console.log(liv);
  document.querySelector("#current_liv").textContent = liv;
  if (liv === 0) {
    endGame();
  }
  document
    .querySelector("#timer_sprite")
    .addEventListener("animationend", endGame);
}

function genstartPink() {
  console.log("funktion genstart");

  document
    .querySelector("#pink_container")
    .removeEventListener("animationend", genstartPink);

  //fjerner alle klasser og nyt flow
  document.querySelector("#pink_container").classList = "";
  document.querySelector("#pink").classList = "";
  document.querySelector("#pink").offsetLeft;

  //giver ny random position og begynder falling igen
  let rndNum = generateRandomNumber(12);
  console.log(rndNum);
  document.querySelector("#pink_container").classList.add("pos" + rndNum);

  document.querySelector("#pink_container").classList.add("falling");
  document
    .querySelector("#pink_container")
    .addEventListener("mousedown", clickPink);
}

//--------  Lilla  -----------

function clickLilla() {
  console.log("clickLilla");
  document
    .querySelector("#lilla_container")
    .removeEventListener("mousedown", clickLilla);

  // document.querySelector("#forkerte_plader_sound").volume = 0.5;
  // document.querySelector("#forkerte_plader_sound").play();

  document.querySelector("#lilla_container").classList.add("frys");
  document.querySelector("#lilla").classList.add("rotateForsvind");

  document
    .querySelector("#lilla_container")
    .addEventListener("animationend", genstartLilla);

  liv = liv - 1;
  console.log(liv);
  document.querySelector("#current_liv").textContent = liv;
  if (liv === 0) {
    endGame();
  }
  document
    .querySelector("#timer_sprite")
    .addEventListener("animationend", endGame);
}

function genstartLilla() {
  console.log("funktion genstart");

  document
    .querySelector("#lilla_container")
    .removeEventListener("animationend", genstartLilla);

  //fjerner alle klasser og nyt flow
  document.querySelector("#lilla_container").classList = "";
  document.querySelector("#lilla").classList = "";
  document.querySelector("#lilla").offsetLeft;

  //giver ny random position og begynder falling igen
  let rndNum = generateRandomNumber(12);
  console.log(rndNum);
  document.querySelector("#lilla_container").classList.add("pos" + rndNum);

  document.querySelector("#lilla_container").classList.add("falling");
  document
    .querySelector("#lilla_container")
    .addEventListener("mousedown", clickLilla);
}

//------------------ end game -------------
function endGame() {
  console.log("endGame" + liv);
  //Vundet eller tabt
  if (liv === 0) {
    losing();
  } else {
    if (point >= 10) {
      winning();
    } else {
      losing();
    }
  }

  // document.querySelector("#background_music").pause();

  //Stopper timer animationen og fjerner classes
  document.querySelector("#timer_sprite").classList.remove("time");
  document
    .querySelector("#timer_sprite")
    .removeEventListener("animationend", endGame);

  //fjerner alle classer på rød container og sprite
  document.querySelector("#red_container").classList = "";
  document.querySelector("#red").classList = "";

  //fjerner alle classer på grøn container og sprite
  document.querySelector("#green_container").classList = "";
  document.querySelector("#green").classList = "";

  document.querySelector("#pink_container").classList = "";
  document.querySelector("#pink").classList = "";

  document.querySelector("#lilla_container").classList = "";
  document.querySelector("#lilla").classList = "";

  // // fjerner alle event listenere på alle containere
  // document
  //   .querySelector("#red_container")
  //   .removeEventListener("animationiteration", genstartRed);
  // document
  //   .querySelector("#red_container")
  //   .removeEventListener("animationend", genstartRed);
  // document
  //   .querySelector("#red_container")
  //   .removeEventListener("mousedown", clickRed);

  //  document
  //    .querySelector("#green_container")
  //    .removeEventListener("animationiteration", genstartGreen);
  //  document
  //    .querySelector("#green_container")
  //    .removeEventListener("animationend", genstartGreen);
  //  document
  //    .querySelector("#green_container")
  //    .removeEventListener("mousedown", clickGreen);

  //  document
  //    .querySelector("#pink_container")
  //    .removeEventListener("animationiteration", genstartPink);
  //  document
  //    .querySelector("#pink_container")
  //    .removeEventListener("animationend", genstartPink);
  //  document
  //    .querySelector("#pink_container")
  //    .removeEventListener("mousedown", clickPink);

  //  document
  //    .querySelector("#lilla_container")
  //    .removeEventListener("animationiteration", genstartLilla);
  //  document
  //    .querySelector("#lilla_container")
  //    .removeEventListener("animationend", genstartLilla);
  //  document
  //    .querySelector("#lilla_container")
  //    .removeEventListener("mousedown", clickLilla);
}

// -------------- losing ------------

function losing() {
  console.log("losing");
  hideAllScreens();
  document.querySelector("#game_over").classList.remove("hide");

  document.querySelector("#timer_sprite").classList.remove("timer");
  document
    .querySelector("#replay_container")
    .addEventListener("click", StartSpillet);

  // document.querySelector("#losing_sound").volume = 0.2;
  // document.querySelector("#losing_sound").play();
}

// ------------- winning -------------

function winning() {
  console.log("winning");
  hideAllScreens();
  document.querySelector("#level_complete").classList.remove("hide");

  document.querySelector("#timer_sprite").classList.remove("timer");
  document
    .querySelector(".replay_container")
    .addEventListener("click", StartSpillet);

  // document.querySelector("#winning_sound").volume = 0.2;
  // document.querySelector("#winning_sound").play();
}

// ------------ hide screens --------

function hideAllScreens() {
  //fjerner alle skærme
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#instructions").classList.add("hide");
}
