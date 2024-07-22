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
          <div class="circleWave">
            <button class="button">
  <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
</button>
          </div>
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
    background-color: #270B60;
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
    width: 70px;
    height: 70px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
}
.button {
  display: flex;
  justify-content: center;
  color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background: #ffd900c7;
  transition: all 0.3s ease-in-out 0s;
  box-shadow: rgba(239, 246, 193, 0.698) 0px 0px 0px 0px;
  animation: 1.2s cubic-bezier(0.8, 0, 0, 1) 0s infinite normal none running pulse;
  align-items: center;
  border: 0;
}

.button:is(:hover, :focus) {
  transform: scale(1.2);
}

@keyframes pulse {
  100% {
    box-shadow: 0 0 0 45px rgba(193,244,246,0);
  }
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
