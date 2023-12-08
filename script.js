const maps = ['Afghan', 'Alley', 'Blacksite', 'Derail', 'Estate', 'Exhibit', 'Favela', 'Greece', 'Highrise', 'Invasion', 'Karachi', 'Meat', 'Quarry', 'Rust', 'Rundown', 'Scrapyard', 'Shipment', 'Skidrow', 'Sub Base', 'Terminal', 'Training Facility', 'Underpass', 'Wasteland'];

function generateMapList() {
    const mapList = document.getElementById('mapList');
    mapList.innerHTML = '';

    const shuffledMaps = shuffleArray(maps.slice()); // Create a shuffled copy of the maps array

    for (let i = 0; i < 10; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = shuffledMaps[i];
        mapList.appendChild(listItem);

        // Add a line break after each list item
        mapList.appendChild(document.createElement('br'));
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
