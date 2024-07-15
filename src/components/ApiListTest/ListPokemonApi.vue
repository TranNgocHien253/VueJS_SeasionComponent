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
    <div class="container">
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
              <th>
                <div class="thead">
                  No
                  <div class="sort">
                    <span  @click="sortPokemons('number', 'desc')" class="sort-icon"><span v-if="isVisibleAsc === true">▲</span></span>
                    <span  @click="sortPokemons('number', 'asc')" class="sort-icon"><span v-if="isVisibleDesc === true">▼</span></span>
                  </div>
                </div>
              </th>
              <th>Name
              </th>
              <th>
                  <div class="thead">
                    Total
                  <div class="sort">
                    <span  @click="sortPokemons('total', 'desc')" class="sort-icon">
                      <span v-if="isVisibleAsctotal === true">▲</span>
                    </span>
                    <span  @click="sortPokemons('total', 'asc')" class="sort-icon">
                      <span v-if="isVisibleDesctotal === true">▼</span>
                    </span>
                  </div>
                </div>
              </th>
              <th>
                <div class="thead">
                  HP
                  <!-- <div class="sort">
                    <span  @click="sortPokemons('hp', 'desc')" class="sort-icon"><span v-if="isVisibleAsc === true">▲</span></span>
                    <span  @click="sortPokemons('hp', 'asc')" class="sort-icon"><span v-if="isVisibleDesc === true">▼</span></span>
                  </div> -->
                </div>
              </th>
              <th>
                <div class="thead">
                  Attack
                  <!-- <div class="sort">
                    <span  @click="sortPokemons('attack', 'desc')" class="sort-icon"><span v-if="isVisibleAsc === true">▲</span></span>
                    <span  @click="sortPokemons('attack', 'asc')" class="sort-icon"><span v-if="isVisibleDesc === true">▼</span></span>
                  </div> -->
                </div>
              </th>
              <th>
                <div class="thead">
                  Defense
                  <!-- <div class="sort">
                    <span  @click="sortPokemons('defense', 'desc')" class="sort-icon"><span v-if="isVisibleAsc === true">▲</span></span>
                    <span  @click="sortPokemons('defense', 'asc')" class="sort-icon"><span v-if="isVisibleDesc === true">▼</span></span>
                  </div> -->
                </div>
              </th>
              <th>
                <div class="thead">
                  Sp Atk
                  <!-- <div class="sort">
                    <span  @click="sortPokemons('sp_atk', 'desc')" class="sort-icon"><span v-if="isVisibleAsc === true">▲</span></span>
                    <span  @click="sortPokemons('sp_atk', 'asc')" class="sort-icon"><span v-if="isVisibleDesc === true">▼</span></span>
                  </div> -->
                </div>
              </th>
              <th>
                <div class="thead">
                  Sp Defense
                  <!-- <div class="sort">
                    <span  @click="sortPokemons('sp_def', 'desc')" class="sort-icon"><span v-if="isVisibleAsc === true">▲</span></span>
                    <span  @click="sortPokemons('sp_def', 'asc')" class="sort-icon"><span v-if="isVisibleDesc === true">▼</span></span>
                  </div> -->
                </div>
              </th>
              <th>
                <div class="thead">
                  Speed
                  <!-- <div class="sort">
                    <span  @click="sortPokemons('speed', 'desc')" class="sort-icon"><span v-if="isVisibleAsc === true">▲</span></span>
                    <span  @click="sortPokemons('speed', 'asc')" class="sort-icon"><span v-if="isVisibleDesc === true">▼</span></span>
                  </div> -->
                </div>
              </th>
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
              <td>{{ formatDate(pokemon.created_at) }}</td>
              <td>{{ formatDate(pokemon.updated_at) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Phân trang -->
      <!-- <div>
        <a @click="goToPagePrevious"><<</a>
        <span>Page {{ currentPage }} of {{ totagPage }}</span>
        <a @click="goToPageNext">>></a>
      </div> -->
      <div class="pagination">
        <a @click="goToPagePrevious">&lt;&lt;</a>
        <span>Page {{ currentPage }} of {{ totagPage }}</span>
        <a @click="goToPageNext">&gt;&gt;</a>
      </div>

    </div>
    <ModelPokemon :isVisible="isModalVisible" :pokemon="selectedPokemon" @close="isModalVisible = false" />
  </div>
</template>

<script setup>
import { selectedCount, filterName, filterType, types, submitSearch, filteredPokemons, sortPokemons, currentPage, totagPage, selectedPokemon, isModalVisible, showModal, goToPageNext, goToPagePrevious, isVisibleAsc, isVisibleDesc, isVisibleAsctotal, isVisibleDesctotal, formatDate } from './ListPokemonApi.js';
import '@/components/ApiListTest/ListPokemonApi.css';
const resetFilters = () => {
  filterType.value = '';
  filterName.value = '';
  submitSearch();
};
import ModelPokemon from './modalDonvidoAPI.vue';
</script>