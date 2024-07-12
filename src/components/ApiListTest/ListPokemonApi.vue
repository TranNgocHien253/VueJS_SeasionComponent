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
    <div class="container">
    <div class="list">
      <table>
        <thead>
          <tr>
            <th>No
              <span @click="handleSort('number')">
                <span>
                  {{ sortOrder === 'asc' ? '▼' : '▲' }}
                </span>
              </span>
            </th>
            <th>Name
              <!-- <span @click="handleSort('name')">
                <span>
                  {{ sortOrder === 'asc' ? '▼' : '▲' }}
                </span>
              </span> -->
            </th>
            <th>Total
              <span @click="handleSort('total')">
                <span>
                  {{ sortOrder === 'asc' ? '▼' : '▲' }}
                </span>
              </span>
            </th>
            <th>HP
              <span @click="handleSort('hp')">
                <span>
                  {{ sortOrder === 'asc' ? '▼' : '▲' }}
                </span>
              </span>
            </th>
            <th>Attack
              <span @click="handleSort('attack')">
                <span>
                  {{ sortOrder === 'asc' ? '▼' : '▲' }}
                </span>
              </span>
            </th>
            <th>Defense
              <span @click="handleSort('defense')">
                <span>
                  {{ sortOrder === 'asc' ? '▼' : '▲' }}
                </span>
              </span>
            </th>
            <th>Sp Atk
              <span @click="handleSort('sp_atk')">
                <span>
                  {{ sortOrder === 'asc' ? '▼' : '▲' }}
                </span>
              </span>
            </th>
            <th>Sp Defense
              <span @click="handleSort('sp_def')">
                <span>
                  {{ sortOrder === 'asc' ? '▼' : '▲' }}
                </span>
              </span>
            </th>
            <th>Speed
              <span @click="handleSort('speed')">
                <span>
                  {{ sortOrder === 'asc' ? '▼' : '▲' }}
                </span>
              </span>
            </th>
            <th>Create At
              <!-- <span @click="handleSort('created_at')">
                <span>
                  {{ sortOrder === 'asc' ? '▼' : '▲' }}
                </span>
              </span> -->
            </th>
            <th>Update At
              <!-- <span @click="handleSort('updated_at')">
                <span>
                  {{ sortOrder === 'asc' ? '▼' : '▲' }}
                </span>
              </span> -->
            </th>
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