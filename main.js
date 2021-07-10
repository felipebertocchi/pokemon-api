const min = 1 // de este primer pokemon
const max = 151 // hasta este ultimo pokemon
// actualmente tomando solo la primer generacion de pokemon


async function obtenerPokemon(){
    var random_number = Math.floor(Math.random() * ((max + 1) - min) + min);
    var url = 'https://pokeapi.co/api/v2/pokemon/' + random_number
    var response = await fetch(url); // devuelve response
    const data = await response.json(); // tenemos un json
    console.log(data);
    console.log(data.name);
    
    document.getElementById("nombre").innerHTML="<h2>" + data.name + "</h2>"

    var img = document.getElementById("imagen");
    img.setAttribute('src', data.sprites.other["official-artwork"].front_default);
    img.setAttribute('height', 300);
}

obtenerPokemon();



