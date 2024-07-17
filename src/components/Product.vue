<template>
    <div>
      <div>
        <img :src="imageProduct" alt="imageProduct" />
      </div>
      <!-- Thêm hình ảnh -->
      <div>
        <ul>
          <li v-for="product in products" :key="product.id">
            <img :src="product.image" :alt="product.name" />
            <!-- <img :src="require(`@/assets/image/${product.image}`).default" :alt="product.name" /> -->
            <h2>{{ product.name }}</h2>
            <p>{{ product.price }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";

  import urlImage1 from "@/assets/image/product(5).jpg";

const imageProduct = ref(urlImage1)
  
  const products = ref([
    {
      id: 1,
      name: "Product 1",
      price: "$10.00",
      image: urlImage1,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$20.00",
      image: "@/assets/image/product(2).jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$30.00",
      image: "@/assets/image/product(3).jpg",
    },
  ]);
  
  // Hàm để lấy đường dẫn hình ảnh
  const getImageUrl = (imageName) => {
    return `@/assets/image/${imageName}`;
  };
  </script>
  
  <style>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 20px 0;
  }
  
  img {
    width: 100px;
    height: auto;
  }
  
  h2 {
    font-size: 20px;
    margin: 5px 0;
  }
  
  p {
    font-size: 16px;
    color: #333;
  }
  </style>
  