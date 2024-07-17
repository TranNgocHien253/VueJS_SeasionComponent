<script setup>
</script>
<template>
  <div class="containerWrapper">
    <div class="translateleft">
      <h4>language School</h4>
      <h1>Any <br> language You want</h1>
      <button>read more</button>
    </div>
  </div>
</template>
<style scoped>
.containerWrapper {
  background-color: blueviolet;
  height: 60vh;
  width: 100%;
  padding: 20px;
}

.translateleft {
  text-align: center;
  align-content: center;

  button {
    background-color: transparent;
    border: 2px solid yellow;
    padding: 5px 10px;
    color: yellow;
    margin: 50px;
  }

  h4 {
    color: yellow;
    margin-top: 150px;
  }

  h1 {
    font-size: 60px;
    color: white;
  }
}
</style>