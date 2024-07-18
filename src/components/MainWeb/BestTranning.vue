<template>
    <div class="hero-section">
        <div class="hero-content">
            <h2>About</h2>
            <img class="hero-image" :src="image1" alt="Description of the image">
        </div>
        <div class="hero-images">
            <h2>Best Training Language School</h2><br>
            <p>It is a long established fact that a reader will be distracted by the readable content of a pageIt is a
                long established fact that a reader will be distracted by the readable content of a page</p>
            <button class="appointment-btn">Read More</button>
        </div>
    </div>
</template>

<script setup>
import image1 from '@/assets/image/slide1.jpg';
</script>

<style scoped>
.hero-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
}

.hero-content,
.hero-images {
    flex: 1 1 100%;
    /* Tự động chuyển sang 100% khi màn hình nhỏ hơn 768px */
    max-width: 50%;
    padding: 20px;
}

.hero-content h2,
.hero-images h2 {
    font-size: 2rem;
    color: #000;
    font-weight: bold;
    margin-bottom: 10px;
}

.hero-content img.hero-image {
    width: 100%;
    height: auto;
}

.hero-images p {
    font-size: 1rem;
    color: #000;
    margin-bottom: 20px;
}

.appointment-btn {
    background-color: transparent;
    border: 2px solid #d4af37;
    padding: 20px 50px;
    font-size: 1rem;
    color: #d4af37;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.appointment-btn:hover {
    background-color: #d4af37;
    color: #fff;
}

@media (max-width: 768px) {
    .hero-section {
        flex-direction: column;
        align-items: start;
    }

    .hero-content,
    .hero-images {
        max-width: 100%;
    }
}
</style>
