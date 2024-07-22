<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import image1 from '@/assets/image/icons8-search-26.png'

// Lấy thông tin đường dẫn hiện tại
const route = useRoute()
const currentRoute = ref(route.path)
</script>

<template>
<div class="containerHeader">
  <div class="topnav">
    <div class="routerHeader">
      <RouterLink 
        to="/" 
        :class="{ active: currentRoute === '/' }"
        @click="currentRoute = '/'"
      >Home</RouterLink>
      <RouterLink 
        to="/about" 
        :class="{ active: currentRoute === '/about' }"
        @click="currentRoute = '/about'"
      >Categories</RouterLink>
      <RouterLink 
        to="/" 
        :class="{ active: currentRoute === '/labala' }"
        @click="currentRoute = '/labala'"
      >Single News</RouterLink>
      <RouterLink 
        to="/" 
        :class="{ active: currentRoute === '/labala1' }"
        @click="currentRoute = '/labala1'"
      >Dropdown</RouterLink>
      <RouterLink 
        to="/" 
        :class="{ active: currentRoute === '/labala11' }"
        @click="currentRoute = '/labala11'"
      >Contact</RouterLink>
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
.topnav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
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
  float: right;
}

.topnav input[type=text] {
  padding: 6px;
  font-size: 17px;
  border: 1px solid #bcbcbc;
}

.topnav .search-container button {
  float: right;
  background: #ddd;
  background-size: cover;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 13px;
}

.topnav .search-container button img {
  width: 15px;
  height: 15px;
}

.topnav .search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
}
</style>