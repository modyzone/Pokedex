let pokemonList = [ {name: "balbasure", height: 7, types: ['grass','poison'] },
{name: "ivysaur", height: 1, types: ['grass','posion'] },
{name: "charmander", height: 0.6, types: ['fire'] },
{name: "charmeleon", height: 1.1, types: ['fire'] },
{name: "squirtle", height: 0.5, types: ['water'] },
{name: "wartortle", height: 1, types: ['water'] } ];

console.log(pokemonList);

let pokemon = [
{
	name: "Bulbasaur",
	height: 0.7,
	types: ["grass", "poison"]
},
{
	name: "Charizard" ,
	height: "1.7",
	types: ["fire", "flying"]
},
{
	name: "Squirtie",
	height: 1,
	types: ["water"]
}
];
pokemon.forEach (function(pokemon) { 
console.log(pokemon.name + ' is ' + pokemon.height + ' meter height.' )
});

	// if (pokemon[i].height > 1) {

		document.write("<p> " +pokemon[i].name +" "+ pokemon[i].height, " Wow! that is big! </p> <br/>");

	} else if (pokemon[i].height < 1) {

		document.write("<p> " +pokemon[i].name +" "+ pokemon[i].height, " Average Pokemon! </p> <br/>");

	} else { 

		document.write("<p> "+pokemon[i].name +" "+ pokemon[i].height," Small Pokemon! </p> <br/>")
	} //