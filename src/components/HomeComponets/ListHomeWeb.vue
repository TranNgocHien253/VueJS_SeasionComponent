<script setup>
import image from '@/assets/image/ImportImage'
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
                    <button>&lt;</button>
                    <button>&gt;</button>
                </div>
                <div class="cardFeatured">
                    <img :src="image.image5" alt="">
                    <div class="text-overlay">
                        <p>Technology / January 01, 2045</p>
                        <h3>Sanctus amet sed amet ip sum lorme.</h3>
                    </div>
                </div>
                <div class="cardFeatured">
                    <img :src="image.image5" alt="">
                    <div class="text-overlay">
                        <p>Technology / January 01, 2045</p>
                        <h3>Sanctus amet sed amet ip sum lorme.</h3>
                    </div>
                </div>
                <div class="cardFeatured">
                    <img :src="image.image5" alt="">
                    <div class="text-overlay">
                        <p>Technology / January 01, 2045</p>
                        <h3>Sanctus amet sed amet ip sum lorme.</h3>
                    </div>
                </div>
                <div class="cardFeatured">
                    <img :src="image.image5" alt="">
                    <div class="text-overlay">
                        <p>Technology / January 01, 2045</p>
                        <h3>Sanctus amet sed amet ip sum lorme.</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="listGroup">
            <div class="groupList2">
                <div class="groupList1">
                    <p>Business</p>
                    <div class="action">
                        <button>&lt;</button>
                        <button>&gt;</button>
                    </div>
                </div>
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
                <div class="cardFeatured1">
                    <img :src="image.image9" alt="">
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
                    <p>Entertainment</p>
                    <div class="action">
                        <button>&lt;</button>
                        <button>&gt;</button>
                    </div>
                </div>
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
                    <img :src="image.image6" alt="">
                    <p><span>Technology</span> / January 01, 2045</p>
                    <h3>Sanctus amet sed amet ip sum lorme.</h3>
                </div>
                <div class="cardFeatured1">
                    <img :src="image.image7" alt="">
                    <p><span>Technology</span> / January 01, 2045</p>
                    <h3>Sanctus amet sed amet ip sum lorme.</h3>
                </div>
                <div class="cardFeatured1">
                    <img :src="image.image9" alt="">
                    <p><span>Technology</span> / January 01, 2045</p>
                    <h3>Sanctus amet sed amet ip sum lorme.</h3>
                </div>
                <div class="cardFeatured1">
                    <img :src="image.image8" alt="">
                    <p><span>Technology</span> / January 01, 2045</p>
                    <h3>Sanctus amet sed amet ip sum lorme.</h3>
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

.listGroup {
    margin: 0 10px;
    a {
        text-decoration: none;
        font-size: 15px;
    }
}

.groupList2 {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 10px;

    .groupList1 {
        flex: 1;
    }
    
    button {
        background-color: transparent;
        border: 1px solid rgb(176, 171, 171);
        color: rgb(176, 171, 171);
        border-radius: 5px;
        width: 30px;
        height: 30px;
        font-size: 20px;
        cursor: pointer;
        margin-left: 10px;
    }

    button:hover {
        background-color: #ffffff3e;
        transition: background-color .3s;
    }
    .groupList1 p,
    .groupList1 a {
        margin: 0;
    }
}


.groupList1 {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 5px;
    margin-bottom: 10px;
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
    transform: translateY(-50%);
    z-index: 2;
}

button {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    width: 40px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
}

button:hover {
    background-color: #ffffff3e;
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
    span {
        color: red;
    }
}

.cardFeatured1 img {
    width: 100%;
    height: 50%;
}

.cardFeatured1 p,
h3 {
    margin: 10px;
    font-size: small;
}
</style>
