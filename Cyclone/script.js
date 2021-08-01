let bulbs;
let bulbHit;
let bulbArr = [];
let counter = 0;
let winnerIndex;
let bulbCounter = 1;

document.getElementById("start").addEventListener("click", () => {
  bulbs = Number(document.querySelector("#bulbAmount").value);
  bulbHit = Number(document.querySelector("#speed").value);

  while (counter < bulbs) {
    const newEl = document.createElement("div");
    newEl.className = "bulb";
    newEl.id = `bulb${bulbCounter}`;
    document.getElementById("bulbs").appendChild(newEl);

    counter++;
    bulbCounter++;
  }

  const arrangeBulbsInACircle = (nodes) => {
    const radius = "10em",
      start = -100,
      $e = [...nodes],
      numberOfE = $e.length,
      slice = 360 / numberOfE,
      index = 0;

    $e.forEach((el, index) => {
      const rotate = slice * index + start;
      const rotateReverse = rotate * -1;

      el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
    });
  };

  winnerIndex = Math.floor(Math.random() * bulbs);
  counter = 0;

  document.getElementsByClassName("bulb")[counter].classList.add("active");
  document.getElementsByClassName("bulb")[winnerIndex].classList.add("winner");

  arrangeBulbsInACircle(document.getElementsByClassName("bulb"));

  const INTERVAL = setInterval(() => {
    document.getElementsByClassName("bulb")[counter].classList.remove("active");

    if (counter < bulbs - 1) {
      counter++;
    } else {
      counter = 0;
    }

    document.getElementsByClassName("bulb")[counter].classList.add("active");
  }, bulbHit);

  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(INTERVAL);
    if (
      document.getElementById(`bulb${counter + 1}`).classList.contains("winner")
    ) {
      result.textContent = "You won";
    } else {
      result.textContent = "Try again!";
    }
  });
});

document.getElementById("reset").addEventListener("click", () => {
  location.reload();
});
