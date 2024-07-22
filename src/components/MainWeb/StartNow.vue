<script setup>
const cards = [
  {
    id: 1,
    imageSrc: "path/to/image1.jpg",
    text: "An Easy<br> Study Approach"
  },
  {
    id: 2,
    imageSrc: "path/to/image2.jpg",
    text: "An Easy<br> Study Approach"
  },
  {
    id: 3,
    imageSrc: "path/to/image3.jpg",
    text: "An Easy<br> Study Approach"
  },
  {
    id: 4,
    imageSrc: "path/to/image4.jpg",
    text: "An Easy<br> Study Approach"
  }
];
</script>
<template>

  <div class="contentOne">
    <h4>Start Now</h4>
    <h1>Learn a new language</h1>
  </div>
  <div class="readmoreCard">
    <div v-for="card in cards" :key="card.id" class="columCard">
      <div class="contentCard">
        <!-- <img :src="card.imageSrc" alt=""> -->
        <p v-html="card.text"></p>
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
  font-size: 30px;

  h4 {
    color: #DBC64C;
    margin-top: 100px;
    font-size: 60px;
  }

  h1 {
    margin-bottom: 60px;
  }
}

.readmoreCard {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
}

.columCard {
  width: 20%;
  text-align: center;
  box-sizing: border-box;
}

@media (max-width: 1444px) {
  .columCard {
    width: 30%;
  }
}

@media (max-width: 1024px) {
  .columCard {
    width: 45%;
  }
}

@media (max-width: 768px) {
  .columCard {
    width: 100%;
  }
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
  width: 70%;
}

@media (max-width: 600px) {
  .contentOne {
    font-size: 20px;
    transition: font-size .3s;
  }
}

/* @media (max-width: 768px) {
  .columCard {
    width: calc(50% - 10px); 
  }
}
*/
</style>