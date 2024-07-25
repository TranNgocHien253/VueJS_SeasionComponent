<script setup>
import { ref, computed, onMounted } from 'vue';
import image from '@/assets/image/ImportImage';

const itemsPerPage = ref(window.innerWidth < 900 ? 1 : 4); // Dynamically set based on screen width
const currentIndex = ref(0);

const cardItems = [
    { src: image.image1, category: 'Technology', date: 'January 01, 2045', title: 'Sanctus amet sed amet ip sum lorme.' },
    { src: image.image2, category: 'Technology', date: 'January 02, 2045', title: 'Sanctus amet sed amet ip sum lorme.' },
    { src: image.image3, category: 'Technology', date: 'January 03, 2045', title: 'Sanctus amet sed amet ip sum lorme.' },
    { src: image.image4, category: 'Technology', date: 'January 04, 2045', title: 'Sanctus amet sed amet ip sum lorme.' },
    { src: image.image5, category: 'Technology', date: 'January 05, 2045', title: 'Sanctus amet sed amet ip sum lorme.' },
    { src: image.image6, category: 'Technology', date: 'January 06, 2045', title: 'Sanctus amet sed amet ip sum lorme.' },
    { src: image.image7, category: 'Technology', date: 'January 07, 2045', title: 'Sanctus amet sed amet ip sum lorme.' },
    { src: image.image8, category: 'Technology', date: 'January 08, 2045', title: 'Sanctus amet sed amet ip sum lorme.' },
];

const visibleItems = computed(() => cardItems.slice(currentIndex.value, currentIndex.value + itemsPerPage.value));

function handleLeftClick() {
    if (currentIndex.value > 0) {
        currentIndex.value -= itemsPerPage.value;
    }
}

function handleRightClick() {
    if (currentIndex.value + itemsPerPage.value < cardItems.length) {
        currentIndex.value += itemsPerPage.value;
    }
}

// Update itemsPerPage based on screen width on mount and resize
onMounted(() => {
    function updateLayout() {
        itemsPerPage.value = window.innerWidth < 900 ? 1 : 4;
    }
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
});
</script>


<template>
    <div class="conatainerSpan3">
        <div class="listGroup">
            <div class="groupList1">
                <p>Featured</p>
                <a href="#">View All</a>
            </div>
            <div class="groupList4">
                <div class="actionBtn">
                    <button @click="handleLeftClick" :disabled="currentIndex === 0">&lt;</button>
                    <button @click="handleRightClick"
                        :disabled="currentIndex + itemsPerPage >= cardItems.length">&gt;</button>
                </div>
                <div v-for="(item, index) in cardItems.slice(currentIndex, currentIndex + itemsPerPage)" :key="index"
                    class="cardFeatured">
                    <img :src="item.src" alt="">
                    <div class="text-overlay">
                        <p>{{ item.category }} / {{ item.date }}</p>
                        <h3>{{ item.title }}</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="collum2">
            <div class="listGroup">
                <div class="groupList2">
                    <div class="groupList1">
                        <p>Business</p>
                        <div class="action">
                            <button>&lt;</button>
                            <button>&gt;</button>
                        </div>
                    </div>
                </div>
                <div class="groupList4">
                    <div class="cardFeatured1">
                        <img :src="image.image12" alt="">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h3>Sanctus amet sed amet ip sum lorme.</h3>
                    </div>
                    <div class="cardFeatured1">
                        <img :src="image.image3" alt="">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h3>Sanctus amet sed amet ip sum lorme.</h3>
                    </div>
                </div>
            </div>
            <div class="listGroup">
                <div class="groupList2">
                    <div class="groupList1">
                        <p>Technology</p>
                        <div class="action">
                            <button>&lt;</button>
                            <button>&gt;</button>
                        </div>
                    </div>
                </div>
                <div class="groupList4">
                    <div class="cardFeatured1">
                        <img :src="image.image5" alt="">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h3>Sanctus amet sed amet ip sum lorme.</h3>
                    </div>
                    <div class="cardFeatured1">
                        <img :src="image.image4" alt="">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h3>Sanctus amet sed amet ip sum lorme.</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="collum2">
            <div class="listGroup">
                <div class="groupList2">
                    <div class="groupList1">
                        <p>Entertainment</p>
                        <div class="action">
                            <button>&lt;</button>
                            <button>&gt;</button>
                        </div>
                    </div>
                </div>
                <div class="groupList4">
                    <div class="cardFeatured1">
                        <img :src="image.image6" alt="">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h3>Sanctus amet sed amet ip sum lorme.</h3>
                    </div>
                    <div class="cardFeatured1">
                        <img :src="image.image9" alt="">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h3>Sanctus amet sed amet ip sum lorme.</h3>
                    </div>
                </div>
            </div>
            <div class="listGroup">
                <div class="groupList2">
                    <div class="groupList1">
                        <p>Sport</p>
                        <div class="action">
                            <button>&lt;</button>
                            <button>&gt;</button>
                        </div>
                    </div>
                </div>
                <div class="groupList4">
                    <div class="cardFeatured1">
                        <img :src="image.image2" alt="">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h3>Sanctus amet sed amet ip sum lorme.</h3>
                    </div>
                    <div class="cardFeatured1">
                        <img :src="image.image1" alt="">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h3>Sanctus amet sed amet ip sum lorme.</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.conatainerSpan3 {
  grid-template-rows: auto auto;
  /* gap: 10px; */
  margin: 10px 10%;
}
a {
    text-decoration: none;
    color: #8b8b8b;
    font-weight: normal;
}
.listGroup {
  display: flex;
  flex-direction: column;
}

.collum2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.groupList2 {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
}

.groupList1 {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 5px;
  margin-bottom: 10px;
  padding-left: 20px;
  font-weight: bolder;
}

.groupList4 {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.actionBtn {
  position: absolute;
  top: 50%;
  width: calc(100% - 20px);
  display: flex;
  justify-content: space-between;
  justify-items: center;
  transform: translateY(-50%);
  z-index: 2;
}

button {
  background-color: transparent;
  border: 2px solid rgb(215, 215, 215);
  color: rgb(96, 96, 96);
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin: 0 5px;
  font-size: 20px;
  cursor: pointer;
}

button:hover {
  background-color: #a8a8a83e;
  transition: background-color .3s;
}

.cardFeatured {
  width: 100%;
  height: 300px;
  position: relative;
}

.cardFeatured img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  color: rgb(255, 255, 255);
  width: 100%;
  padding: 10px;
  font-size: small;
}

.text-overlay p,
.text-overlay h3 {
  margin: 0;
}

.cardFeatured1 {
  background-color: white;
  width: 100%;
  position: relative;
}

.cardFeatured1 img {
  width: 100%;
  height: 50%;
  object-fit: cover;
}

.cardFeatured1 p,
h3 {
  margin: 10px;
  font-size: small;
}

@media (max-width: 800px) {
  .collum2 {
    display: block;
  }

  .groupList4 {
    display: flex;
    flex-direction: column;
  }

  .cardFeatured1 {
    display: none; 
    margin-bottom: 20px;
    height: auto;
  }
  .cardFeatured1:first-of-type {
    display: block; /* Chỉ hiện cardFeatured1 đầu tiên */
  }
  .actionBtn {
    width: 100%;
    top: 50%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }

  button {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
}
</style>
