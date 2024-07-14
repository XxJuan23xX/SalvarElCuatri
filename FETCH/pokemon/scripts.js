async function fetchPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayPokemon(data);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

function displayPokemon(pokemon) {
    const container = document.getElementById('pokemon-info');
    container.innerHTML = `
        <div class="card">
            <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
            <div class="card-body">
                <div class="card-title-container">
                    <h5 class="card-title">${pokemon.name.toUpperCase()}</h5>
                    <p class="card-subtitle">LUCY POKEMON</p>
                </div>
                <div>
                    ${pokemon.types.map(type => `<span class="type-label">${type.type.name.toUpperCase()}</span>`).join('')}
                </div>
                <div class="stat-label">HT: ${Math.floor(pokemon.height / 10)}'${(pokemon.height % 10) * 12}"</div>
                <div class="stat-label">WT: ${(pokemon.weight / 10).toFixed(1)} lbs</div>
                <div class="description">
                    It is believed that seeing ${pokemon.name}'s open eyes will bring the viewer luck. Whether it is good or bad depends on the Pokémon's mood. Its bell can only be heard by its trainer, and every trainer hears a chime that's just for them.
                </div>
            </div>
        </div>
    `;
}

fetchPokemon('pikachu');
