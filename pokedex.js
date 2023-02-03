let currentPokemon;
let searchPokemon;
let currentPokemonPopUp;
let searchPokemonPopUp;
let loading = false;
let page = false;
let page0 = false;
let page1 = false;
let page2 = false;
let pagedeleteAll = false;
let page0delete = false;
let page1delete = false;
let page2delete = false;

function getId(id) {
    return document.getElementById(id);
}

function next() {
    if (page2) {
        page = false;
        page0 = false;
        page1 = false;
        page2 = false;
        loadPokemonsPage3();
    }
    if (page1) {
        page = false;
        page0 = false;
        page1 = false;
        page2 = true;
        loadPokemonsPage2();
    }
    if (page0) {
        page = false;
        page0 = false;
        page1 = true;
        page2 = false;
        loadPokemonsPage1();
    }
    if (page) {
        page = false;
        page0 = true;
        page1 = false;
        page2 = false;
        loadPokemons();
    }
}

function previous() {
    if (pagedeleteAll) {
        document.getElementById('container').innerHTML = '';
        page = true
        page0 = false;
        page1 = false;
        page2 = false;
        pagedeleteAll = false;
        page0delete = false;
        page1delete = false;
        page2delete = false;
    }
    if (page0delete) {
        document.getElementById('container2').innerHTML = '';
        page = false;
        page0 = true;
        page1 = false;
        page2 = false;
        pagedeleteAll = true;
        page0delete = false;
        page1delete = false;
        page2delete = false;
    }
    if (page1delete) {
        document.getElementById('container3').innerHTML = '';
        page = false;
        page0 = false;
        page1 = true;
        page2 = false;
        pagedeleteAll = false;
        page0delete = true;
        page1delete = false;
        page2delete = false;
    }
    if (page2delete) {
        document.getElementById('container4').innerHTML = '';
        page = false;
        page0 = false;
        page1 = false;
        page2 = true;
        pagedeleteAll = false;
        page0delete = false;
        page1delete = true;
        page2delete = false;
    }
}

async function loadPokemons() {
    document.getElementById('arrow-nav-start').classList.remove('d-none');
    document.getElementById('arrow-nav-end').classList.remove('d-none');
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
            document.getElementById('arrow-nav-start').classList.add('removeHover');
            document.getElementById('arrow-nav-end').classList.add('removeHover');
            document.getElementById('search_icon').classList.add('removeHover');
        }
    }
    addPointerEvent()
    loading = false;
    page0 = true;
    pagedeleteAll = true;
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
            document.getElementById('arrow-nav-start').classList.add('removeHover');
            document.getElementById('arrow-nav-end').classList.add('removeHover');
            document.getElementById('search_icon').classList.add('removeHover');
        }
    }
    addPointerEvent1()
    loading = false;
    pagedeleteAll = false;
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
            document.getElementById('arrow-nav-start').classList.add('removeHover');
            document.getElementById('arrow-nav-end').classList.add('removeHover');
            document.getElementById('search_icon').classList.add('removeHover');
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
            document.getElementById('arrow-nav-start').classList.add('removeHover');
            document.getElementById('arrow-nav-end').classList.add('removeHover');
            document.getElementById('search_icon').classList.add('removeHover');
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
    document.getElementById('search_icon').classList.remove('removeHover');
}

function addPointerEvent() {
    for (let i = 0; i < 50; i++) {
        document.getElementById(`pokeballContainer${i}`).classList.remove('removeHover');
        document.getElementById('arrow-nav-start').classList.remove('removeHover');
        document.getElementById('arrow-nav-end').classList.remove('removeHover');
        document.getElementById('search_icon').classList.remove('removeHover');
    }
}

function addPointerEvent1() {
    for (let i = 50; i < 100; i++) {
        document.getElementById(`pokeballContainer${i}`).classList.remove('removeHover');
        document.getElementById('arrow-nav-start').classList.remove('removeHover');
        document.getElementById('arrow-nav-end').classList.remove('removeHover');
        document.getElementById('search_icon').classList.remove('removeHover');
    }
}

function addPointerEvent2() {
    for (let i = 100; i < 150; i++) {
        document.getElementById(`pokeballContainer${i}`).classList.remove('removeHover');
        document.getElementById('arrow-nav-start').classList.remove('removeHover');
        document.getElementById('arrow-nav-end').classList.remove('removeHover');
        document.getElementById('search_icon').classList.remove('removeHover');
    }
}

function addPointerEvent3() {
    for (let i = 150; i < 200; i++) {
        document.getElementById(`pokeballContainer${i}`).classList.remove('removeHover');
        document.getElementById('arrow-nav-start').classList.remove('removeHover');
        document.getElementById('arrow-nav-end').classList.remove('removeHover');
        document.getElementById('search_icon').classList.remove('removeHover');
    }
}

// Every Pokemon getting loaded separately!

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

// Gallery-Mode: Here you can switch between the Pokemon PopUp cards!

let pokemonAmount = 0;
let about_clicked = false;
let baseStats_clicked = false;
let evolution_clicked = false;
let moves_clicked = false;

async function openPopUp(i) {
    document.getElementById(`popUp${i}`).classList.remove('d-none');
    document.getElementById('body').classList.add('prevent-scrolling');
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
    document.getElementById('body').classList.remove('prevent-scrolling');
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
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function filterNames() {
    document.getElementById('arrow-nav-start').classList.add('d-none');
    document.getElementById('arrow-nav-end').classList.add('d-none');
    document.getElementById('gallery_btn').classList.remove('d-none');
    document.getElementById('container2').innerHTML = '';
    document.getElementById('container3').innerHTML = '';
    document.getElementById('container4').innerHTML = '';
    document.getElementById('container').innerHTML = '';
    let search = document.getElementById('search').value.toLowerCase();
    validation(search);
    filterLoop(loading, search);
    document.getElementById('search').focus();
    loading = false;
}

function validation(search) {
    let valid = /^[a-zA-Z]+$/;
    if (search == '') {
        alert('Type in at least one character!');
        document.getElementById('search').focus();
        return false;
    } else if(!search.match(valid)) {
        alert('Type in only characters!');
        document.getElementById('search').focus();
        return false;
    }
    loading = true;
}

async function filterLoop(loading, search) {
    for (let i = 0; i < 200; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
        let response = await fetch(url);
        searchPokemon = await response.json();
        pokemonAmount++;
        let searchBox = searchPokemon.name;
        if (searchBox.indexOf(search) == 0 && search.length >= 1) {
            document.getElementById('container').innerHTML += renderPokemonsFilter(i, searchBox);
            changeColor(i);
        }
        if (loading) {
            document.getElementById(`container`).classList.add('removeHover');
            document.getElementById('gallery_btn').classList.add('removeHover');
            document.getElementById('search_icon').classList.add('d-none');
        }
    }
    addPointerEventSearch();
}

function renderPokemonsFilter(i, searchBox) {
    return `
    <div onclick="openPopUpSearch(${i})" class="pokeball-container" id="pokeballContainer${i}">
                <h2 class="pokemon-Name-Main-Paige" id="pokename${i}">#${searchPokemon.id} ${capitalizeFirstLetter(searchBox)}</h2>
                <div class="element" id="element${i}">${capitalizeFirstLetter(searchPokemon.types['0'].type.name)}</div>
            </div>
    ${renderPopUpSearch(i)}`;
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

async function openPopUpSearch(i) {
    document.getElementById(`popUp${i}`).classList.remove('d-none');
    document.getElementById('body').classList.add('prevent-scrolling');
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