<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import image from '@/assets/image/ImportImage';

// Array of groupHeader items
const items = [
    { image: image.image1, text: 'AI enhances work efficiency and automation.' },
    { image: image.image2, text: 'Blockchain ensures transparent and secure transactions.' },
    { image: image.image3, text: '5G offers fast speeds and stable connectivity.' }
];

const currentIndex = ref(0);
const isWideScreen = ref(window.innerWidth >= 900);

const handleResize = () => {
    isWideScreen.value = window.innerWidth >= 900;
};

const prevSlide = () => {
    if (!isWideScreen.value) {
        currentIndex.value = (currentIndex.value - 1 + items.length) % items.length;
    }
};

const nextSlide = () => {
    if (!isWideScreen.value) {
        currentIndex.value = (currentIndex.value + 1) % items.length;
    }
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <div class="conatainerSpan3">
        <div class="headerHome">
            <button class="nav-button left" v-if="!isWideScreen" @click="prevSlide">&lt;</button>
            <div class="groupHeader" v-for="(item, index) in items" :key="index"
                :class="{ active: index === currentIndex, hidden: !isWideScreen && index !== currentIndex }">
                <img :src="item.image" alt="">
                <p>{{ item.text }}</p>
            </div>
            <button class="nav-button right" v-if="!isWideScreen" @click="nextSlide">&gt;</button>
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
                        <img :src="image.image8" alt="">
                        <p>Business</p>
                    </div>
                    <div class="groupCategories">
                        <img :src="image.image7" alt="">
                        <p>Technology</p>
                    </div>
                    <div class="groupCategories">
                        <img :src="image.image6" alt="">
                        <p>Entertainment</p>
                    </div>
                    <div class="groupCategories">
                        <img :src="image.image5" alt="">
                        <p>sport</p>
                    </div>
                </div>
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
a {
    text-decoration: none;
    color: #8b8b8b;
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
  position: relative;
  overflow: hidden;
  margin: 0;
}

.groupHeader {
    width: 100%;
  max-height: 100px;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin: 0 10px;
}


.groupHeader img {
    width: 100px;
    height: auto;
    background-size: cover;
    margin-right: 10px;
    object-fit: cover;
}

.groupHeader p {
    padding: 10px 0;
}

.nav-button {
    background-color: transparent;
    border: 2px solid rgba(0, 0, 0, 0.404);
    color: rgba(0, 0, 0, 0.872);
    width: 40px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.nav-button.left {
    left: 10px;
}

.nav-button.right {
    right: 10px;
}

.nav-button:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transition: background-color .3s;
}

@media screen and (min-width: 900px) {
  .headerHome {
    flex-direction: row;
    overflow: visible;
  }

  .groupHeader {
    display: flex;
  }

  .nav-button {
    display: none;
  }
  
}

@media screen and (max-width: 899px) {
  .groupHeader {
    display: none;
  }

  .groupHeader.active {
    display: flex;
  }
  .colum2 {
        /* Chuyển sang flexbox layout */
        display: flex;
        flex-direction: column; /* Sắp xếp theo hàng dọc */
        gap: 20px;
    }

    .mainHome,
    .categoriesRight {
        /* Đảm bảo các phần tử chiếm toàn bộ chiều rộng */
        width: 100%;
    }

    .groupCategoriesShow {
        /* Đổi cách sắp xếp cho các phần tử bên trong */
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .groupCategories {
        /* Đảm bảo các nhóm categories sử dụng full width */
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: .9;
        box-shadow: #000000;
    }
    .groupCategories:hover {
        opacity: 1;
    }
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
    background-image: url('@/assets/image/image (11).jpg');
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
    width: 40px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
}

button:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transition: background-color .3s;
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
    padding: 5px 5px 5px 20px;
    margin-bottom: 10px;
    font-weight: bolder;
    a {
        text-decoration: none;
        font-size: 15px;
    }
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
    height: 56.5px;
}

.groupCategories img {
    width: 100%;
    height: 100%; /* Đặt chiều cao để chiếm toàn bộ chiều cao của phần tử cha */
    object-fit: cover;
}

.groupCategories p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2em;
    text-align: center;
    z-index: 1;
}
@media screen and (max-width: 899px) {
    .groupCategoriesShow {
        display: flex;
        flex-direction: column; /* Sắp xếp các phần tử thành hàng dọc */
        gap: 10px; /* Khoảng cách giữa các phần tử */
    }

    .groupCategories {
        width: 100%; /* Đảm bảo các nhóm categories chiếm toàn bộ chiều rộng */
        height: 100px; /* Đảm bảo chiều cao tự động điều chỉnh */
    }
}
</style>
