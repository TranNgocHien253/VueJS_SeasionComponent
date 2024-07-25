<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import image1 from '@/assets/image/icons8-search-26.png'

const route = useRoute();
const router = useRouter();

const showSearchBox = ref(true);
const hideSearchBox = ref(false);

const dropdownOpen = ref(false);
const selectedOption = ref('Dropdown');
const activeItem = ref(null);

const toggleSearchBox = () => {
  showSearchBox.value = !showSearchBox.value;
};

const handleResize = () => {
  if (window.innerWidth < 900) {
    showSearchBox.value = false;
    hideSearchBox.value = true;
  } else {
    showSearchBox.value = true;
    hideSearchBox.value = false;
  }
};

const navigateHome = () => {
  router.push('/');
  showSearchBox.value = false;
};

import { RouterLink } from 'vue-router';

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  activeItem.value = option;
  dropdownOpen.value = false;
};
const offDropDownRed = () => {
  activeItem.value = null;
  dropdownOpen.value = false;
}
window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
</script>

<template>
  <div class="minWidth" v-show="hideSearchBox">
    <div class="logo" @click="navigateHome">NEWS<span>ROOM</span></div>
    <label class="containermenu">
      <div class="leftmenu">
        <input type="checkbox" @click="toggleSearchBox">
        <div class="checkmark">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </label>
  </div>
  <div class="containerHeader">
    <div class="topnav" v-show="showSearchBox">
      <div class="routerHeader">
        <div @click="offDropDownRed">
          <RouterLink to="/" :class="{ active: route.path === '/' }">Home</RouterLink>
          <RouterLink to="/categories" :class="{ active: route.path === '/categories' }">Categories</RouterLink>
          <RouterLink to="/SingleNews" :class="{ active: route.path === '/SingleNews' }">Single News</RouterLink>
        </div>


        <div class="dropdown">
          <button @click="toggleDropdown" class="dropdown-button" :class="{ 'button-active': activeItem !== null }">
            {{ selectedOption }}
            <i class="fa fa-caret-down"></i>
          </button>
          <div v-if="dropdownOpen" class="dropdown-content">
            <RouterLink to="/labala1" class="dropdown-item" :class="{ 'active': activeItem === 'Dropdown 0' }"
              @click.native="selectOption('Dropdown 0')">Dropdown 0</RouterLink>
            <RouterLink to="/labala1" class="dropdown-item" :class="{ 'active': activeItem === 'Dropdown 1' }"
              @click.native="selectOption('Dropdown 1')">Dropdown 1</RouterLink>
            <RouterLink to="/labala1" class="dropdown-item" :class="{ 'active': activeItem === 'Dropdown 2' }"
              @click.native="selectOption('Dropdown 2')">Dropdown 2</RouterLink>
            <RouterLink to="/labala1" class="dropdown-item" :class="{ 'active': activeItem === 'Dropdown 3' }"
              @click.native="selectOption('Dropdown 3')">Dropdown 3</RouterLink>
          </div>
        </div>


        <div @click="offDropDownRed">
          <RouterLink to="/labala11" :class="{ active: route.path === '/labala11' }">Contact</RouterLink>
        </div>
      </div>
      <div class="search-container">
        <input type="text" placeholder="Keyword" name="search">
        <button type="submit"><img :src="image1" alt=""></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerHeader {
  background-color: #ffffff;
}

.minWidth {
  background-color: #ffffff;
  padding: 10px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.minWidth .logo {
  font-weight: bold;
  color: #d0021b;
  font-size: 30px;
  cursor: pointer;

  span {
    color: #000;
  }
}

.topnav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 5%;
}

.routerHeader a.active {
  background-color: #ff0000;
  color: white;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 5px 10px;
  text-decoration: none;
  font-size: 17px;
}

.routerHeader {
  margin: 0px 20px;
  display: flex;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #ff0000;
  color: white;
}

.topnav .search-container {
  display: flex;
  align-items: center;
  margin: 3px;
}

.topnav input[type=text] {
  padding: 6px;
  font-size: 16px;
  border: 2px solid #e3e3e3;
  flex: 1;
  box-sizing: border-box;
}

.topnav .search-container button {
  float: right;

  background-size: cover;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
}

.topnav .search-container button img {
  width: 15px;
  height: 15px;
}

.topnav .search-container button:hover {
  background: #ccc;
}

.containermenu input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
}

.containermenu {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
}

.leftmenu {
  display: flex;
  justify-content: end;
  align-items: center;
}

.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
}

.checkmark span {
  width: 32px;
  height: 2px;
  background-color: rgb(0, 0, 0);
  position: absolute;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
}

.checkmark span:nth-child(1) {
  top: 10%;
}

.checkmark span:nth-child(2) {
  top: 50%;
}

.checkmark span:nth-child(3) {
  top: 90%;
}

@media screen and (max-width: 900px) {
  .topnav {
    flex-direction: column;
    align-items: stretch;
  }

  .topnav .search-container {
    width: 100%;
    margin-bottom: 20px;
  }

  .topnav input[type=text],
  .topnav .search-container {
    width: auto;
    margin-left: 10px;

    button {
      margin-right: 10px;
      transform: translateX(-10px)
    }
  }


  .topnav a {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }

  .routerHeader {
    display: block;
  }

  .containerHeader {
    border-radius: 0 0 30px 30px;
  }
}

.dropdown {
  position: relative;
  display: inline-block;
}
.button-active {
  background-color: #ff0000;
}
.dropdown-button {
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
}

.dropdown-content {
  display: block;
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 160px;
}

.dropdown-item {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #333;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}
</style>