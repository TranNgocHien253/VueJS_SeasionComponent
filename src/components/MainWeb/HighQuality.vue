<script setup>
import image1 from '@/assets/image/slide1.jpg';
import image2 from '@/assets/image/slide2.jpg';
</script>

<template>
    <div class="hero-section">
        <div class="hero-content">
            <h1>High Quality</h1>
            <h2>Let's Start Your Education!</h2>
            <p>It is a long established fact that a reader will be distracted by the readable</p>
            <button class="appointment-btn">Make Appointment</button>
        </div>
        <div class="hero-images">
            <img :src="image1" alt="Image 1" class="img1">
            <img :src="image2" alt="Image 2" class="img2">
        </div>
    </div>
</template>

<style scoped>
.hero-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    background-color: #ffffff;
}

.hero-content {
    max-width: 50%;
    flex: 1 1 300px;
    padding: 20px;
    align-items: start;
    font-size: 2rem;
}

.hero-content h1 {
    color: #d4af37;
    font-weight: bold;
    margin-bottom: 10px;
}

.hero-content h2 {
    color: #000;
    font-weight: bold;
    margin-bottom: 10px;
}

.hero-content p {
    font-size: 1rem;
    color: #000;
    margin-bottom: 20px;
}

.appointment-btn {
    background-color: transparent;
    border: 2px solid #d4af37;
    padding: 10px 20px;
    color: #d4af37;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.appointment-btn:hover {
    background-color: #d4af37;
    color: #fff;
}

.hero-images {
    max-width: 50%;
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
}

.img1 {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 10px;
}

.img2 {
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-bottom: 60px;
    border-radius: 10px;
    transform: translateX(-50%);
}

@media (max-width: 1024px) {
    .hero-section {
        display: block;
        transition: display .3s;
    }

    .hero-content {
        max-width: 100%;
        font-size: 1rem;
        transition: font-size .3s;
    }

    .hero-images {
        max-width: 100%;
        transition: max-width .3s;
    }

    .img2 {
        border-radius: 10px;
        transform: translateX(0);
    }
}
</style>
