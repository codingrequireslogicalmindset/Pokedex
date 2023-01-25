//Ordnet den Pokedextypen die richtige Farbe zu!

function changeColor(i) {
    let element = getId(`element${i}`).innerHTML;
    let type = getId(`type1${i}`).innerHTML;

    if (element.includes('Grass') && type.includes('Grass')) {
        getId(`element${i}`).style.background = 'rgb(26, 167, 106)';
        getId(`boxColor${i}`).style.background = 'rgb(26, 167, 106)';
    }

    if (element.includes('Fire') && type.includes('Fire')) {
        getId(`element${i}`).style.background = 'rgb(255, 75, 75)';
        getId(`boxColor${i}`).style.background = 'rgb(255, 75, 75)';
    }

    if (element.includes('Water') && type.includes('Water')) {
        getId(`element${i}`).style.background = 'rgb(0, 128, 255)';
        getId(`boxColor${i}`).style.background = 'rgb(0, 128, 255)';
    }

    if (element.includes('Bug') && type.includes('Bug')) {
        getId(`element${i}`).style.background = 'rgb(97, 189, 58)';
        getId(`boxColor${i}`).style.background = 'rgb(97, 189, 58)';
    }

    if (element.includes('Normal') && type.includes('Normal')) {
        getId(`element${i}`).style.background = 'rgb(63, 61, 61)';
        getId(`boxColor${i}`).style.background = 'rgb(63, 61, 61)';
    }

    if (element.includes('Poison') && type.includes('Poison')) {
        getId(`element${i}`).style.background = 'rgb(153, 0, 255)';
        getId(`boxColor${i}`).style.background = 'rgb(153, 0, 255)';
    }

    if (element.includes('Electric') && type.includes('Electric')) {
        getId(`element${i}`).style.background = 'rgb(255, 191, 0)';
        getId(`boxColor${i}`).style.background = 'rgb(255, 191, 0)';
    }

    if (element.includes('Ground') && type.includes('Ground')) {
        getId(`element${i}`).style.background = 'rgb(192, 157, 116)';
        getId(`boxColor${i}`).style.background = 'rgb(192, 157, 116)';
    }

    if (element.includes('Fairy') && type.includes('Fairy')) {
        getId(`element${i}`).style.background = 'rgb(227, 85, 255)';
        getId(`boxColor${i}`).style.background = 'rgb(227, 85, 255)';
    }

    if (element.includes('Fighting') && type.includes('Fighting')) {
        getId(`element${i}`).style.background = 'rgb(207, 136, 124)';
        getId(`boxColor${i}`).style.background = 'rgb(207, 136, 124)';
    }

    if (element.includes('Psychic') && type.includes('Psychic')) {
        getId(`element${i}`).style.background = 'rgb(255, 106, 0)';
        getId(`boxColor${i}`).style.background = 'rgb(255, 106, 0)';
    }

    if (element.includes('Rock') && type.includes('Rock')) {
        getId(`element${i}`).style.background = 'rgb(207, 195, 147)';
        getId(`boxColor${i}`).style.background = 'rgb(207, 195, 147)';
    }

    if (element.includes('Ghost') && type.includes('Ghost')) {
        getId(`element${i}`).style.background = 'rgb(62, 69, 120)';
        getId(`boxColor${i}`).style.background = 'rgb(62, 69, 120)';
    }

    if (element.includes('Ice') && type.includes('Ice')) {
        getId(`element${i}`).style.background = 'rgb(22, 164, 200)';
        getId(`boxColor${i}`).style.background = 'rgb(22, 164, 200)';
    }

    if (element.includes('Dragon') && type.includes('Dragon')) {
        getId(`element${i}`).style.background = 'rgb(136, 154, 209)';
        getId(`boxColor${i}`).style.background = 'rgb(136, 154, 209)';
    }

    if (element.includes('Dark') && type.includes('Dark')) {
        getId(`element${i}`).style.background = 'rgb(106, 90, 70)';
        getId(`boxColor${i}`).style.background = 'rgb(106, 90, 70)';
    }

    if (element.includes('Steel') && type.includes('Steel')) {
        getId(`element${i}`).style.background = 'rgb(186, 181, 211)';
        getId(`boxColor${i}`).style.background = 'rgb(186, 181, 211)';
    }

    if (element.includes('Flying') && type.includes('Flying')) {
        getId(`element${i}`).style.background = 'rgb(172, 129, 250)';
        getId(`boxColor${i}`).style.background = 'rgb(172, 129, 250)';
    }
}