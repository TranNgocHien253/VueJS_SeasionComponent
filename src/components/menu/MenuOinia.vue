<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="div">
        <div class="centerMenu">
            <p><RouterLink to="/">Home</RouterLink></p>
            <p><RouterLink to="/about">Languges</RouterLink></p>
            <p><RouterLink to="/about">Services</RouterLink></p>
            <p><RouterLink to="/about">Events</RouterLink></p>
            <p><RouterLink to="/about">Contact US</RouterLink></p>
        </div>
        <div class="endMenu">
            <p><RouterLink to="/about">Login</RouterLink></p>
            <button>search</button>
        </div>
    </div>
</template>

<style scoped>
.div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.centerMenu {
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.endMenu {
  display: flex;
  align-items: center;
}

.endMenu p {
  margin-right: 10px; /* Thêm khoảng cách giữa link và button */
}
.endMenu {
    display: flex;
    p {
        padding-left: 30px;
    }
}
p {
    text-align: center;
    align-content: center;
    margin: 5px 10px 5px 10px;
    padding: 5px;
}
</style>
