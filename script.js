const container = document.getElementById("boxContainer");

for (let i = 0; i < 800; i++) {
  const box = document.createElement("div");
  box.className = "square";

  box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "red";     // change color on hover
    setTimeout(() => {
      box.style.backgroundColor = "black"; // remove after 1 sec
    }, 1000);
  });

  container.appendChild(box);
}