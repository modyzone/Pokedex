// let pokemonRepository = function(){ //IIFE
//     console.log("Hello World");
// }();

// let example = function(){
//     console.log("Example");
// }

// example();

let pokemonRepository = (function () {
    let sayName = function(name){
        console.log(name);
    }
    let addNumbers = function(a, b){
        console.log(a + b);
    }
    return {
      sayName: sayName,
      addNumbers: addNumbers
    };
})();

// console.log(pokemonRepository);
pokemonRepository.sayName("Trey");
pokemonRepository.addNumbers(4, 5);

// addNumbers(4, 5);
  
