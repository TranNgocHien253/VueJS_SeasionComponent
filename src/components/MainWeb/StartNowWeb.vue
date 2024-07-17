<script setup>
</script>
<template>

  <div class="contentOne">
    <h4>language School</h4>
    <h1>Learn a new language</h1>
  </div>
  <div class="readmoreCard">
    <div class="columCard">
      <div class="contentCard">

        <p>An Easy<br> Study Approach</p>
      </div>
      <button>Read more</button>
    </div>
    <div class="columCard">
      <div class="contentCard">
        <img src="" alt="">
        <p>An Easy<br> Study Approach</p>
      </div>
      <button>Read more</button>
    </div>
    <div class="columCard">
      <div class="contentCard">
        <img src="" alt="">
        <p>An Easy<br> Study Approach</p>
      </div>
      <button>Read more</button>
    </div>
    <div class="columCard">
      <div class="contentCard">
        <img src="" alt="">
        <p>An Easy<br> Study Approach</p>
      </div>
      <button>Read more</button>
    </div>
  </div>
</template>
<style scoped>
.contentOne {
  text-align: left;
  align-content: center;
  padding: 20px;

  h4 {
    color: #DBC64C;
    font-size: 60px;
    margin-top: 100px;
  }

  h1 {
    font-size: 60px;
    margin-bottom: 100px;
  }
}

.readmoreCard {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
}

.columCard {
  flex: 1 1 200px;
  text-align: center;
  box-sizing: border-box;
}


.contentCard {
  width: 100%;
  height: 200px;
  background-color: #DBC64C;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
}


.contentCard img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.contentCard p {
  margin: 0;
  font-size: 20px;
  color: #000;
  /* Màu chữ */
}

.contentCard:hover {
  background-color: aliceblue;
  transition: background-color 0.5s, color 0.3s;
}

button {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #DBC64C;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

button:hover {
  color: #DBC64C;
}

/* @media (max-width: 768px) {
  .columCard {
    width: calc(50% - 10px); 
  }
}

@media (max-width: 480px) {
  .columCard {
    width: 100%; 
  }
} */
</style>