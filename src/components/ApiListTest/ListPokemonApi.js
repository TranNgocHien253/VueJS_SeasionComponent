import { ref, computed } from 'vue';

export const listTable = ref([]);
export const listTable1 = ref([]);
export const listTableMEta = ref([]);
export const selectedCount = ref('5');
export const filterType = ref('');
export const filterName = ref('');
export const types = ref([]);
export const currentPage = ref([]);

const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

export const getNewToDo = async () => {
    try {
        let apiUrl = 'https://api.vandvietnam.com/api/pokemon-api/pokemons?page[number]=1&page[size]=10&sort=number&filter[type]=1';

        if (filterName.value) {
            apiUrl += `&filter[name]=${filterName.value}`;
        }
        if (filterType.value) {
            apiUrl += `&filter[type]=${filterType.value}`
        }
        if (selectedCount.value) {
            apiUrl += `&page[size]=${selectedCount.value}`
        }

        const response = await fetch(apiUrl);
        const data = await response.json();
        // const meta = await response.json();
        listTable.value = data.data.map(pokemon => ({
        ...pokemon,
        created_at: formatDateTime(pokemon.created_at),
        updated_at: formatDateTime(pokemon.updated_at)
        }));
        listTable1.value = data.meta;
        // console.log(listTable1);
        console.log(currentPage.value);
    } catch (e) {
        console.log('Error fetching Pokémon data:', e);
    }
};

export const openModal = (pokemon) => {
    selectedPokemon.value = pokemon;
};


export const getFilter = async () => {
    try {
        const response = await fetch('https://api.vandvietnam.com/api/pokemon-api/types');
        const data = await response.json();
        types.value = data.data;
    } catch (e) {
        console.log('Error fetching types:', e);
    }
};

export const filteredPokemons = computed(() => {
    let filteredList = listTable.value;
    // console.log(filteredList);

    return filteredList;
});
export const filteredPokemonsmeta = computed(() => {
    let filteredList1 = listTable1.value;
    // console.log(filteredList1);
    return filteredList1;
});

export const submitSearch = async () => {
    try {
        await getNewToDo();
    } catch (error) {
        console.error('Error refreshing Pokémon data:', error);
    }
};


// Xử lý phân trang
// export const goToPage = (page) => {
//     currentPage.value = page;
//     getNewToDo();
// };

// Run getNewToDo and getFilter when this module is imported
getNewToDo();
getFilter();
