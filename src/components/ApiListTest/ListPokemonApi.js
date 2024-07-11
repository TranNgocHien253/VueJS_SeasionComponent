import { ref, computed } from 'vue';

export const listTable = ref([]);
export const listTable1 = ref([]);
export const listTableMeta = ref([]);
export const selectedCount = ref('5');
export const filterType = ref('');
export const filterName = ref('');
export const types = ref([]);
export const currentPage = ref(1);
export const sortOrder = ref('asc');

const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};

export const getNewToDo = async () => {
  try {
    let apiUrl = `https://api.vandvietnam.com/api/pokemon-api/pokemons?page[number]=1&page[size]=10&sort=number&filter[type]=1`;

    if (filterName.value) {
      apiUrl += `&filter[name]=${filterName.value}`;
    }
    if (filterType.value) {
      apiUrl += `&filter[type]=${filterType.value}`;
    }
    // if (currentPage.value) {
    //     apiUrl += `?page[number]=${currentPage.value}`;
    //   }
      if (selectedCount.value) {
        apiUrl += `&page[size]=${selectedCount.value}`;
      }

    const response = await fetch(apiUrl);
    const data = await response.json();
    listTable.value = data.data.map(pokemon => ({
      ...pokemon,
      created_at: formatDateTime(pokemon.created_at),
      updated_at: formatDateTime(pokemon.updated_at)
    }));
    // listTable1.value = data.meta;
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
  if (sortOrder.value === 'asc') {
    filteredList = filteredList.sort((a, b) => a.number - b.number);
  } else {
    filteredList = filteredList.sort((a, b) => b.number - a.number);
  }
  return filteredList;
});

export const submitSearch = async () => {
  try {
    await getNewToDo();
  } catch (error) {
    console.error('Error refreshing Pokémon data:', error);
  }
};

export const sortedPokemons = () => {
  try {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    submitSearch();
  } catch (error) {
    console.error('Error refreshing Pokémon data:', error);
  }
};

// Run getNewToDo
getNewToDo();
getFilter();
