<template>
    <div class="hero-section">
        <div class="hero-content">
            <h1>High Quality</h1>
            <h2>Let's Start Your Education!</h2>
            <p>It is a long established fact that a reader will be distracted by the readable</p>
            <button class="appointment-btn">Make Appointment</button>
        </div>
        <div class="hero-images">
            <div class="img1">
                <div class="anh1"></div>
            </div>
            <div class="img2">
                <div class="anh2"></div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.hero-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f8f9fa;
}

.hero-content {
    max-width: 50%;
    flex: 1 1 300px;
    padding: 20px;
}

.hero-content h1 {
    font-size: 2.5rem;
    color: #d4af37;
    /* Màu vàng nhạt */
    font-weight: bold;
    margin-bottom: 10px;
}

.hero-content h2 {
    font-size: 2rem;
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
    border-radius: 10px;
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
    align-items: flex-end;
    gap: 20px;
}

.anh1 {
    width: 400px;
    height: 250px;
    background-color: aquamarine;
}

.anh2 {
    width: 400px;
    height: 250px;
    background-color: aquamarine;
}

.hero-images .img1 {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.img1 {
    max-width: 90%;
}

.img2 {
    max-width: 70%;
}

@media (max-width: 768px) {
    .hero-section {
        flex-direction: column;
        align-items: center;
    }

    .hero-content,
    .hero-images {
        max-width: 100%;
    }

    .hero-images {
        align-items: center;
    }

    .img1, .img2 {
        width: 100%;
    }

    
}
</style>