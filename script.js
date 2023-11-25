const maps = [
    'Afghan', 'Derail', 'Estate', 'Favela', 'Highrise', 'Invasion', 'Karachi', 'Quarry', 'Rust', 'Rundown',
    'Scrapyard', 'Skidrow', 'Sub Base', 'Terminal', 'Underpass', 'Wasteland'
];

function generateMapList() {
    const mapList = document.getElementById('mapList');
    mapList.innerHTML = '';

    const shuffledMaps = shuffleArray(maps.slice()); // Create a shuffled copy of the maps array

    for (let i = 0; i < 10; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = shuffledMaps[i];
        mapList.appendChild(listItem);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
