// Primeira Parte

// const offset = 0;
// const limit = 10;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// fetch(url)
//   .then((response) => response.json())
//   .then((jsonBody) => console.log(jsonBody))
//   .catch((error) => console.error(error));

// Segunda Parte
// const offset = 0;
// const limit = 10;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// fetch(url)
//   .then((response) => response.json())
//   .then((jsonBody) => jsonBody.results)
//   .then((pokemonList) => {
//     debugger
//     console.log(pokemonList)
//   })
//   .catch((error) => console.error(error));

// Terceira Parte

// const offset = 0;
// const limit = 10;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// function convertPokemonToLi(pokemon) {
//   return `
//   <li class="pokemon">
//     <span class="number"> #001 </span>
//     <span class="name"> ${pokemon.name} </span>

//     <div class="detail">
//       <ol class="types">
//         <li class="type">Grass</li>
//         <li class="type">Poison</li>
//       </ol>
//       <img
//         src="https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-Clipart-Background.png"
//         alt="${pokemon.name}"
//       />
//     </div>
//   </li>
//   `;
// }

// fetch(url)
//   .then((response) => response.json())
//   .then((jsonBody) => jsonBody.results)
//   .then((pokemonList) => {
//     for (let i = 0; i < pokemonList.length; i++) {
//       const pokemon = pokemonList[i];
//       console.log(convertPokemonToLi(pokemon));
//     }
//   })
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Requisição finalizada"));

// Quarta parte

// const offset = 0;
// const limit = 10;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// function convertPokemonToLi(pokemon) {
//   return `
//   <li class="pokemon">
//     <span class="number"> #001 </span>
//     <span class="name"> ${pokemon.name} </span>

//     <div class="detail">
//       <ol class="types">
//         <li class="type">Grass</li>
//         <li class="type">Poison</li>
//       </ol>
//       <img
//         src="https://www.pngplay.com/wp-content/uploads/10/Bulbasaur-Pokemon-PNG-Clipart-Background.png"
//         alt="${pokemon.name}"
//       />
//     </div>
//   </li>
//   `;
// }

// const pokemonOl = document.getElementById("pokemonList");

// fetch(url)
//   .then((response) => response.json())
//   .then((jsonBody) => jsonBody.results)
//   .then((pokemonList) => {
//     for (let i = 0; i < pokemonList.length; i++) {
//       const pokemon = pokemonList[i];
//       pokemonOl.innerHTML += convertPokemonToLi(pokemon);
//     }
//   })
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Requisição finalizada"));


// Organizando tudo

function convertPokemonToLi(pokemon) {
  return `
  <li class="pokemon ${pokemon.type}">
    <span class="number"> #${pokemon.number} </span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
      <ol class="types">
        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join(' ')}
      </ol>
      <img
        src="${pokemon.photo}"
        alt="${pokemon.name}"
      />
    </div>
  </li>
  `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});
