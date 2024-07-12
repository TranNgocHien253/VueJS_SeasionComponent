import { ref, computed } from 'vue';

export const listTable = ref([]);
export const listTable1 = ref([]);
export const listTableMEta = ref([]);
export const selectedCount = ref('5');
export const filterType = ref('');
export const filterName = ref('');
export const types = ref([]);
export const currentPage = ref('1');
export const sortBy = ref('number');
export const sortOrder = ref('asc');
export const totagPage = ref('');


export const getNewToDo = async () => {
    try {
        let apiUrl = `https://api.vandvietnam.com/api/pokemon-api/pokemons?page[number]=${currentPage.value}&page[size]=${selectedCount.value}&sort=number&order=${sortOrder.value}`;
                //https://api.vandvietnam.com/api/pokemon-api/pokemons?page[number]=${currentPage.value} 
        //let apiUrl = https://api.vandvietnam.com/api/pokemon-api/pokemons?page[number]=${currentPage.value}&page[size]=${selectedCount.value}&sort=${sortOrder.value === 'asc' ? '' : '-'}${sortBy.value};
        if (filterName.value) {
        apiUrl += `&filter[name]=${filterName.value}`;
        }
        if (filterType.value) {
        apiUrl += `&filter[type]=${filterType.value}`
        }
        if (sortOrder.value) {
        apiUrl += `&sort=${sortOrder.value === 'asc' ? '' : '-'}${sortBy.value}`
        }

        const response = await fetch(apiUrl);
        const data = await response.json();
        // const meta = await response.json();
        listTable.value = data.data;
        totagPage.value = data.meta.last_page;
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


export const sortPokemons = async (field, order) => {
    sortBy.value = field;
    sortOrder.value = order;
    await getNewToDo();
};
export const selectedPokemon = ref({});
export const isModalVisible = ref(false);

export const showModal = (pokemon) => {
  selectedPokemon.value = pokemon;
  isModalVisible.value = true;
};
export const goToPageNext = () => {
  if (currentPage.value < totagPage.value) {
    currentPage.value++;
    submitSearch();
  }
};

export const goToPagePrevious = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    submitSearch();
  }
};
// Run getNewToDo and getFilter when this module is imported
getNewToDo();
getFilter();
