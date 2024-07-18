<script setup>
import image1 from '@/assets/image/slide1.jpg';
</script>

<template>
  <div class="testimonial-section">
    <h2>What Says Our Students</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
    <div class="testimonial-card">
      <img :src="image1" alt="Student Image" class="student-image">
      <div class="testimonial-content">
        <h3>Michal Mona</h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a long established fact that a reader will be distracted by the readable content.</p>
        <div class="quote-icon">❝</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonial-section {
  text-align: center;
  padding: 40px;
}

.testimonial-section h2 {
  font-size: 2.5em;
  font-weight: bold;
  color: #000;
}

.testimonial-section p {
  color: #666;
  margin-bottom: 30px;
}

.testimonial-card {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #fff;
  box-shadow: 4px 8px 8px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
}

.student-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 20px;
  display: flex;
  margin-left: -75px;
  margin-top: 35px;
  margin-bottom: -35px;
  transform: translateY(-50%);
  box-shadow: 8px rgba(0, 0, 0, 0.1);
}

.testimonial-content {
  padding-left: 90px; /* Adjust this value to control the padding */
  position: relative;
}

.testimonial-content h3 {
  font-size: 1.5em;
  color: #DBA64C;
  margin-bottom: 10px;
}

.testimonial-content p {
  color: #666;
  font-size: 1em;
}

.quote-icon {
  margin-bottom: -90px;
  margin-right: -20px;
  transform: translateY(20px);
  color: #DBA64C;
  font-size: 7rem;
}
</style>
