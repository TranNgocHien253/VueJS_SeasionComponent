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
              </div>
              <div class="form-group">
                <label for="name">Name:</label>
                <input id="name" type="text" class="inputModel" v-model="pokemon.name" />
              </div>
              <div class="form-group">
                <label for="total">Total:</label>
                <input id="total" type="text" class="inputModel" v-model="pokemon.total" />
              </div>
              <div class="form-group">
                <label for="hp">HP:</label>
                <input id="hp" type="text" class="inputModel" v-model="pokemon.hp" />
              </div>
              <div class="form-group">
                <label for="attack">Attack:</label>
                <input id="attack" type="text" class="inputModel" v-model="pokemon.attack" />
              </div>
              <div class="form-group">
                <label for="defense">Defense:</label>
                <input id="defense" type="text" class="inputModel" v-model="pokemon.defense" />
              </div>
              <div class="form-group">
                <label for="sp_atk">Sp Atk:</label>
                <input id="sp_atk" type="text" class="inputModel" v-model="pokemon.sp_atk" />
              </div>
              <div class="form-group">
                <label for="sp_def">Sp Defense:</label>
                <input id="sp_def" type="text" class="inputModel" v-model="pokemon.sp_def" />
              </div>
              <div class="form-group">
                <label for="speed">Speed:</label>
                <input id="speed" type="text" class="inputModel" v-model="pokemon.speed" />
              </div>
              <div class="form-group">
                <label for="created_at">Create At:</label>
                <input id="created_at" type="text" class="inputModel" :value="pokemon.created_at" disabled />
              </div>
              <div class="form-group">
                <label for="updated_at">Update At:</label>
                <input id="updated_at" type="text" class="inputModel" :value="pokemon.updated_at" disabled />
              </div>
            </div>
            <div class="form-actions">
              <button type="button" class="download-btn" @click="downloadPokemonSprite">Download</button>
              <button type="button" class="cancelModel" @click="closeModal">Hủy</button>
              <button type="submit">Lưu</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

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
    alert('successful!')
  } catch (error) {
    console.error('Error:', error);
  }
};
</script>

<style scoped>

.modal {
  display: block; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: hidden; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}
.contentND {
  padding: 20px;
}
.col1 {
  padding: 20px;
  width: 200px;
}
.modal-content {
  background-color: #fefefe;
  margin: 10% auto; 
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  width: 50%;
  animation: Upmodal .3s;
}

@keyframes Downmodal {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(100%);
  }
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
  margin-right: 10px;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.form-body {
  margin: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 300px;
}

.form-group-cha {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  display: flex;
  flex-direction: column;
}

.inputModel {
  width: 100%;
  padding: 5px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 5px;
}

.cancelModel {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

</style>
