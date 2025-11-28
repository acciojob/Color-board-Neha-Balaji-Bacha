//your JS code here. If required.
const container = document.getElementById("boxcontainer");
for(let i=0;i<800;i++){
	const box = document.createElement("div");
	box.className = "square";
	box.addEventListener("mouseover", () => {
		box.style.backgroundcolor="red";
		setTimeout(()=> {
			box.style.backgroundcolor = "black";
		},1000);
	});
	container.appendChild(box);
}