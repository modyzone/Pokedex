
let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function add(pokemon) {
	if (
		typeof pokemon === "object" &&
		"name" in pokemon
	
	) {
	pokemonList.push(pokemon);

} else {
	console.log("pokemon is not correct");
 }
}
	function getAll() {
		return pokemonList;
	}

	function addListItem(pokemon){
 let pokemonList = document.querySelector(".pokemon-list");
 let listpokemon = document.createElement("li");
 let button = document.createElement("button");
 button.innerText = pokemon.name;
 button.classList.add("button-class");
 listpokemon.appendChild(button);
 pokemonList.appendChild(listpokemon);
 button.addEventListener("click", function(event) {
 	showDetails(pokemon);
 });

   }
     
     function loadList() {
     	return fetch(apiUrl).then(function (response) {
     		return response.json();
     	}).then(function (json) {
     		json.results.forEach(function (item) {
     			let pokemon = {
     				name: item.name,
     				detailsUrl: item.url
     			};
     			add(pokemon);
             });
     }).catch(function (e) {
	console.error(e);
 })
}

 function loadDetails(item) {
    	let url = item.detailsUrl;
    	return fetch(url).then(function (response) {
    		return response.json();
    }).then(function (details) {
    	item.imageUrl = details.sprites.front_default;
    	item.height = details.height;
    	item.types = details.types;
    }).catch(function (e) {
    	console.error(e);
     });
    };

    let hideModal = () => {
    	let modalContainer = document.querySelector('#modal-container');
    	modalContainer.classList.remove('is-visible');
    };

    const showModal = (pokemon) => {
    	let modalContainer = document.querySelector('#modal-container');
    	modalContainer.classList.add('modal');
    	modalContainer.innerHTML = '';

    	let modalContent = document.createElement('div');
    	modalContent.classList.add('modal-content');

     let closeButtonElement = document.createElement('span');
     closeButtonElement.innerText = 'x';
     closeButtonElement.classList.add('close');
     closeButtonElement.addEventListener('click', hideModal);

     let titleElement = document.createElement('h1');
     titleElement.innerText = pokemon.name;

     let image = document.createElement('img');
     image.src = pokemon.imageUrl;

     let contentElement = document.createElement('p');
     contentElement.innerText = "Height: " + pokemon.height;

     modalContent.appendChild(closeButtonElement);
     modalContent.appendChild(titleElement);
     modalContent.appendChild(image);
     modalContent.appendChild(contentElement);
     modalContainer.appendChild(modalContent);

     modalContainer.addEventListener('click', (e) => {
     	let target = e.target;
     	if (target === modalContainer) {
     		hideModal();
     	}
     });

     modalContainer.classList.add('is-visible');
   }

    window.addEventListener('keydown', (e) => {
    	let modalContainer = document.querySelector('#modal-container');
    	if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
    		hideModal();
    	}
    });

  
    function showDetails(item) {
    	loadDetails(item).then(function ()
    	{
    		showModal(item);
    	});
    }
	return {
		getAll: getAll,
		add: add,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails,
		showDetails: showDetails,
		showModal: showModal,
		hideModal: hideModal
	};
  })();

pokemonRepository.loadList().then(function() {
	pokemonRepository.getAll().forEach(function (pokemon){
		pokemonRepository.addListItem(pokemon);
	});
});
