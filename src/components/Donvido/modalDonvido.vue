<template>
  <div v-if="show" class="modal">
    <div :class="['modal-content', { modalAnimation: show }]">
      <span class="close" @click="cancelChanges">&times;</span>
      <div class="img-modal">
        <img :src="imageLogoModal" alt="imageLogoModal" />
      </div>
      <div class="modal-header">
        <h2>Cập Nhật Đơn Vị Đo</h2>
      </div>
      <div class="modal-body">
        <form @submit.prevent="saveDetails">
          <div class="form-body">
            <div class="form-group-cha">
              <div class="form-group">
                <label for="id">Mã<a style="color: red;">*</a></label>
                <input id="id" type="text" class="inputModel" :value="details.id" disabled />
              </div>
              <div class="form-group">
                <label for="name" >Tên<a style="color: red;">*</a></label>
                <input id="name" type="text" class="inputModel" maxlength="50" v-model="editedDetails.name" />
              </div>
            </div>
            <div class="form-group">
              <label for="describe">Mô tả</label>
              <textarea id="describe" maxlength="255" v-model="editedDetails.describe"></textarea>
            </div>
          </div>
          <div class="form-actions">
            <button type="button" class="cancelModel"@click="cancelChanges">Hủy</button>
            <button type="submit">Lưu</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';
import imgLogoModal from '@/assets/image/logoModal.png';
const imageLogoModal = ref(imgLogoModal);

const props = defineProps({
  details: Object,
  show: Boolean,
});

const emit = defineEmits(['close', 'save']);

const editedDetails = ref({});

// Xem xét sự thay đổi 
watch(() => props.details, (newValue) => {
  editedDetails.value = { ...newValue }; 
}, { immediate: true }); 
function saveDetails() {
  

  props.details.name = editedDetails.value.name;
  props.details.describe = editedDetails.value.describe;

  emit('save', props.details); 
  emit('close');
}


function cancelChanges() {
  editedDetails.value = { ...props.details };
  emit('close');
}
</script>



<style>
.img-modal {
  display: flex;
  justify-content: center;
  margin-top: -50px;
}
.form-group-cha {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-body {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}
input {
  margin-left: 0px;
}
.modal {
  display: flex;
  position: absolute;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #EAECF9;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  width: 50%;
}
.modalAnimation {
  animation: translateUp .3s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
@keyframes translateUp {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.modal-header {
  text-align: center;
}
.modal-body {
  padding: 10px 0;
}
.form-group {
  margin-bottom: 15px;
  align-items: center;
  margin-bottom: 10px;
}
.form-group label {
  width: 80px;
  text-align: right;
  margin-right: 10px;
}
.form-group .inputModel,
.form-group textarea {
  width: calc(100% - 22px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-actions {
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-actions button {
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}
.form-actions button[type="button"] {
  background-color: #f3f3f3;
  border: 1px solid rgb(0, 65, 130);
}
.form-actions button[type="submit"] {
  background-color: #036;
  color: white;
}

</style>
