// Parse URL parameters
const params = new URLSearchParams(window.location.search);
const imgName = params.get("img");
const desc = params.get("desc") || "No description provided.";

// Sets image source and description
document.getElementById("photo").src = `../assets/img/${imgName}`;
document.getElementById("description").textContent = decodeURIComponent(desc);
