// Function to handle form submission
function searchButton(event) {
	event.preventDefault();
	const searchInput = document.querySelector("#city-input").value.trim();

	if (searchInput) {
		document.querySelector("#city-display").textContent = searchInput;
		fetchWeatherData(searchInput);
	} else {
		alert("Please enter a city name.");
	}
}

document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#search-form").addEventListener("submit", searchButton);
});

// Function to display the date and time
function updateDateTime() {
	const now = new Date();
	document.querySelector("#current-date").textContent = now.toLocaleString();
}

document.addEventListener("DOMContentLoaded", function () {
	setInterval(updateDateTime, 1000);
});



