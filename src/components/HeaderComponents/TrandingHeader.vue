<script setup>

</script>

<template>
  <div class="tranding-bar">
    <div class="tranding">
      <div class="tranding-label">Tranding</div>
      <div class="tranding-nav">
        <button class="nav-button"><</button>
        <button class="nav-button">></button>
      </div>
      <div class="tranding-text">Labore sit justo amet eos sed, et sanctus dolor diam eos</div>
    </div>
    <div class="date">
      Monday, January 01, 2045
    </div>
  </div>
</template>

<style scoped>
.tranding-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #ddd;
  padding: 0 5%;
}

.tranding {
  display: flex;
  align-items: center;
}

.tranding-label {
  background-color: red;
  color: white;
  padding: 5px 10px;
  margin-right: 10px;
}

.tranding-nav {
  display: flex;
  align-items: center;
}

.nav-button {
  background-color: white;
  border: 1px solid #ddd;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
}

.tranding-text {
  margin-left: 10px;
}

.date {
  color: gray;
}
</style>
