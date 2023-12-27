document.addEventListener("DOMContentLoaded", function () {
  function createFlake() {
    const flake = document.createElement("img");
    flake.src = "flake.png";
    flake.alt = "flake";
    const size = 20 + Math.random() * 40;
    flake.style.height = size + "px";
    flake.style.width = size + "px";
    flake.style.top = "-100px";
    flake.style.left = `${Math.random() * 100}vw`;
    flake.style.animationDuration = `${Math.random() * 2 + 1}s`;
    flake.style.animationDelay = `${Math.random()}s`;
    flake.style.transform = `rotate(${Math.random() * 360}deg)`;
    flake.classList.add("flake");

    document.body.appendChild(flake);
  }
  let iterations = 0;
  const maxIterations = 10;
  const intervalId = setInterval(createFlakes, 1000);

  function createFlakes() {
    for (let i = 0; i < 10; i++) {
      createFlake();
    }
    iterations++;
    if (iterations >= maxIterations) {
      clearInterval(intervalId);
    }
  }
});
