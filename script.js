//your JS code here. If required.
const container = document.getElementById("boxConatiner");
for(let i=0;i<800;i++){
	const box = document.createElement("div");
	box.className = "square";
	box.addEventListener("mouseover", () => {
		box.style.backgroundcolor="red";
	});
	container.appendChild(box);
}