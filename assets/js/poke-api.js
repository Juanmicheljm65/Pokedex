const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon()
  pokemon.name = pokeDetail.name
  pokemon.number = pokeDetail.order
  
  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types

  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

  return pokemon
}

pokeApi.getPokemonsDetail = (pokemon) => {
  return fetch(pokemon.url)
  .then((response) => response.json())
  .then(convertPokeApiDetailToPokemon)
};

pokeApi.getPokemons = (offset = 0, limit = 18) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  //
  return fetch(url) // fiz a requisição da lista de pokemons e isso me da um http response
    .then((response) => response.json()) // peguei o http response e converti pra json
    .then((jsonBody) => jsonBody.results) // com o resultado em json só me interessa a lista de pokemons = results
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail)) // com a lista de pokemons as informações não eram suficientes e precisei de mais detalhes então pra cada pokemon eu precisei de uma nova requisição, então converti a lista de pokemons em uma lista de novas requisições de detalhes
    .then((detailRequests) => Promise.all(detailRequests)) // com as requisições de detalhe em mãos eu preciso que esperar todas terminarem, e quando terminam converto para uma lista de detalhes em json = (função acima pokeApi.getPokemonDetail)
    .then((pokemonsDetails) => pokemonsDetails); // mostrar lista de detalhes
};
