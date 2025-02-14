<template>
  <div class="pc__card" v-for="data in computerData" :key="data.id">
    <div class="pc__img">
      <div class="options">
        <img src="~/public/options/ShowIcon.png" alt="option" class="option__img" />
        <img src="~/public/options/StatisticsIcon.png" alt="option" class="option__img" />
        <img src="~/public/options/LikeIcon.png" alt="option" class="option__img" />
      </div>
      <img class="img" :src="data.img" :alt="data.title" />
    </div>
    <div class="pc__title__wrapper">
      <h2 class="pc__title">{{ data.title }}</h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  computerData: {
    type: Array,
    required: true,
  },
});

console.log(props.computerData);
</script>

<style scoped>
.pc__card {
  width: 280px;
  border-radius: 32px;
}

.pc__img {
  position: relative;
  background-color: #fff;
  padding: 20px;
}

.options {
  position: absolute;
  display: flex;
  gap: 10px;
  top: 5px;
  right: 5px;
  z-index: 100;
}

.option__img {
  width: 25px;
  height: 25px;
  cursor: pointer;
  filter: contrast(0);
  transition: filter 0.1s linear;
}

.option__img:nth-child(1) {
  width: 30px;
}

.option__img:hover {
  filter: contrast(100%);
}

.img {
  width: 100%;
  height: 300px;
}

.pc__title__wrapper {
  background-color: #fff;
  margin-top: 10px;
}

.pc__title {
  font-weight: 400;
  text-align: center;
  font-size: 40px;
  padding: 16px 0;
}
</style>
