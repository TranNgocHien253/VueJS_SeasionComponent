import { ref, computed } from 'vue';

export const listTable = ref([]);
export const listTableMEta = ref([]);
export const selectedCount = ref('5');
export const filterType = ref('');
export const filterName = ref('');
export const types = ref([]);
export const currentPage = ref(1);
export const sortBy = ref('number');
export const sortOrder = ref('asc');
export const totagPage = ref('');
export const isVisibleAsc = ref(true);
export const isVisibleDesc = ref(true);
export const isVisibleAsctotal = ref(true);
export const isVisibleDesctotal = ref(true);


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

export const getFilter = async () => {
    try {
        const response = await fetch('https://api.vandvietnam.com/api/pokemon-api/types');
        const data = await response.json();
        types.value = data.data;
    } catch (e) {
        console.log('Error fetching types:', e);
    }
};
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
export const filteredPokemons = computed(() => {
    let filteredList = listTable.value;
    // console.log(filteredList);
    return filteredList;
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
    if(sortBy.value === 'number'){
        if (order === 'asc') {
            isVisibleAsc.value = true;
            isVisibleDesc.value = false;
        } else if (order === 'desc') {
            isVisibleDesc.value = true;
            isVisibleAsc.value = false;
        }
    } else  if(sortBy.value === 'total'){
        if (order === 'asc') {
            isVisibleAsctotal.value = true;
            isVisibleDesctotal.value = false;
        } else if (order === 'desc') {
            isVisibleAsctotal.value = false;
            isVisibleDesctotal.value = true;
        }
    }
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
export const goToPagePrevious1 = () => {
    currentPage.value = 1;submitSearch();
  };
// Run getNewToDo and getFilter when this module is imported
getNewToDo();
getFilter();
