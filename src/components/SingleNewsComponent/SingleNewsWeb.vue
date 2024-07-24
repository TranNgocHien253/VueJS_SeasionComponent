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
    <div class="addressCategoties">
        <p><span>Home</span> / <span>Category</span> / <span>Technology</span> / News Title</p>
    </div>
    <div class="conatainerSpan3">
        <!--6-->
        <div class="group3">
            <div class="cardFeatured1">
                <img :src="image.image11" alt="">
                <div class="contentP">
                    <p><span>Technology</span> / January 01, 2045</p>
                    <h2>Est stet amet ipsum stet clita rebum duo.</h2>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae necessitatibus provident
                        quas nulla architecto voluptatibus, at deserunt illum dignissimos, officiis facere velit
                        sapiente assumenda magni voluptates quisquam a laudantium dicta nisi optio sequi? Voluptatum
                        alias, corrupti quam labore excepturi nisi, error cumque a, possimus non aliquam perferendis.
                        Cupiditate ratione quis perspiciatis a, omnis eius, mollitia recusandae odit nihil expedita
                        tempore!</h4><br>
                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, ea iste necessitatibus
                        possimus error tempore nemo exercitationem provident beatae doloribus culpa iure cumque. Beatae,
                        a minima! Enim ratione ea, libero odio asperiores quasi iste consequatur odit ipsum dignissimos!
                        Fugit adipisci quas natus obcaecati! Placeat sint consectetur, esse ipsam quibusdam dolor
                        laboriosam, dolore repellat hic cupiditate rem sit!</h4>
                </div>
                <div class="title">
                    <p>Est dolor lorem et ea</p>
                </div>
                <div class="contentP-and-img">
                    <div class="hinh_anh">
                        <img :src="image.image5" alt="Image description">
                    </div>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, numquam molestiae unde
                        voluptate repellendus laudantium cumque voluptatibus autem reprehenderit ipsum impedit nemo cum
                        quibusdam natus magnam, hic facere. Exercitationem, repudiandae quasi? Deleniti tenetur deserunt
                        quaerat aperiam nobis, assumenda doloribus? Iure eligendi dicta fugit veniam? Quam architecto
                        quaerat commodi soluta exercitationem ducimus dolores expedita. Asperiores doloribus dolorem
                        cupiditate optio est alias! Consequatur, consequuntur voluptate? Architecto fuga, autem nam
                        nihil placeat molestiae numquam beatae, tenetur, delectus praesentium commodi adipisci
                        doloremque debitis perspiciatis modi maiores minus earum suscipit molestias soluta eos. Ipsam,
                        ipsum?</h4>
                </div>
                <div class="title">
                    <p>Est dolor lorem et ea</p>
                </div>
                <div class="contentP-and-img">
                    <div class="hinh_anh2">
                        <img :src="image.image5" alt="Image description">
                    </div>
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, numquam molestiae unde
                        voluptate repellendus laudantium cumque voluptatibus autem reprehenderit ipsum impedit nemo cum
                        quibusdam natus magnam, hic facere. Exercitationem, repudiandae quasi? Deleniti tenetur deserunt
                        quaerat aperiam nobis, assumenda doloribus? Iure eligendi dicta fugit veniam? Quam architecto
                        quaerat commodi soluta exercitationem ducimus dolores expedita. Asperiores doloribus dolorem
                        cupiditate optio est alias! Consequatur, consequuntur voluptate? Architecto fuga, autem nam
                        nihil placeat molestiae numquam beatae, tenetur, delectus praesentium commodi adipisci
                        doloremque debitis perspiciatis modi maiores minus earum suscipit molestias soluta eos. Ipsam,
                        ipsum?</h4>
                </div>
            </div>
            <div class="cardSmall2">
                <div class="title">
                    <p>3 Comments</p><!--count comment here-->
                </div>
                <div class="smallgroupCommemt">
                    <img :src="image.image6" alt="">
                    <div class="commnentFather">
                        <div class="contentP2">
                            <p><span>Technology</span> / January 01, 2045</p>
                            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et beatae veritatis repellat
                                adipisci, ullam a non est aperiam rerum, deserunt eligendi, numquam explicabo delectus
                                magnam dolore sapiente. Illum, blanditiis modi.</h4>
                            <button>Reply</button>
                        </div>
                        <div class="commnentSon">
                            <!--if have comment-->
                        </div>
                    </div>
                </div>
                <div class="smallgroupCommemt">
                    <img :src="image.image6" alt="">
                    <div class="commnentFather">
                        <div class="contentP2">
                            <p><span>Technology</span> / January 01, 2045</p>
                            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et beatae veritatis repellat
                                adipisci, ullam a non est aperiam rerum, deserunt eligendi, numquam explicabo delectus
                                magnam dolore sapiente. Illum, blanditiis modi.</h4>
                            <button>Reply</button>
                        </div>
                        <div class="commnentSon">
                            <div class="smallgroupCommemt">
                                <img :src="image.image6" alt="">
                                <div class="commnentFather">
                                    <div class="contentP2">
                                        <p><span>Technology</span> / January 01, 2045</p>
                                        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et beatae
                                            veritatis
                                            repellat adipisci, ullam a non est aperiam rerum, deserunt eligendi, numquam
                                            explicabo delectus magnam dolore sapiente. Illum, blanditiis modi.</h4>
                                        <button>Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <h2 class="title">Leave a comment</h2>
                <form>
                    <div class="form-group">
                        <label for="name" class="label">Name *</label>
                        <input type="text" id="name" class="input" required>
                    </div>
                    <div class="form-group">
                        <label for="email" class="label">Email *</label>
                        <input type="email" id="email" class="input" required>
                    </div>
                    <div class="form-group">
                        <label for="website" class="label">Website</label>
                        <input type="url" id="website" class="input">
                    </div>
                    <div class="form-group">
                        <label for="message" class="label">Message *</label>
                        <textarea id="message" rows="4" class="textarea" required></textarea>
                    </div>
                    <button type="submit" class="button">Leave a comment</button>
                </form>
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
                <div class="cardSmall1">
                    <div v-for="(article, index) in articles" :key="index" class="smallgroup">
                        <img :src="article.image" alt="">
                        <div class="contentP2">
                            <p><span>{{ article.category }}</span> / {{ article.date }}</p>
                            <h5>{{ article.title }}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hedearPopular">
                <p>Tags</p>
            </div>
            <div class="button-container">
                <button class="grid-button">Button 1</button>
                <button class="grid-button">Button 2</button>
                <button class="grid-button">Button 3</button>
                <button class="grid-button">Button 4</button>
                <button class="grid-button">Button 5</button>
                <button class="grid-button">Button 6ada</button>
                <button class="grid-button">Button 7</button>
                <button class="grid-button">Button8</button>
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
    margin: 10px 10%;
}

.addressCategoties {
    margin: 10px 10%;
    color: #8b8b8b;

    span {
        color: #ff0000;
    }
}

a {
    text-decoration: none;
    color: #8b8b8b;
}

.title {
    font-weight: bolder;
    margin: 10px 0;
    color: #656565;
}

.group3 {
    grid-column: 1 / span 2;
    grid-row: 1;
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
}

.hinh_anh {
    width: 50%;
    height: auto;
    float: left;
    margin: 0 20px 20px 0;
}

.hinh_anh2 {
    width: 50%;
    height: auto;
    float: right;
    margin: 0 0 20px 20px;
}

.contentP-and-img img {
    width: 150px;
}


.right1 {
    grid-column: 3;
    grid-row: 1 / span 4;
}

.cardFeatured1 {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    position: relative;
    margin-bottom: 10px;
    padding: 20px;
}

.cardFeatured1 img {
    width: 100%;
    height: 50%;
}

h4 {
    color: rgb(103, 103, 103);
    font-weight: normal;
}

.cardSmall2 {
    background-color: white;
    padding: 20px;
}

.smallgroup {
    display: flex;
    margin-bottom: 10px;
    background-color: #fff;
}

.smallgroup img {
    width: 90px;
}

.smallgroupCommemt {
    display: flex;
    margin-bottom: 10px;
    background-color: #fff;
    margin-top: 10px;
}

.smallgroupCommemt img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    margin-top: 5px;
}

.commnentFather {
    margin: 0 10px;
}

button {
    background-color: #fff;
    padding: 5px 10px;
    border: 1px solid #ccc;
    color: #656565;
}

button:hover {
    background-color: #d4d4d4;
    transition: background-color .3s;
}

.socicalCount {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 10px;
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

.button-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
}

.grid-button {
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

.container {
    margin: 10px 0;
    padding: 24px;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button {
    background-color: #ef4444;
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 0.875rem;
}

.button:hover {
    background-color: #dc2626;
}

.form-group {
    margin-bottom: 16px;
}

.label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #4b5563;
    margin-bottom: 8px;
}

.input,
.textarea {
    width: 100%;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    padding: 8px;
    box-sizing: border-box;
}

.input:focus,
.textarea:focus {
    border-color: #3b82f6;
    outline: none;
    box-shadow: 0 0 0 1px #3b82f6;
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
