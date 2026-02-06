// YOUR CODE HERE
// Part 1 //
const blueButton = document.querySelector("#blue");
const greenButton = document.querySelector("#green");
const pinkButton = document.querySelector("#pink");
const blackButton = document.querySelector("#black");

const fav_color = document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output");

console.log(
    blueButton,
    greenButton,
    pinkButton,
    blackButton
);

console.log(
    fav_color,
    radioOutput
);

const blueButton = () => {
    fav_color.innerHTML += `<h3>Blue</h3><p> You picked Blue 💙</p>`;
    radioOutput = true;
}

const greenButton = () => {
    fav_color.innerHTML += `<h3>Green</h3><p> You picked Green 💚</p>`;
    radioOutput = true;
}

const pinkButton = () => {
    fav_color.innerHTML += `<h3>Pink</h3><p> You picked Pink 💕</p>`;
    radioOutput = true;
}

const blackButton = () => {
    fav_color.innerHTML += `<h3>Black</h3><p> You picked Black 🖤</p>`;
    radioOuput = true;
}

blueButton.addEventListener("click", advancePink);
greenButton.addEventListener("click", advanceGreen);
pinkButton.addEventListener("click", advanceGreen);
blackButton.addEventListener("click", advanceBlack);


// Part 2 //
// getRandomInt() - gets a random number between 1 and 100
 const getRandomInt = () => (
    Math.floor(Math.random() * 100) + 1
 )

// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.
 const is_dark = (hexNum) => {
    const rgb = hexNum
      .replace("#", "")
      .match(/.{1,2}/g)
      .map((c) => parseInt(c, 16));

      console.log( rbg);
      const average = rbg.reduce((a, b) => a + b, 0) / rbg.length;

      return true ? average < 119 : false;
 };
