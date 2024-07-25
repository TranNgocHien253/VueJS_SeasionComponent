<script setup>
import image from '@/assets/image/ImportImage'
import { ref } from 'vue'
const articles = ref([
  { image: image.image1, category: 'Technology', date: 'January 01, 2045', title: 'Sanctus amet sed amet ip sum lorme.' },
  { image: image.image15, category: 'Technology', date: 'January 01, 2045', title: 'Sanctus amet sed amet ip sum lorme.' },
  { image: image.image4, category: 'Technology', date: 'January 01, 2045', title: 'Sanctus amet sed amet ip sum lorme.' },
  { image: image.image12, category: 'Technology', date: 'January 01, 2045', title: 'Sanctus amet sed amet ip sum lorme.' },
  { image: image.image5, category: 'Technology', date: 'January 01, 2045', title: 'Sanctus amet sed amet ip sum lorme.' },
  { image: image.image2, category: 'Technology', date: 'January 01, 2045', title: 'Sanctus amet sed amet ip sum lorme.' },
  { image: image.image4, category: 'Technology', date: 'January 01, 2045', title: 'Sanctus amet sed amet ip sum lorme.' },
]);
</script>

<template>
    <div class="conatainerSpan3">
        <!--1-->
        <div class="hedearPopular">
            <p>Popular</p>
            <a href="#">View All</a>
        </div>
        <!--end1-->
        <!--2-->

        <div class="group3">
            <div class="cardFeatured1">
                <img :src="image.image2" alt="">
                <div class="contentP">
                    <p><span>Technology</span> / January 01, 2045</p>
                    <h2>Sanctus amet sed amet ip sum lorme.</h2>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam natus sit corporis asperiores
                        inventore facere ullam rerum possimus explicabo eveniet!</h5>
                </div>
            </div>
            <div class="cardSmall2">
                <div class="smallgroup">
                    <img :src="image.image3" alt="">
                    <div class="contentP2">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h5>Sanctus amet sed amet ip sum lorme.</h5>
                    </div>
                </div>
                <div class="smallgroup">
                    <img :src="image.image14" alt="">
                    <div class="contentP2">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h5>Sanctus amet sed amet ip sum lorme.</h5>
                    </div>
                </div>
            </div>
        </div>

        <!--end2-->
       
        <!--3-->
        <div class="group3">
            <div class="cardFeatured1">
                <img :src="image.image1" alt="">
                <div class="contentP">
                    <p><span>Technology</span> / January 01, 2045</p>
                    <h2>Sanctus amet sed amet ip sum lorme.</h2>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam natus sit corporis asperiores
                        inventore facere ullam rerum possimus explicabo eveniet!</h5>
                </div>
            </div>
            <div class="cardSmall2">
                <div class="smallgroup">
                    <img :src="image.image2" alt="">
                    <div class="contentP2">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h5>Sanctus amet sed amet ip sum lorme.</h5>
                    </div>
                </div>
                <div class="smallgroup">
                    <img :src="image.image6" alt="">
                    <div class="contentP2">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h5>Sanctus amet sed amet ip sum lorme.</h5>
                    </div>
                </div>
            </div>
        </div>
        <!--end3-->
        <!--4-->
        <div class="group5">
            <div class="ads">
                <span>
                    <h3>&lt;html&gt;</h3>
                    <h6>CODEX</h6>
                </span>|
                <span>ADS 700x70px</span>
            </div>
            <div class="hedearPopular2">
                <p>Latest</p>
                <a href="#">View All</a>
            </div>
        </div>
        <!--end4-->
        <!--5-->
        <div class="group3">
            <div class="cardFeatured1">
                <img :src="image.image4" alt="">
                <div class="contentP">
                    <p><span>Technology</span> / January 01, 2045</p>
                    <h2>Sanctus amet sed amet ip sum lorme.</h2>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam natus sit corporis asperiores
                        inventore facere ullam rerum possimus explicabo eveniet!</h5>
                </div>
            </div>
            <div class="cardSmall2">
                <div class="smallgroup">
                    <img :src="image.image15" alt="">
                    <div class="contentP2">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h5>Sanctus amet sed amet ip sum lorme.</h5>
                    </div>
                </div>
                <div class="smallgroup">
                    <img :src="image.image5" alt="">
                    <div class="contentP2">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h5>Sanctus amet sed amet ip sum lorme.</h5>
                    </div>
                </div>
            </div>
        </div>
        <!--end5-->

        

        <!--6-->
        <div class="group3">
            <div class="cardFeatured1">
                <img :src="image.image5" alt="">
                <div class="contentP">
                    <p><span>Technology</span> / January 01, 2045</p>
                    <h2>Sanctus amet sed amet ip sum lorme.</h2>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam natus sit corporis asperiores
                        inventore facere ullam rerum possimus explicabo eveniet!</h5>
                </div>
            </div>
            <div class="cardSmall2">
                <div class="smallgroup">
                    <img :src="image.image7" alt="">
                    <div class="contentP2">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h5>Sanctus amet sed amet ip sum lorme.</h5>
                    </div>
                </div>
                <div class="smallgroup">
                    <img :src="image.image6" alt="">
                    <div class="contentP2">
                        <p><span>Technology</span> / January 01, 2045</p>
                        <h5>Sanctus amet sed amet ip sum lorme.</h5>
                    </div>
                </div>
            </div>
        </div>
        <!--end6-->
         <!--7-->
         <div class="right1">
            <div class="hedearPopular">
                <p>Follow Us</p>
            </div>
            <div class="socicalCount">
                <div class="socialCount1" style="background-color: blue;">
                    <i class="fa fa-facebook-f"></i>
                    <p>12,345 Fans</p>
                </div>
                <div class="socialCount1" style="background-color: #60B0F4;">
                    <i class="fa fa-twitter"></i>
                    <p>12,345 Followers</p>
                </div>
                <div class="socialCount1" style="background-color: #0285AD;">
                    <i class="fa fa-linkedin"></i>
                    <p>12,345 Connects</p>
                </div>
                <div class="socialCount1" style="background-color: #C8369D;">
                    <i class="fa fa-instagram"></i>
                    <p>12,345 Followers</p>
                </div>
                <div class="socialCount1" style="background-color: #C9412A;">
                    <i class="fa fa-youtube-play"></i>
                    <p>12,345 Subscribers</p>
                </div>
                <div class="socialCount1" style="background-color: #19ACDA;">
                    <i class="fa fa-vimeo"></i>
                    <p>12,345 Followers</p>
                </div>
            </div>
            <div class="hedearPopular">
                <p>NewSletter</p>
            </div>
            <div class="EmailForm">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis obcaecati blanditiis quaerat?</p>
                <div class="EmailSearch">
                    <input type="text" placeholder="Your email">
                    <button>Sign Up</button>
                </div>
                <p>Lorem ipsum dolor sit.</p>
            </div>
            <div class="imageSigle">
                <img :src="image.image9" alt="">
            </div>
            <div class="hedearPopular">
                <p>Tranding</p>
            </div>
            <div class="cardSmall1">
                <div v-for="(article, index) in articles" :key="index" class="smallgroup">
                <img :src="article.image" alt="">
                <div class="contentP2">
                    <p><span>{{ article.category }}</span> / {{ article.date }}</p>
                    <h5>{{ article.title }}</h5>
                </div>
                </div>
            </div>
            <div class="hedearPopular">
                <p>Tags</p>
            </div>
            <div class="button-container">
                <button class="grid-button">Button 13</button>
                <button class="grid-button">Button</button>
                <button class="grid-button">Button 3333</button>
                <button class="grid-button">Button 4</button>
                <button class="grid-button">Button 5</button>
                <button class="grid-button">Button 6ada</button>
                <button class="grid-button">Button 7</button>
                <button class="grid-button">Button 87654</button>
            </div>
        </div>
        <!--end7-->

    </div>

</template>

<style scoped>
.conatainerSpan3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 10px;
    /* background-color: #2196F3; */
    margin: 10px 10%;
}
a {
    text-decoration: none;
    color: #8b8b8b;
}
.hedearPopular {
    grid-column: 1 / span 2;
    grid-row: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 5px;
    margin-bottom: 10px;
    padding-left: 20px;
    font-size: larger;
    font-weight: bolder;
    height: 50px;

    a {
        text-decoration: none;
        font-size: 12px;
    }
}

.right1 {
    grid-column: 3;
    grid-row: 1 / span 5;
    /* display: grid; */
    /* gap:10px; */
}

.cardFeatured1 {
    background-color: white;
    width: 100%;
    position: relative;
    margin-top: -10px;
    span {
        color: red;
    }

    margin-bottom: 10px;
}

.cardFeatured1 img {
    width: 100%;
    height: 50%;
}

h5 {
    color: rgb(103, 103, 103);
    font-weight: normal;
}

.contentP {
    margin: 20px;
    padding: 10px;
}
.cardSmall2, .cardSmall1 {
    display: grid;
    gap: 10px;
    margin-bottom: 10px;
    
}
.smallgroup {
    display: flex;
    background-color: #fff;
    span {
        color: red;
    }
}

.smallgroup img {
    width: 90px;
    object-fit: cover;
}

.contentP2 {
    margin: 10px;
}

.socicalCount {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 10px 0;
}

.socialCount1 {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px;
    border: 1px solid transparent;
    background-color: #f9f9f9;
    color: #fff;
}

.socialCount1 p {
    margin: 5px;
    font-size: 13px;
}

.fa {
    font-size: 20px;
    margin-right: 10px;
}
.EmailForm {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  justify-content: center;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.EmailForm p {
  margin-bottom: 16px;
  font-size: 1rem;
  color: #4b5563;
}

.EmailSearch {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.EmailSearch input {
  flex: 1;
  border: 1px solid #d1d5db;
  padding: 10px;
  font-size: 1rem;
  box-sizing: border-box;
}

.EmailSearch input::placeholder {
  color: #9ca3af;
}

.EmailSearch button {
  background-color: #f63b3b;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 40px;
}

.EmailSearch button:hover {
  background-color: #eb2525;
}

.imageSigle {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 200px;
    margin: 10px 0;
}

.imageSigle img {
    width: 100%;
    object-fit: cover;
}

.group5 {
    grid-column: 1 / span 2;
    grid-row: 3;
}

.hedearPopular2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 5px;
    margin-bottom: 10px;
    font-size: larger;
    font-weight: bolder;
    height: 50px;

    a {
        text-decoration: none;
        font-size: 12px;
    }
}

.group5 .ads {
    background-color: #000;
    color: #fff;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    h3 {
        font-size: 40px;
    }
}

.group5 .ads span {
    margin: 0 20px;
}

.group5 .ads span:first-child {
    text-align: end;
}
.button-container {
    display: flex;
    flex-wrap: wrap; 
    gap: 2px;
    padding: 10px;
}

.grid-button {
    padding: 5px 10px;
    background-color: transparent;
    border: 1px solid #656565;
    color: #8b8b8b;
    cursor: pointer;
    transition: background-color 0.3s;
    white-space: nowrap; 
}

.grid-button:hover {
    background-color: #b8b8b87b;
}
@media (max-width: 900px) {
    .conatainerSpan3 {
    display: block;
}
.smallgroup img {
    width: 30%;
}

}
</style>
