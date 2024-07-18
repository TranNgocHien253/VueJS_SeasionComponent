<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
const showSearchBox = ref(true);
const hideSearchBox = ref(true);
const toggleSearchBox = () => {
    showSearchBox.value = !showSearchBox.value;
};

const handleResize = () => {
    if (window.innerWidth < 900) {
        showSearchBox.value = false;
    } else {
        showSearchBox.value = true;
        hideSearchBox.value = false;
    }
};

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
</script>

<template>
  <div class="navbar" >
    <div class="logo">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <span>Oinia</span>
    </div>
    <nav v-show="showSearchBox">
      <a>
        <RouterLink to="/">Home</RouterLink>
      </a>
      <a>
        <RouterLink to="/about">Languges</RouterLink>
      </a>
      <a>
        <RouterLink to="/about">Services</RouterLink>
      </a>
      <a>
        <RouterLink to="/about">Events</RouterLink>
      </a>
      <a>
        <RouterLink to="/about">Contact US</RouterLink>
      </a>
    </nav>
    <div class="right-menu" v-show="showSearchBox">
      <a>
        <RouterLink to="/about">Login</RouterLink>
      </a>
      <span class="search">🔍</span>
    </div>
    <label class="containermenu">
          <div class="leftmenu">
              <input type="checkbox" @click="toggleSearchBox" v-show="hideSearchBox">
              <div class="checkmark">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
      </label>
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

  .containermenu input:checked + .checkmark span:nth-child(1) {
    opacity: 0;
  }

  .containermenu input:checked + .checkmark span:nth-child(2) {
    opacity: 0;
  }

  .containermenu input:checked + .checkmark span:nth-child(3) {
    opacity: 0;
  }
</style>
