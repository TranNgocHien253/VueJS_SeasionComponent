<template>
    <h2>Menu</h2>
    <input type="text" id="mySearch" placeholder="Search.." title="Type in a category">
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
    <nav v-show="showSearchBox">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/ListPokeMon">ListPokeMon</RouterLink>
    </nav>
    <!-- <button @click="toggleSearchBox" v-show="hideSearchBox">=</button> -->

</template>

<script setup>
import { ref } from 'vue';
import './HeaderDashbroad.css'
import { RouterLink } from 'vue-router';
const showSearchBox = ref(true);
const hideSearchBox = ref(false);
const toggleSearchBox = () => {
    showSearchBox.value = !showSearchBox.value;
};

const handleResize = () => {
    if (window.innerWidth < 600) {
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