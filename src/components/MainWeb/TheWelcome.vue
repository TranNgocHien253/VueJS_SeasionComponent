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
  background-color: #270B60;
  background-size: cover;
  /* background-image: url('@/assets/image/slide1.jpg'); */
  background-position: center;
  height: auto;
  width: 100%;
  padding: 20px;
  font-size: 40px;
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
    transition: background-color .3s, color .3s;
  }

  button:hover {
    background-color: #DBC64C;
    color: #ffffff;
  }

  h4 {
    color: yellow;
    margin-top: 40px;
  }

  h1 {
    color: white;
  }
}


@media (max-width: 600px) {
  .containerWrapper {
    font-size: 25px;
    transition: font-size .3s;
  }
}
</style>