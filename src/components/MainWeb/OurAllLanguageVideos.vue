<script setup>
</script>
<template>
    <div class="pupleOurAll">
        <div class="contentOne">
            <h4>Our All Language Videos</h4>
            <h1>It is a long established fact that a reader will be distracted by the readable</h1>
        </div>
        <div class="readmoreCard">
            <div class="columCard">
                <div class="contentCard">
                    <div class="circleWave"></div>
                    <p>video 1</p>
                </div>
            </div>
            <div class="columCard">
                <div class="contentCard">
                    <img src="" alt="">
                    <div class="circleWave"></div>
                    <p>video 2</p>
                </div>
            </div>
            <div class="columCard">
                <div class="contentCard">
                    <img src="" alt="">
                    <div class="circleWave"></div>
                    <p>video 3</p>
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
    text-align: center;
    box-sizing: border-box;
}


.contentCard {
    background-image: url('@/assets/image/slide3.jpg');
    background-size: cover;
    width: 100%;
    height: 200px;
    background-color: #4a483f;
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
    color: #DBC64C;
}

.contentCard:hover {
    background-color: #dbc64c58;
    transition: background-color 0.5s, color 0.3s;
}

.actionRigLef {
    text-align: center;
    align-items: center;

    button {
        background-color: #DBC64C;
        border: none;
        margin: 10px;
        width: 50px;
        height: 50px;
        color: #ffffff;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    }

    button:first-child {
        background-color: #000000;
    }

    button:hover {
        background-color: #000000;
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
</style>