<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
const showSearchBox = ref(true);
const hideSearchBox = ref(false);
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

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
</script>

<template>
  <div class="navbar">
    <div class="menuLogoSpan">
      <div class="logo">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <span>Oinia</span>
      </div>
      <label class="containermenu">
        <div class="leftmenu" v-show="hideSearchBox">
          <input type="checkbox" @click="toggleSearchBox">
          <div class="checkmark">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </label>
    </div>
    <nav v-show="showSearchBox">
      <a>
        <RouterLink to="/">Home</RouterLink>
      </a>
      <a>
        <RouterLink to="/about">Languges</RouterLink>
      </a>
      <a>
        <RouterLink to="/1">Services</RouterLink>
      </a>
      <a>
        <RouterLink to="/2">Events</RouterLink>
      </a>
      <a>
        <RouterLink to="/3">Contact US</RouterLink>
      </a>
    </nav>
    <div class="right-menu" v-show="showSearchBox">
      <a>
        <RouterLink to="/about">Login</RouterLink>
      </a>
      <span class="search">🔍</span>
    </div>
    
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
}

.navbar .logo {
  display: flex;
  align-items: center;
  width: 130px;
}

.navbar .logo img {
  height: 40px;
}

.navbar .logo span {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.navbar nav {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.navbar nav a {
  margin: 5px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
}

.navbar nav a:hover {
  color: #d3b94b;
}
nav a.router-link-active {
  color: #d3b94b;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #d3b94b;
  font-weight: bold;
}
.navbar .right-menu {
  display: flex;
  align-items: center;
}

.navbar .right-menu a {
  margin-left: 15px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
}

.navbar .right-menu a:hover {
  color: #d3b94b;
}

.navbar .search {
  margin-left: 15px;
  font-size: 18px;
  cursor: pointer;
  color: #333;
}

.navbar .search:hover {
  color: #d3b94b;
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

/* .containermenu input:checked + .checkmark span:nth-child(1) {
    opacity: 0;
  }

  .containermenu input:checked + .checkmark span:nth-child(2) {
    opacity: 0;
  }

  .containermenu input:checked + .checkmark span:nth-child(3) {
    opacity: 0;
  } */
  @media (max-width: 900px) {
    .navbar {
    flex-direction: column;
    align-items: flex-start;
  }
  .navbar nav {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
  }
  .navbar nav a {
    display: block;
    width: 100%; /* Ensure the links take the full width */
    text-align: left; /* Align the text to the left */
  }
  .navbar .right-menu {
    display: flex;
    flex-direction: row;
  }
  .navbar .right-menu a, .navbar .search {
    width: 100%; 
    text-align: left;
    margin-left: 5px;
  }
  .containermenu {
    align-self: flex-end; /* Ensure the menu icon stays on the right side */
  }
  .menuLogoSpan {
  display: flex;
  width: 100%;
  justify-content: space-between;
  .containermenu {
    transform: translateY(-10px);
  }
}
}
</style>
