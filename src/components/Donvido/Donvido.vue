<template>
    <div class="donViDo">
      <p>ĐƠN VỊ DO</p>
      <div class="Search">
            <div class="form-group">
                <p>Mã</p>
                <input />
            </div>
            <div class="form-group" style="margin-left: 30px;">
                <p>Tên</p>
                <input />
            </div>
            <div class="form-group" style="margin-top: 25px;">
            <button>Đặt lại</button>
            <button style="background-color: rgb(3, 3, 184); color: aliceblue;">Tìm kiếm</button>
            </div>
    </div>
      <div class="container">
        <div class="hienThi">
          <p>HIỂN THỊ:</p>
          <select id="count" v-model="selectedCount">
            <option value="">20</option>
            <option v-for="x in 10" :key="x">{{ x }}</option>
            <p>{{ selectedCount }}</p>
          </select>
  
          <select id="colum" v-model="selectedColum">
            <option value="">7 cột</option>
            <option v-for="x in 10" :key="x">{{ x + '  cột' }}</option>
          </select>
          <button style="border-radius: 10px;">Ẩn Tìm Kiếm</button>
          <div class="hienthiEnd">
            <button style="background-color: rgb(3, 3, 184); color: aliceblue;">Thêm mới</button>
  
            <select id="action" v-model="selectedAction" style="background-color: rgb(3, 3, 184); color: aliceblue;border-radius: 30px;">
              <option value="">Chọn một loại</option>
              <option v-for="action in actions" :key="action.id" :value="action.value">{{ action.label }}</option>
            </select>
          </div>
        </div>
        <div class="list">
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" class="checkboxAll" /></th>
                <th>Mã</th>
                <th>Tên</th>
                <th>Mô tả</th>
                <th>Người tạo</th>
                <th>Ngày tạo</th>
                <th>Người cập nhật</th>
                <th>Ngày cập nhật</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="x in listTable" :key="x.id" @click="openModal(x)">
                <td><input type="checkbox" class="checkbox" :value="x.id"  /></td>
                <td>{{ x.id }}</td>
                <td>{{ x.name }}</td>
                <td>{{ x.describe }}</td>
                <td>{{ x.Creator }}</td>
                <td>{{ x.CreationDate }}</td>
                <td>{{ x.Updater }}</td>
                <td>{{ x.UpdateDate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Model :details="selectedDetails" :show="showModal" @close="closeModal" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Model from './modalDonvido.vue';
  import { selectedCount, selectedColum, selectedAction, actions, listTable } from './donvido.js';
  
  const selectedDetails = ref(null);
  const showModal = ref(false);
  
  function openModal(details) {
    selectedDetails.value = details;
    showModal.value = true;
  }
  
  function closeModal() {
    showModal.value = false;
  }
  </script>
  
  <style>
  .donViDo {
    position: relative;
    background-color: rgb(255, 255, 255);
    color: black;
    margin: 20px 20px auto;
    padding: 20px;
    width: 900px;
    border-radius: 5px;
  }
  .Search {
    background-color: #728EAF;
    margin: 10px;
    padding: 20px;
    display: flex;
    border-radius: 10px;
    color: #ffffff;
  }
  button {
    border-radius: 30px;
    background-color: rgb(255, 255, 255);
    margin-left: 20px;
    padding: 5px 20px 5px 20px;
  }
  input {
    border-radius: 6px;
    padding: 5px;
  }
  .container {
    border-radius: 10px;
    background-color: rgb(233, 243, 252);
    margin: 10px;
    padding: 20px;
    width: 100%;
  }
  select {
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    margin-left: 20px;
    padding: 5px 20px 5px 20px;
  }
  .hienThi {
    display: flex;
    margin-bottom: 20px;
  }
  .hienthiEnd {
    margin-left: auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  thead {
    background-color: #728EAF;
    color: white;
  }
  th,
  td {
    padding: 8px;
    text-align: left;
  }
  tbody tr:nth-child(even) {
    background-color: #ffffff;
  }
  tbody tr:hover {
    background-color: #ddd;
  }
  th input[type="checkbox"] {
    margin: auto;
    display: block;
  }
  .checkbox {
    margin-top: 15px;
    margin-left: 15px;
  }
  .checkboxAll {
    margin-top: 15px;
  }
  </style>
  