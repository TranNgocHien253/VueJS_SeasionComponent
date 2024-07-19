<script setup>
import image1 from '@/assets/image/slide1.jpg';
import image2 from '@/assets/image/slide2.jpg';

const events = [
  {
    id: 1,
    image: image1,
    description: "It is a long established fact that a reader will be distracted by the readable content of a",
    type: "Live event",
    date: "04 Nov 2023"
  },
  {
    id: 2,
    image: image2,
    description: "It is a long established fact that a reader will be distracted by the readable content of a",
    type: "Live event",
    date: "04 Nov 2023"
  }
];
</script>

<template>
  <div class="background-events">
    <div class="events-section">
      <h2>Events</h2>
      <p>It is a long established fact that a reader will be distracted by the readable content.</p>
      <div class="events-list">
        <div v-for="event in events" :key="event.id" class="event-item">
          <div class="event-content">
            <img :src="event.image" alt="Event Image">
            <p class="event-description">{{ event.description }}</p>
          </div>
          <div class="event-meta">
            <span class="event-type">{{ event.type }}</span>
            <span class="event-date">{{ event.date }}</span>
          </div>
        </div>
      </div>
      <button class="read-more-btn">Read More</button>
    </div>
  </div>
</template>

<style scoped>
.background-events {
    background-color: #2B004F;
    padding: 0 20%;
}

.events-section {
    text-align: center;
    padding: 40px;
}

.events-section h2 {
    font-size: 2.5em;
    font-weight: bold;
    color: #DBC64C;
    text-align: start;
}

p {
    color: #ddd;
    margin-bottom: 30px;
    text-align: start;

}

.events-list {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 60px;
}

.event-item {
    background-color: #fff;
    color: #000;
    overflow: visible;
    width: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
}

.event-content {
    position: relative;
    display: flex;
    justify-content: center;
}

.event-content img {
    width: 90%;
    height: auto;
    object-fit: cover;
    transform: translateY(-30px);
}

.event-description {
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 10px;
    position: absolute;
    bottom: 0;
    width: 70%;
    box-sizing: border-box;
    font-size: 13px;
}
@media (max-width: 1024px) {
    .event-description {
    font-size: 8px;
}
}
.event-meta {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    padding: 10px 15px;
}

.event-meta .event-date {
    color: #DBC64C;
}

.read-more-btn {
    background-color: transparent;
    border: 2px solid #DBC64C;
    color: #DBC64C;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    margin-top: 20px;
}

@media (max-width: 768px) {
    .background-events {
    padding: 0;
}
    .events-list {
    display: block;
} 
.event-item {
    width: 100%;
    margin-bottom: 50px;
}
.event-description {
    
    font-size: 15px;
}
}
</style>
