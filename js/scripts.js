
var pokemonRepository = (function () {
	var pokemonList = [
	{
		name: 'Bulbasaur',
		height: 0.7,
		types: ['grass', 'poison']
	},
	{
		name:'Charizad',
		height: 1.7,
		types: ['fire', 'flying']
	}
	];
	function getAll() {
		return pokemonList;
	}
    
    function add(pokemon) {
		pokemonList.push(pokemon);
	}

	function addListItem(pokemon) {
	let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
	pokemonList.appendChild(listpokemon);
	}
	return {
		getAll: getAll,
		add: add,
		addListItem: addListItem
	};
}) ();
console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });
console.log(pokemonRepository.getAll());
pokemonRepository.getAll().forEach(function (pokemon) {
	pokemonRepository.addListItem(pokemon);
	
});








//console.log(pokemon.name + ' is ' + pokemon.height + ' meter height.' )