<template>
  <div class="about">
    <div class="profile-container">
        <header class="profile-header">
            <img :src="imageAvt" alt="Profile Picture" class="profile-pic">
            <h1 class="name">John Doe</h1>
            <p class="title">Web Developer</p>
        </header>
        <section class="profile-info">
            <h2>About Me</h2>
            <p>Hello! I’m John Doe, a passionate web developer with experience in creating dynamic and user-friendly websites. I love coding and learning new technologies.</p>
            
            <h2>Contact Information</h2>
            <ul class="contact-info">
                <li>Email: john.doe@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Website: www.johndoe.com</li>
            </ul>
        </section>
        <footer class="profile-footer">
            <p>© 2024 John Doe</p>
        </footer>
    </div>
  </div>
</template>
<script setup>
import imageAvt from '@/assets/image/icon/icons8-upset-32.png'
</script>
<style>

.profile-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-header {
    text-align: center;
    margin-bottom: 20px;
}

.profile-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #ddd;
}

.name {
    font-size: 2rem;
    margin: 10px 0 5px;
}

.title {
    font-size: 1.2rem;
    color: #777;
}

.profile-info {
    margin-bottom: 20px;
}

.profile-info h2 {
    border-bottom: 2px solid #d4af37;
    padding-bottom: 10px;
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.profile-info p {
    line-height: 1.6;
    font-size: 1rem;
    color: #333;
}

.contact-info {
    list-style: none;
    padding: 0;
}

.contact-info li {
    margin-bottom: 10px;
    font-size: 1rem;
    color: #555;
}

.profile-footer {
    text-align: center;
    padding: 10px;
    font-size: 0.9rem;
    color: #777;
    border-top: 1px solid #ddd;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
