function renderPopUp(i) {
    return `
    <div class="pop-up d-none" id="popUp${i}">
        <div class="card-box-total">
            <div class="pop-Up-Pic">
                <div id="boxColor${i}" class="card-box1">
                <h2 class="pokemon-Name-Main-Paige" id="pokename${i}">#${currentPokemon.id} ${capitalizeFirstLetter(currentPokemon.name)}</h2>
                <img class="card-box-poke-pic" id="pokePic${i}" src="${currentPokemon["sprites"]['other']['official-artwork']['front_default']}">
                ${checkType(i)}
            </div>
            <div class="card-box2">
                <div id="popUp-nav" class="card-box2-nav">
                    <div id="nav-sections${i}" class="nav-sections">
                        <b><span id="about${i}" onclick="about(${i})" class="nav-section nav-section-clicked">About</span></b>
                        <b><span id="baseStat${i}" onclick="baseStats(${i})" class="nav-section">Base Stats</span></b>
                        <b><span id="evolution${i}" onclick="evolution(${i})" class="nav-section">Evolution</span></b>
                        <b><span id="moves${i}" onclick="moves(${i})" class="nav-section">Moves</span></b>
                    </div>
                    <div id="card-content(${i})" class="card_content">
                        <div class="about" id="progressBarBox${i}">
                            <span>Weight in hg (hectograms)</span>
                            <span><b>${currentPokemon['weight']}</b></span>
                            <div>
                                <div id="progressBar${i}" style="width: 69%"></div>
                            </div>  
                        </div>
                        <div class="about" id="progressBarBox${i}">
                            <span>Height in dm (decimetres)</span>
                            <span><b>${currentPokemon['height']}</b></span>
                            <div>
                                <div id="progressBar${i}" style="width: 7%;"></div>
                            </div>
                        </div>
                    </div>
                </div>        
                <div id="btn_nav(${i})" class="btn_nav">
                    <button class="btn_popUp" onclick="imgSlideBackwards(${i})"><img src="./img/arrow-left.png">
                    <button class="btn_popUp" onclick="closePopUp(${i})" class="btn_style"><img class="close-btn" src="./img/close-window.png"></button>
                    <button class="btn_popUp" onclick="imgSlide(${i})"><img src="./img/arrow-right.png"></button>
                </div>
            </div>
        </div>
   </div>`;
}

function about(i) {
    about_clicked = true;
    document.getElementById(`about${i}`).classList.add('nav-section-clicked');
    baseStats_clicked = false;
    document.getElementById(`baseStat${i}`).classList.remove('nav-section-clicked');
    evolution_clicked = false;
    document.getElementById(`evolution${i}`).classList.remove('nav-section-clicked');
    moves_clicked = false;
    document.getElementById(`moves${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`card-content(${i})`).style = "margin-bottom: 130px;"
    document.getElementById(`card-content(${i})`).innerHTML = '';
    document.getElementById(`card-content(${i})`).innerHTML += getAbout(i);
}

function baseStats(i) {
    baseStats_clicked = true;
    document.getElementById(`baseStat${i}`).classList.add('nav-section-clicked');
    about_clicked = false;
    document.getElementById(`about${i}`).classList.remove('nav-section-clicked');
    evolution_clicked = false;
    document.getElementById(`evolution${i}`).classList.remove('nav-section-clicked');
    moves_clicked = false;
    document.getElementById(`moves${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`card-content(${i})`).style = "margin-bottom: 8px;"
    document.getElementById(`card-content(${i})`).innerHTML = '';
    document.getElementById(`card-content(${i})`).innerHTML += getBaseStats();
}

function evolution(i) {
    evolution_clicked = true;
    document.getElementById(`evolution${i}`).classList.add('nav-section-clicked');
    about_clicked = false;
    document.getElementById(`about${i}`).classList.remove('nav-section-clicked');
    baseStats_clicked = false;
    document.getElementById(`baseStat${i}`).classList.remove('nav-section-clicked');
    moves_clicked = false;
    document.getElementById(`moves${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`card-content(${i})`).innerHTML = '';
    getEvolution(i);
}

function moves(i) {
    moves_clicked = true;
    document.getElementById(`moves${i}`).classList.add('nav-section-clicked');
    about_clicked = false;
    document.getElementById(`about${i}`).classList.remove('nav-section-clicked');
    baseStats_clicked = false;
    document.getElementById(`baseStat${i}`).classList.remove('nav-section-clicked');
    evolution_clicked = false;
    document.getElementById(`evolution${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`card-content(${i})`).style = "margin-bottom: 78px;"
    document.getElementById(`card-content(${i})`).innerHTML = '';
    document.getElementById(`card-content(${i})`).innerHTML += getMoves(i);
}

function getAbout(i) {
    return `
    <div class="about" id="progressBarBox${i}">
        <span>Weight in hg (hectograms)</span>
        <span><b>${currentPokemonPopUp['weight']}</b></span>
        <div>
            <div id="progressBar${i}"></div>
        </div>  
    </div>
    <div class="about" id="progressBarBox${i}">
        <span>Height in dm (decimetres)</span>
        <span><b>${currentPokemonPopUp['height']}</b></span>
        <div>
            <div id="progressBar${i}"></div>
        </div>
    </div>
    `;
}

function getBaseStats() {
    return `
    <table>
        <tr>
            <td>HP</td>
            <td><b>${currentPokemonPopUp['stats']['0']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${currentPokemonPopUp['stats']['0']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>Attack</td>
            <td><b>${currentPokemonPopUp['stats']['1']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${currentPokemonPopUp['stats']['1']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>Defense</td>
            <td><b>${currentPokemonPopUp['stats']['2']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${currentPokemonPopUp['stats']['2']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>Sp.Attack</td>
            <td><b>${currentPokemonPopUp['stats']['3']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${currentPokemonPopUp['stats']['3']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>Sp.Defense</td>
            <td><b>${currentPokemonPopUp['stats']['4']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${currentPokemonPopUp['stats']['4']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>Speed</td>
            <td><b>${currentPokemonPopUp['stats']['5']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${currentPokemonPopUp['stats']['5']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
    </table>
    `;
}

function getEvolution(i) {
    if (currentPokemonPopUp['abilities']['1']) {
        document.getElementById(`card-content(${i})`).style = "margin-bottom: 92px;"
        document.getElementById(`card-content(${i})`).innerHTML += `
        <table class="table-evolution">
            <tr>
                <td>Single-Ability</td>
                <td class="td-center"><b>${capitalizeFirstLetter(currentPokemonPopUp.abilities['0'].ability.name)}</b></td>
            </tr>
            <tr>
                <td>Dual-Ability</td>
                <td class="td-center"><b>${capitalizeFirstLetter(currentPokemonPopUp.abilities['1'].ability.name)}</b></td>
            </tr>
            <tr>
                <td>Base Experience</td>
                <td class="td-center"><b>${currentPokemonPopUp['base_experience']}</b></td>
            </tr>
        </table>
        `;}
    else {
        document.getElementById(`card-content(${i})`).style = "margin-bottom: 120px;"
        document.getElementById(`card-content(${i})`).innerHTML += `
        <table class="table-evolution">
            <tr>
                <td>Single-Ability</td>
                <td class="td-center"><b>${capitalizeFirstLetter(currentPokemonPopUp.abilities['0'].ability.name)}</b></td>
            </tr>
            <tr>
                <td>Base Experience</td>
                <td class="td-center"><b>${currentPokemonPopUp['base_experience']}</b></td>
            </tr>
        </table>
        `;
    }
}

function getMoves(i) {
    return `
    <div class="about" id="progressBarBox${i}">
        <span>Special Move 1</span>
        <span><b>${capitalizeFirstLetter(currentPokemonPopUp.moves['0'].move.name)}</b></span>
    </div>
    <div class="about" id="progressBarBox${i}">
        <span>Special Move 2</span>
        <span><b>${capitalizeFirstLetter(currentPokemonPopUp.moves['1'].move.name)}</b></span>
    </div>
    <div class="about" id="progressBarBox${i}">
        <span>Status Move</span>
        <span><b>${capitalizeFirstLetter(currentPokemonPopUp.moves['2'].move.name)}</b></span>
    </div>
    <div class="about" id="progressBarBox${i}">
        <span>Physical Move</span>
        <span><b>${capitalizeFirstLetter(currentPokemonPopUp.moves['3'].move.name)}</b></span>
    </div>
    `;
}

// PopUp getting customized for the filter function and will be displayed in the search bar! 

function renderPopUpSearch(i) {
    return `
    <div class="pop-up d-none" id="popUp${i}">
        <div class="card-box-total">
            <div class="pop-Up-Pic">
                <div id="boxColor${i}" class="card-box1">
                <h2 class="pokemon-Name-Main-Paige" id="pokename${i}">#${searchPokemon.id} ${capitalizeFirstLetter(searchPokemon.name)}</h2>
                <img class="card-box-poke-pic" id="pokePic${i}" src="${searchPokemon["sprites"]['other']['official-artwork']['front_default']}">
                ${checkTypeSearch(i)}
            </div>
            <div class="card-box2">
                <div id="popUp-nav" class="card-box2-nav">
                    <div id="nav-sections${i}" class="nav-sections">
                        <b><span id="about${i}" onclick="aboutSearch(${i})" class="nav-section nav-section-clicked">About</span></b>
                        <b><span id="baseStat${i}" onclick="baseStatsSearch(${i})" class="nav-section">Base Stats</span></b>
                        <b><span id="evolution${i}" onclick="evolutionSearch(${i})" class="nav-section">Evolution</span></b>
                        <b><span id="moves${i}" onclick="movesSearch(${i})" class="nav-section">Moves</span></b>
                    </div>
                    <div id="card-content(${i})" class="card_content">
                        <div class="about" id="progressBarBox${i}">
                            <span>Weight in hg (hectograms)</span>
                            <span><b>${searchPokemon['weight']}</b></span>
                            <div>
                                <div id="progressBar${i}" style="width: 69%"></div>
                            </div>  
                        </div>
                        <div class="about" id="progressBarBox${i}">
                            <span>Height in dm (decimetres)</span>
                            <span><b>${searchPokemon['height']}</b></span>
                            <div>
                                <div id="progressBar${i}" style="width: 7%;"></div>
                            </div>
                        </div>
                    </div>
                </div>        
                <div id="btn_nav(${i})" class="btn_nav_search">
                    <button class="btn_popUp" onclick="closePopUp(${i})" class="btn_style"><img class="close-btn" src="./img/close-window.png"></button>
                </div>
            </div>
        </div>
   </div>`;
}

function aboutSearch(i) {
    about_clicked = true;
    document.getElementById(`about${i}`).classList.add('nav-section-clicked');
    baseStats_clicked = false;
    document.getElementById(`baseStat${i}`).classList.remove('nav-section-clicked');
    evolution_clicked = false;
    document.getElementById(`evolution${i}`).classList.remove('nav-section-clicked');
    moves_clicked = false;
    document.getElementById(`moves${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`card-content(${i})`).style = "margin-bottom: 130px;"
    document.getElementById(`card-content(${i})`).innerHTML = '';
    document.getElementById(`card-content(${i})`).innerHTML += getAboutSearch(i);
}

function baseStatsSearch(i) {
    baseStats_clicked = true;
    document.getElementById(`baseStat${i}`).classList.add('nav-section-clicked');
    about_clicked = false;
    document.getElementById(`about${i}`).classList.remove('nav-section-clicked');
    evolution_clicked = false;
    document.getElementById(`evolution${i}`).classList.remove('nav-section-clicked');
    moves_clicked = false;
    document.getElementById(`moves${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`card-content(${i})`).style = "margin-bottom: 8px;"
    document.getElementById(`card-content(${i})`).innerHTML = '';
    document.getElementById(`card-content(${i})`).innerHTML += getBaseStatsSearch();
}

function evolutionSearch(i) {
    evolution_clicked = true;
    document.getElementById(`evolution${i}`).classList.add('nav-section-clicked');
    about_clicked = false;
    document.getElementById(`about${i}`).classList.remove('nav-section-clicked');
    baseStats_clicked = false;
    document.getElementById(`baseStat${i}`).classList.remove('nav-section-clicked');
    moves_clicked = false;
    document.getElementById(`moves${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`card-content(${i})`).innerHTML = '';
    getEvolutionSearch(i);
}

function movesSearch(i) {
    moves_clicked = true;
    document.getElementById(`moves${i}`).classList.add('nav-section-clicked');
    about_clicked = false;
    document.getElementById(`about${i}`).classList.remove('nav-section-clicked');
    baseStats_clicked = false;
    document.getElementById(`baseStat${i}`).classList.remove('nav-section-clicked');
    evolution_clicked = false;
    document.getElementById(`evolution${i}`).classList.remove('nav-section-clicked');
    document.getElementById(`card-content(${i})`).style = "margin-bottom: 78px;"
    document.getElementById(`card-content(${i})`).innerHTML = '';
    document.getElementById(`card-content(${i})`).innerHTML += getMovesSearch(i);
}

function getAboutSearch(i) {
    return `
    <div class="about" id="progressBarBox${i}">
        <span>Weight in hg (hectograms)</span>
        <span><b>${searchPokemonPopUp['weight']}</b></span>
        <div>
            <div id="progressBar${i}"></div>
        </div>  
    </div>
    <div class="about" id="progressBarBox${i}">
        <span>Height in dm (decimetres)</span>
        <span><b>${searchPokemonPopUp['height']}</b></span>
        <div>
            <div id="progressBar${i}"></div>
        </div>
    </div>
    `;
}

function getBaseStatsSearch() {
    return `
    <table>
        <tr>
            <td>HP</td>
            <td><b>${searchPokemonPopUp['stats']['0']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${searchPokemonPopUp['stats']['0']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>Attack</td>
            <td><b>${searchPokemonPopUp['stats']['1']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${searchPokemonPopUp['stats']['1']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>Defense</td>
            <td><b>${searchPokemonPopUp['stats']['2']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${searchPokemonPopUp['stats']['2']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>Sp.Attack</td>
            <td><b>${searchPokemonPopUp['stats']['3']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${searchPokemonPopUp['stats']['3']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>Sp.Defense</td>
            <td><b>${searchPokemonPopUp['stats']['4']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${searchPokemonPopUp['stats']['4']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td>Speed</td>
            <td><b>${searchPokemonPopUp['stats']['5']['base_stat']}</b></td>
            <td style="width:100%;">
                <div class="progress-bar-box">
                    <div class="progress-bar id="progressBar" style="width:${searchPokemonPopUp['stats']['5']['base_stat']}%;"></div>
                </div>
            </td>
        </tr>
    </table>
    `;
}

function getEvolutionSearch(i) {
    if (searchPokemonPopUp['abilities']['1']) {
        document.getElementById(`card-content(${i})`).style = "margin-bottom: 92px;"
        document.getElementById(`card-content(${i})`).innerHTML += `
        <table class="table-evolution">
            <tr>
                <td>Single-Ability</td>
                <td class="td-center"><b>${capitalizeFirstLetter(searchPokemonPopUp.abilities['0'].ability.name)}</b></td>
            </tr>
            <tr>
                <td>Dual-Ability</td>
                <td class="td-center"><b>${capitalizeFirstLetter(searchPokemonPopUp.abilities['1'].ability.name)}</b></td>
            </tr>
            <tr>
                <td>Base Experience</td>
                <td class="td-center"><b>${searchPokemonPopUp['base_experience']}</b></td>
            </tr>
        </table>
        `;}
    else {
        document.getElementById(`card-content(${i})`).style = "margin-bottom: 120px;"
        document.getElementById(`card-content(${i})`).innerHTML += `
        <table class="table-evolution">
            <tr>
                <td>Single-Ability</td>
                <td class="td-center"><b>${capitalizeFirstLetter(searchPokemonPopUp.abilities['0'].ability.name)}</b></td>
            </tr>
            <tr>
                <td>Base Experience</td>
                <td class="td-center"><b>${searchPokemonPopUp['base_experience']}</b></td>
            </tr>
        </table>
        `;
    }
}

function getMovesSearch(i) {
    return `
    <div class="about" id="progressBarBox${i}">
        <span>Special Move 1</span>
        <span><b>${capitalizeFirstLetter(searchPokemonPopUp.moves['0'].move.name)}</b></span>
    </div>
    <div class="about" id="progressBarBox${i}">
        <span>Special Move 2</span>
        <span><b>${capitalizeFirstLetter(searchPokemonPopUp.moves['1'].move.name)}</b></span>
    </div>
    <div class="about" id="progressBarBox${i}">
        <span>Status Move</span>
        <span><b>${capitalizeFirstLetter(searchPokemonPopUp.moves['2'].move.name)}</b></span>
    </div>
    <div class="about" id="progressBarBox${i}">
        <span>Physical Move</span>
        <span><b>${capitalizeFirstLetter(searchPokemonPopUp.moves['3'].move.name)}</b></span>
    </div>
    `;
}