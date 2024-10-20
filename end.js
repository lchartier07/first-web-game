const gameUI = document.getElementById("gameUI");

gameUI.textContent = `GAME END you SCORED: ${localStorage.getItem("score")}`;