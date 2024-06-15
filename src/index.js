function displayTemperature(response) {
	cityElement.innerHTML = response.data.city;
}

function search(event) {
	event.preventDefault();
	let searchInput = document.querySelector('#search-input');
	let cityElement = document.querySelector('#city');
	cityElement.innerHTML = searchInput.value;
	searchCity(searchInput.value);

	if (searchInput) {
		document.querySelector('#search-form').textContent = searchInput;
	}
}

let searchForm = document.querySelector('#search-input');
searchForm.addEventListener('submit', search);