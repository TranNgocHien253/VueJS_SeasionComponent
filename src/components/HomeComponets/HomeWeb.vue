<script setup>
import image from '@/assets/image/ImportImage'
</script>

<template>
    <div class="conatainerSpan3">
        <div class="headerHome">
            <div class="groupHeader">
                <img :src="image.image1" alt="">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="groupHeader">
                <img :src="image.image2" alt="">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="groupHeader">
                <img :src="image.image3" alt="">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div class="colum2">
            <div class="mainHome">
                <div class="groupMain">
                    <div class="actionBtn">
                        <button>&lt;</button>
                        <button>&gt;</button>
                    </div>
                    <p>Technology / January 01, 2045</p>
                    <h3>Sanctus amet sed amet ip sum lorme. Dolores et erat alitr sea sed.</h3>
                </div>
            </div>
            <div class="categoriesRight">
                <div class="groupCategoriesAll">
                    <p>Categories</p>
                    <a href="#">View All</a>
                </div>
                <div class="groupCategoriesShow">
                    <div class="groupCategories">
                        <img :src="image.image3" alt="">
                        <p>Categories</p>
                    </div>
                    <div class="groupCategories">
                        <img :src="image.image3" alt="">
                        <p>Categories</p>
                    </div>
                    <div class="groupCategories">
                        <img :src="image.image3" alt="">
                        <p>Categories</p>
                    </div>
                    <div class="groupCategories">
                        <img :src="image.image3" alt="">
                        <p>Categories</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="listGroup">
            <div class="groupList4">
                

            </div>
        </div>
    </div>
</template>

<style scoped>
.conatainerSpan3 {
    grid-template-rows: auto auto;
    gap: 20px;
    margin: 10px 10%;
}

.colum2 {
    margin: 20px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

.headerHome {
    display: flex;
    align-items: center;
    margin: 0;
}

.groupHeader {
    display: flex;
    width: 100%;
    margin: 0 10px;
    background-color: #fff;
    max-height: 100px;
}

.groupHeader img {
    width: 100px;
    height: auto;
    background-size: cover;
    margin-right: 10px;
}

.groupHeader p {
    padding: 10px 0;
}

.mainHome {
    grid-column: 1 / 3;
    width: 100%;
    min-height: 200px;
}

.groupMain {
    position: relative;
    background-color: aqua;
    min-height: 300px;
    background-image: url('@/assets/image/images (12).jpg');
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.actionBtn {
    position: absolute;
    top: 50%;
    width: calc(100% - 20px);
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
}

button {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    width: 60px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
}

button:hover {
    background-color: rgba(255, 255, 255, 0.3);
}

.groupMain p,
.groupMain h3 {
    text-align: left;
    color: white;
    margin: 0;
}

.groupMain p {
    margin-top: auto;
}

.groupMain h3 {
    margin-top: 10px;
    font-size: 1.5rem;
}

.categoriesRight {
    grid-column: 3 / 4;
}

.groupCategoriesAll {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 5px;
    margin-bottom: 10px;
}

.groupCategoriesShow {
    display: grid;
    gap: 10px;
    width: 100%;
    height: 100%;
}

.groupCategoriesShow {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.groupCategories {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 19%;
}

.groupCategories img {
    position: absolute;
    width: 100%;
}

.groupCategories p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.2em;
    text-align: center;
    z-index: 1;
}
</style>
