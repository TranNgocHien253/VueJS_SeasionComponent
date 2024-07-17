<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <div :class="contentND">
        <form @submit.prevent="saveDetails">
          <div class="form-body">
            <div class="form-group-cha">
              <div class="form-group">
                <label for="number">No:</label>
                <input id="number" type="text" class="inputModel" :value="pokemon.number" disabled />
              </div><br>
              <div class="form-group">
                <label for="name">Name:</label>
                <input id="name" type="text" class="inputModel" v-model="pokemon.name" disabled />
              </div>
              <div class="form-group">
                <label for="total">Total:</label>
                <input id="total" type="text" class="inputModel" v-model="pokemon.total" disabled />
              </div>
              <div class="form-group">
                <label for="hp">HP:</label>
                <input id="hp" type="text" class="inputModel" v-model="pokemon.hp" disabled />
              </div>
              <div class="form-group">
                <label for="attack">Attack:</label>
                <input id="attack" type="text" class="inputModel" v-model="pokemon.attack" disabled />
              </div>
              <div class="form-group">
                <label for="defense">Defense:</label>
                <input id="defense" type="text" class="inputModel" v-model="pokemon.defense" disabled />
              </div>
              <div class="form-group">
                <label for="sp_atk">Sp Atk:</label>
                <input id="sp_atk" type="text" class="inputModel" v-model="pokemon.sp_atk" disabled />
              </div>
              <div class="form-group">
                <label for="sp_def">Sp Defense:</label>
                <input id="sp_def" type="text" class="inputModel" v-model="pokemon.sp_def" disabled />
              </div>
              <div class="form-group">
                <label for="speed">Speed:</label>
                <input id="speed" type="text" class="inputModel" v-model="pokemon.speed" disabled />
              </div>
              <div class="form-group">
                <label for="created_at">Create At:</label>
                <input id="created_at" type="text" class="inputModel" :value="formatDate(pokemon.created_at)" disabled />
              </div>
              <div class="form-group">
                <label for="updated_at">Update At:</label>
                <input id="updated_at" type="text" class="inputModel" :value="formatDate(pokemon.updated_at)" disabled />
              </div>
            </div>
            <div class="form-actions">
              <button type="button" class="download-btn" @click="downloadPokemonSprite">Download</button>
              <button type="button" class="cancelModel" @click="closeModal">Hủy</button>
              <!-- <button type="submit">Lưu</button>  -->
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { formatDate } from './ListPokemonApi.js';

const props = defineProps({
  isVisible: Boolean,
  pokemon: Object,
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};

const downloadPokemonSprite = async () => {
  try {
    if (!props.pokemon.id) {
      console.error('Pokemon ID not found.');
      return;
    }
    let apiUrl = `https://api.vandvietnam.com/api/pokemon-api/pokemons/${props.pokemon.id}/sprite`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to download sprite');
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `pokemon-${props.pokemon.id}.png`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    // alert('successful!')
  } catch (error) {
    console.error('Error:', error);
  }
};
</script>

<style scoped>
/* Modal styles */
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; 
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  max-height: 90vh; 
  overflow-y: auto; 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: Upmodal .3s;
}
@keyframes Upmodal {
  
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.form-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group-cha {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.inputModel {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.inputModel:disabled {
  background-color: #e9ecef;
}

.form-actions {
  display: flex;
  justify-content: end;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

.download-btn {
  background-color: rgba(19, 38, 245, 0.7);
  border-radius: 30px;
  color: white;
}

.cancelModel {
  background-color: #dc3546cb;
  border-radius: 30px;
  color: white;
}

button[type="submit"] {
  background-color: #28a746bc;
  border-radius: 30px;
  color: white;
}

</style>
