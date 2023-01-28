let currentPokemon;
let currentPokemonPopUp;
let loading = false;
let page0 = false;
let page1 = false;
let page2 = false;
let page0delete = false;
let page1delete = false;
let page2delete = false;

function getId(id) {
    return document.getElementById(id);
}

function next() {
    if (page2) {
        page0 = false;
        page1 = false;
        page2 = false;
        loadPokemonsPage3();
    }
    if (page1) {
        page0 = false;
        page1 = false;
        page2 = true;
        loadPokemonsPage2();
    }
    if (page0) {
        page0 = false;
        page1 = true;
        page2 = false;
        loadPokemonsPage1()
    }
}

function previous() {
    if (page0delete) {
        document.getElementById('container2').innerHTML = '';
        page0 = true;
        page1 = false;
        page2 = false;
        page0delete = false;
        page1delete = false;
        page2delete = false;
    }
    if (page1delete) {
        document.getElementById('container3').innerHTML = '';
        page0 = false;
        page1 = true;
        page2 = false;
        page0delete = true;
        page1delete = false;
        page2delete = false;
    }
    if (page2delete) {
        document.getElementById('container4').innerHTML = '';
        page0 = false;
        page1 = false;
        page2 = true;
        page0delete = false;
        page1delete = true;
        page2delete = false;
    }
}

async function loadPokemons() {
    document.getElementById('main-nav').classList.remove('d-none');
    document.getElementById('gallery_btn').classList.add('d-none');
    document.getElementById('search').value = '';
    document.getElementById('container').innerHTML = '';
    loading = true;
    for (let i = 0; i < 50; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        pokemonAmount++;
        document.getElementById('container').innerHTML += renderPokemons(i);
        changeColor(i);
        if (loading) {
            document.getElementById(`pokeballContainer${i}`).classList.add('removeHover');
            document.getElementById('main-nav').classList.add('removeHover');
            document.getElementById('search').disabled = true;
        }
    }
    addPointerEvent()
    loading = false;
    page0 = true;
}

async function loadPokemonsPage1() {
    document.getElementById('container2').innerHTML = '';
    loading = true;
    for (let i = 50; i < 100; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        pokemonAmount++;
        document.getElementById('container2').innerHTML += renderPokemons(i);
        changeColor(i);
        if (loading) {
            document.getElementById(`pokeballContainer${i}`).classList.add('removeHover');
            document.getElementById('main-nav').classList.add('removeHover');
            document.getElementById('search').disabled = true;
        }
    }
    addPointerEvent1()
    loading = false;
    page0delete = true;
}

async function loadPokemonsPage2() {
    document.getElementById('container3').innerHTML = '';
    loading = true;
    for (let i = 100; i < 150; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        pokemonAmount++;
        document.getElementById('container3').innerHTML += renderPokemons(i);
        changeColor(i);
        if (loading) {
            document.getElementById(`pokeballContainer${i}`).classList.add('removeHover');
            document.getElementById('main-nav').classList.add('removeHover');
            document.getElementById('search').disabled = true;
        }
    }
    addPointerEvent2()
    loading = false;
    page0delete = false;
    page1delete = true;
}

async function loadPokemonsPage3() {
    document.getElementById('container4').innerHTML = '';
    loading = true;
    for (let i = 150; i < 200; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        pokemonAmount++;
        document.getElementById('container4').innerHTML += renderPokemons(i);
        changeColor(i);
        if (loading) {
            document.getElementById(`pokeballContainer${i}`).classList.add('removeHover');
            document.getElementById('main-nav').classList.add('removeHover');
            document.getElementById('search').disabled = true;
        }
    }
    addPointerEvent3()
    loading = false;
    page1delete = false;
    page2delete = true;
}

function addPointerEventSearch() {
    document.getElementById(`container`).classList.remove('removeHover');
    document.getElementById('gallery_btn').classList.remove('removeHover');
    document.getElementById('search_icon').classList.remove('d-none');
    document.getElementById('search').disabled = false;
}

function addPointerEvent() {
    for (let i = 0; i < 50; i++) {
        document.getElementById(`pokeballContainer${i}`).classList.remove('removeHover');
        document.getElementById('main-nav').classList.remove('removeHover');
        document.getElementById('search').disabled = false;
    }
}

function addPointerEvent1() {
    for (let i = 50; i < 100; i++) {
        document.getElementById(`pokeballContainer${i}`).classList.remove('removeHover');
        document.getElementById('main-nav').classList.remove('removeHover');
        document.getElementById('search').disabled = false;
    }
}

function addPointerEvent2() {
    for (let i = 100; i < 150; i++) {
        document.getElementById(`pokeballContainer${i}`).classList.remove('removeHover');
        document.getElementById('main-nav').classList.remove('removeHover');
        document.getElementById('search').disabled = false;
    }
}

function addPointerEvent3() {
    for (let i = 150; i < 200; i++) {
        document.getElementById(`pokeballContainer${i}`).classList.remove('removeHover');
        document.getElementById('main-nav').classList.remove('removeHover');
        document.getElementById('search').disabled = false;
    }
}

// Hier werden alle Pokemons jeweils (i) geladen!

function renderPokemons(i) {
    return `
    <div onclick="openPopUp(${i})" class="pokeball-container" id="pokeballContainer${i}">
        <img class="poke_pic" id="pokePic${i}" src="${currentPokemon["sprites"]['other']['official-artwork']['front_default']}">
        <h2 class="pokemon-Name-Main-Paige" id="pokename${i}">#${currentPokemon.id} ${capitalizeFirstLetter(currentPokemon.name)}</h2>
        <div class="element" id="element${i}">${capitalizeFirstLetter(currentPokemon.types['0'].type.name)}</div>
    </div>
    ${renderPopUp(i)}`;
}

function checkType(i) {
    if (currentPokemon['types'].length == 1) {
        return `<h4 class="type1" id="type1${i}">${capitalizeFirstLetter(currentPokemon.types['0'].type.name)}</h4>`;
    }
    else {
        return `<div class="type-box">        
        <h4 class="type1" id="type1${i}">${capitalizeFirstLetter(currentPokemon.types['0'].type.name)}</h4>
        <h4 class="type2" id="type2${i}">${capitalizeFirstLetter(currentPokemon.types['1'].type.name)}</h4>
        </div>`;
    }
}

// Gallery-Modus: Hier kann zwischen den Poekodex-Bildern hin- und hergewechselt werden!

let pokemonAmount = 0;
let about_clicked = false;
let baseStats_clicked = false;
let evolution_clicked = false;
let moves_clicked = false;

async function openPopUp(i) {
    document.getElementById(`popUp${i}`).classList.remove('d-none');
    let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
    let response = await fetch(url);
    currentPokemonPopUp = await response.json();
    document.getElementById(`about${i}`).classList.add('nav-section-clicked');
    document.getElementById(`card-content(${i})`).style = "opacity: 1;"
    document.getElementById(`btn_nav(${i})`).style = "opacity: 1;"

    if (about_clicked) {
        about(i);
    }

    if (baseStats_clicked) {
        baseStats(i);
    };

    if (evolution_clicked) {
        evolution(i);
    }

    if (moves_clicked) {
        moves(i);
    }
}

function closePopUp(i) {
    document.getElementById(`popUp${i}`).classList.add('d-none');
}

function imgSlide(i) {

    closePopUp(i);
    if (i < pokemonAmount - 1) {
        ++i;
        openPopUp(i);
    }
    document.getElementById(`about${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`baseStat${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`evolution${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`moves${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`card-content(${i})`).style = "opacity: 0;"
    document.getElementById(`btn_nav(${i})`).style = "opacity: 0;"
}

function imgSlideBackwards(i) {

    closePopUp(i);
    if (i > 0) {
        --i;
        openPopUp(i);
    }
    document.getElementById(`about${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`baseStat${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`evolution${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`moves${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`card-content(${i})`).style = "opacity: 0;"
    document.getElementById(`btn_nav(${i})`).style = "opacity: 0;"
}

function capitalizeFirstLetter(string) {
    // console.log(string.charAt(0).toUpperCase() + string.slice(1));
    return string.charAt(0).toUpperCase() + string.slice(1);
}

async function filterNames() {
    document.getElementById('main-nav').classList.add('d-none');
    document.getElementById('gallery_btn').classList.remove('d-none');
    document.getElementById('search_icon').classList.remove('d-none');
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    document.getElementById('container2').innerHTML = '';
    document.getElementById('container3').innerHTML = '';
    document.getElementById('container4').innerHTML = '';
    let container = document.getElementById('container');
    container.innerHTML = '';
    loading = true;
    for (let i = 0; i < 200; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        searchPokemon = await response.json();
        pokemonAmount++;
        let searchBox = searchPokemon.name;
        if (searchBox.indexOf(search) == 0 && search.length >= 1) {
            container.innerHTML += `
            <div onclick="openPopUpSearch(${i})" class="pokeball-container" id="pokeballContainer${i}">
                <h2 class="pokemon-Name-Main-Paige" id="pokename${i}">#${searchPokemon.id} ${capitalizeFirstLetter(searchBox)}</h2>
                <div class="element" id="element${i}">${capitalizeFirstLetter(searchPokemon.types['0'].type.name)}</div>
            </div>
            ${renderPopUpSearch(i)};
            `;
            changeColor(i);
        }
        if (loading) {
            document.getElementById(`container`).classList.add('removeHover');
            document.getElementById('gallery_btn').classList.add('removeHover');
            document.getElementById('search').disabled = true;
            document.getElementById('search_icon').classList.add('d-none');
        }
    }
    addPointerEventSearch()
    loading = false;
}

function checkTypeSearch(i) {
    if (searchPokemon['types'].length == 1) {
        return `<h4 class="type1" id="type1${i}">${capitalizeFirstLetter(searchPokemon.types['0'].type.name)}</h4>`;
    }
    else {
        return `<div class="type-box">        
        <h4 class="type1" id="type1${i}">${capitalizeFirstLetter(searchPokemon.types['0'].type.name)}</h4>
        <h4 class="type2" id="type2${i}">${capitalizeFirstLetter(searchPokemon.types['1'].type.name)}</h4>
        </div>`;
    }
}

// Gallery-Modus: Hier kann zwischen den Poekodex-Bildern im Searchmodus hin- und hergewechselt werden!

async function openPopUpSearch(i) {
    document.getElementById(`popUp${i}`).classList.remove('d-none');
    let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
    let response = await fetch(url);
    searchPokemonPopUp = await response.json();
    document.getElementById(`card-content(${i})`).style = "opacity: 1;"
    document.getElementById(`btn_nav(${i})`).style = "opacity: 1;"

    if (about_clicked) {
        aboutSearch(i);
    }

    if (baseStats_clicked) {
        baseStatsSearch(i);
    };

    if (evolution_clicked) {
        evolutionSearch(i);
    }

    if (moves_clicked) {
        movesSearch(i);
    }
}
