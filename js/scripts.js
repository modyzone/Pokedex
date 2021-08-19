
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
	return {
		getAll: getAll,
		add: add
	};
}) ();
pokemonRepository.getAll().forEach (function(pokemon) { 
console.log(pokemon.name + ' is ' + pokemon.height + ' meter height.' )
});
