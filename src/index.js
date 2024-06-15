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