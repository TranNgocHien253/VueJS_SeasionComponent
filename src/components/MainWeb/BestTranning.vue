<template>
    <div class="hero-section">
        <div class="hero-content">
            <h2>About</h2>
            <div class="hero-contentchild">
                <img class="hero-image" :src="image1" alt="Description of the image">
                <div class="circleWave">
                    <button class="button">
                        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px">
                            <path
                                d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                                fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
            </div>
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
.hero-contentchild {
    position: relative; 
}

.hero-contentchild .circleWave {
    position: absolute;
    width: 70px;
    height: 70px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #ffd900c7;
    transition: all 0.3s ease-in-out;
    box-shadow: rgba(239, 246, 193, 0.698) 0px 0px 0px 0px;
    animation: pulse 1.2s cubic-bezier(0.8, 0, 0, 1) infinite;
    border: none;
}

.button:hover,
.button:focus {
    transform: scale(1.2);
}

@keyframes pulse {
  100% {
    box-shadow: 0 0 0 45px rgba(193,244,246,0);
  }
}
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
