<script setup>
import image1 from '@/assets/image/slide1.jpg';
import image2 from '@/assets/image/slide2.jpg';
import image3 from '@/assets/image/slide3.jpg';

const cards = [
  {
    id: 1,
    imageSrc: image1,
    text: "Language Chinese"
  },
  {
    id: 2,
    imageSrc: image2,
    text: "Language Chinese"
  },
  {
    id: 3,
    imageSrc: image3,
    text: "Language Chinese"
  }
];
</script>

<template>
  <div class="pupleOurAll">
    <div class="contentOne">
      <h4>Our All Language Videos</h4>
      <h1>It is a long established fact that a reader will be distracted by the readable</h1>
    </div>
    <div class="readmoreCard">
      <div v-for="card in cards" :key="card.id" class="columCard">
        <div class="contentCard">
          <img :src="card.imageSrc" alt="">
          <div class="circleWave"></div>
          <p>{{ card.text }}</p>
        </div>
      </div>
    </div>
    <div class="actionRigLef">
      <button>q</button>
      <button>p</button>
    </div>
  </div>
</template>

<style scoped>
.pupleOurAll {
    background-color: #2B004F;
    padding: 0 11%;
    color: #ffffff;
}
.contentOne {
    text-align: left;
    align-content: center;
    width: 50%;
    margin: 0 20px;

    h4 {
        color: #DBC64C;
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 10px;
        margin-top: 100px;
    }

    h1 {
        font-size: 1rem;
        margin-bottom: 100px;
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
    width: 30%;
    opacity: .8;
    text-align: center;
    box-sizing: border-box;
    position: relative;
    margin-top: 10px;
}
.columCard:hover {
    opacity: 1;
    
}

.contentCard {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.contentCard img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.contentCard .circleWave {
    position: absolute;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contentCard p {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    font-size: 20px;
    color: #DBC64C;
}

.contentCard:hover {
    background-color: #dbc64c58;
    transition: background-color 0.5s, color 0.3s;
}

.actionRigLef {
    text-align: center;
    align-items: center;
}

.actionRigLef button {
    background-color: #DBC64C;
    border: none;
    margin: 10px;
    width: 50px;
    height: 50px;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.actionRigLef button:first-child {
    background-color: #000000;
}

.actionRigLef button:hover {
    background-color: #000000;
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
</style>
