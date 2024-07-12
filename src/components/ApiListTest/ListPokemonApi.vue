<template>
  <div class="div">
    <div class="Search">
      <div class="form-group">
        <p>Tên</p>
        <input v-model="filterName" placeholder="Enter Pokémon Name" />
      </div>
      <div class="form-group" style="margin-left: 30px;">
        <p>Mã</p>
        <select v-model="filterType" style="margin-left: 0;">
          <option value="">All</option>
          <option v-for="type in types" :key="type.id" :value="type.id">{{ type.name }}</option>
        </select>
      </div>
      <div class="form-group" style="margin-top: 25px;">
        <button @click="resetFilters">Đặt lại</button>
        <button @click="submitSearch" style="background-color: rgb(3, 3, 184); color: aliceblue;">Tìm kiếm</button>
      </div>
    </div>
    <div class="hienthiCount">
      <p>show</p>
      <select id="count" v-model="selectedCount" @change="submitSearch">
        <option v-for="x in [5, 10, 20, 30, 50]" :key="x">{{ x }}</option>
      </select>
    </div>
    <div class="list">
      <table>
        <thead>
          <tr>
            <th>No<span></span>
              <span v-if="sortOrder === 'asc'" @click="sortPokemons('number')">▼</span>
              <span v-show="sortOrder === 'desc'" @click="sortPokemons('number')">▲</span>
            </th>
            <th>Name
              <span v-if="sortOrder === 'asc'" @click="sortPokemons('name')">▼</span>
              <span v-show="sortOrder === 'desc'" @click="sortPokemons('name')">▲</span>
            </th>
            <th>Total
              <span v-if="sortOrder === 'asc'" @click="sortPokemons('total')">▼</span>
              <span v-show="sortOrder === 'desc'" @click="sortPokemons('total')">▲</span>
            </th>
            <th>HP</th>
            <th>Attack</th>
            <th>Defense</th>
            <th>Sp Atk</th>
            <th>Sp Defense</th>
            <th>Speed</th>
            <th>Create At</th>
            <th>Update At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pokemon in filteredPokemons" :key="pokemon.number" @click="showModal(pokemon)">
            <td>{{ pokemon.number }}</td>
            <td>{{ pokemon.name }}</td>
            <td>{{ pokemon.total }}</td>
            <td>{{ pokemon.hp }}</td>
            <td>{{ pokemon.attack }}</td>
            <td>{{ pokemon.defense }}</td>
            <td>{{ pokemon.sp_atk }}</td>
            <td>{{ pokemon.sp_def }}</td>
            <td>{{ pokemon.speed }}</td>
            <td>{{ pokemon.created_at }}</td>
            <td>{{ pokemon.updated_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Phân trang -->
    <ModelPokemon :isVisible="isModalVisible" :pokemon="selectedPokemon" @close="isModalVisible = false" />
  </div>
</template>

<script setup>
import { selectedCount, filterName, filterType, types, submitSearch, filteredPokemons, sortOrder, sortPokemons } from './ListPokemonApi.js';
import '@/components/ApiListTest/ListPokemonApi.css';
const resetFilters = () => {
  filterType.value = '';
  filterName.value = '';
  submitSearch();
};
import ModelPokemon from './modalDonvidoAPI.vue';
import { ref } from 'vue';


const selectedPokemon = ref({});
const isModalVisible = ref(false);

const showModal = (pokemon) => {
  selectedPokemon.value = pokemon;
  isModalVisible.value = true;
};
const handleSort = (field) => {
  sortPokemons(field); 
};
</script>