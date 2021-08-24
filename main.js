const min = 1 // de este primer pokemon
const max = 151 // hasta este ultimo pokemon
// actualmente tomando solo la primer generacion de pokemon


async function obtenerPokemon(){
    var random_number = Math.floor(Math.random() * ((max + 1) - min) + min);
    var url = 'https://pokeapi.co/api/v2/pokemon/' + random_number
    var response = await fetch(url); // devuelve response
    const data = await response.json(); // tenemos un json

    console.log(data)

    document.getElementById("name").innerHTML = data.name

    let poke_id = data.id
    if (poke_id < 100) {
        poke_id = "0" + data.id
    } 
    if (poke_id < 10) {
        poke_id = "00" + data.id
    } 

    document.getElementById("poke-id").innerHTML = "#" + poke_id

    document.getElementById("weight").innerHTML = "<strong>Peso: </strong>"+ (data.weight / 10) + " kg." + " (" + (data.weight * 2.20462 / 10).toFixed(2) + " lb.)"
    document.getElementById("height").innerHTML = "<strong>Altura: </strong>"+ (data.height * 10) + " cm" + " (" + (data.weight * 0.328084).toFixed(2) + " ft.)"

    document.getElementById("abilities").innerHTML = "<strong>Habilidades: </strong>"

    for (let i = 0; i < data.abilities.length; i++) {
        var ab = data.abilities[i].ability.name;
        
        if (i < (data.abilities.length - 1)) {
            document.getElementById("abilities").innerHTML += ab + ", "
        } else {
            document.getElementById("abilities").innerHTML += ab
        }
    }

    document.getElementById("poke-type").innerHTML = ''

    for (let i = 0; i < data.types.length; i++) {
        var type = data.types[i].type.name;
        var tag = document.createElement("span");
        tag.className = "tag";
        tag.innerHTML = type;
        document.getElementById("poke-type").appendChild(tag)
        if (type == "normal") {

            tag.style.backgroundColor = "#ACA493";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#ACA493";
            }
        } else if (type == "fire") {

            tag.style.backgroundColor = "#F75231";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#F75231";
            }
        } else if (type == "water") {

            tag.style.backgroundColor = "#399CFF";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#399CFF";
            }
        } else if (type == "grass") {

            tag.style.backgroundColor = "#7BCE52";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#7BCE52";
            }
        } else if (type == "electric") {

            tag.style.backgroundColor = "#FFC631";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#FFC631";
            }
        } else if (type == "ice") {

            tag.style.backgroundColor = "#5ACEE7";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#5ACEE7";
            }
        } else if (type == "fighting") {

            tag.style.backgroundColor = "#A55239";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#A55239";
            }
        } else if (type == "poison") {

            tag.style.backgroundColor = "#B55AA5";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#B55AA5";
            }
        } else if (type == "ground") {

            tag.style.backgroundColor = "#D6B55A";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#D6B55A";
            }
        } else if (type == "flying") {

            tag.style.backgroundColor = "#9CADF7";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#9CADF7";
            }
        } else if (type == "psychic") {

            tag.style.backgroundColor = "#FF73A5";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#FF73A5";
            }
        } else if (type == "bug") {

            tag.style.backgroundColor = "#ADBD21";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#ADBD21";
            }
        } else if (type == "rock") {

            tag.style.backgroundColor = "#BDA55A";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#BDA55A";
            }
        } else if (type == "ghost") {

            tag.style.backgroundColor = "#6363B5";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#6363B5";
            }
        } else if (type == "dark") {

            tag.style.backgroundColor = "#735A4A";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#735A4A";
            }
        } else if (type == "dragon") {

            tag.style.backgroundColor = "#7B63E7";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#7B63E7";
            }
        } else if (type == "steel") {

            tag.style.backgroundColor = "#6161B2";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#6161B2";
            }
        } else if (type == "fairy") {

            tag.style.backgroundColor = "#F7B5F7";
            if (i == 0) {
                document.getElementById("card-background").style.backgroundColor = "#F7B5F7";
            }
        }
    } 
    

    var img = document.getElementById("imagen");
    img.setAttribute('src', data.sprites.other["official-artwork"].front_default);

}

obtenerPokemon();



