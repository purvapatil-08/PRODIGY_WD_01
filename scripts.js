function searchDestinations() {
    const searchInput = document.getElementById('search').value;
    if (searchInput) {
        alert(`Searching for destinations: ${searchInput}`);
    } else {
        alert('Please enter a destination to search for.');
    }
}
