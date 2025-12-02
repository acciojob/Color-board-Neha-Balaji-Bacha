const container = document.getElementById("boxContainer");

for (let i = 0; i < 800; i++) {
  const box = document.createElement("div");
  box.className = "square";
  box.addEventListener("mouseover", () =>{
	  const color = `hsl(${Math.random() * 360}, 70%, 50%)`;
      box.style.backgroundColor = color;
  })
  box.addEventListener("mouseout", () =>{
	  box.style.backgroundColor = 'rgb(29, 29, 29)';
  })
	container.appendChild(box);
}