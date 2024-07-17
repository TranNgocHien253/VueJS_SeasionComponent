<script setup>
</script>
<template>
    <div class="contentOne">
        <h4>Our All Language Videos</h4>
        <h1>It is a long established fact that a reader will be distracted by the readable</h1>
    </div>
    <div class="readmoreCard">
        <div class="columCard">
            <div class="contentCard">

                <div class="circleWave"></div>
            </div>
            <button>Read more</button>
        </div>
        <div class="columCard">
            <div class="contentCard">
                <img src="" alt="">
                <div class="circleWave"></div>
            </div>
            <button>Read more</button>
        </div>
        <div class="columCard">
            <div class="contentCard">
                <img src="" alt="">
                <div class="circleWave"></div>
            </div>
            <button>Read more</button>
        </div>
    </div>
</template>
<style scoped>
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
    background-color:  #dbc64c58;
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