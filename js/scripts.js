
let pokemonRepository = (function () {
  let pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=200';


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
    button.setAttribute("data-toggle", "modal" );
    button.setAttribute("data-target", "#exampleModal");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add("mt-2");
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
      item.imageUrlFront = details.sprites.front_default;
      item.imageUrlBack = details.sprites.back_default;
      item.height = details.height;
      item.weight =details.weight;
      item.types = [];
      for (let i = 0; i < details.types.length; i++) {
        item.types.push(details.types[i].type.name);
      }
      item.abilities = [];
      for (let i = 0; i < details.abilities.length; i++) {
        item.abilities.push(details.abilities[i].ability.name);
      }
    }).catch(function (e) {
      console.error(e);
     });
    };

  
  function showDetails(item) {
      loadDetails(item).then(function ()
      {
        showModal(item);
      });
    };

    function showModal(item) {
      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");
      let modalHeader = $(".modal-header");
      modalTitle.empty();
      modalBody.empty();

      let nameElement = $("<h1>"  + item.name + "</h1>");
      let imageElementFront = $('<img class="modal-img" style="width:50%">');
      imageElementFront.attr('src', item.imageUrlFront);
      let imageElementBack = $('<img class="modal-img" style="width:50%>"');
      imageElementBack.attr('src', item.imageUrlBack);
      let heightElement = $("<p>" + "height : " + item.height + "</p>");
      let weightElement = $("<p>" + "weight : " + item.weight + "</p>");
      let typesElement = $("<p>" + "types : " + item.types + "</p>");
      let abilitiesElement = $("<p>" + "abilities : " + item.abilities + "</p>");
     
  

      modalTitle.append(nameElement);
      modalBody.append(imageElementFront);
      modalBody.append(imageElementBack);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
      modalBody.append(typesElement);
      modalBody.append(abilitiesElement);
    }
  return {
    
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    getAll: getAll
  };
  })();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon){
    const pokemonUl = document.querySelector('.pokemon-list');
      pokemonRepository.addListItem(pokemon, pokemonUl);
  });
});
