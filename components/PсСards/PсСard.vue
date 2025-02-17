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

<script lang="ts" setup>
interface PCspecs {
  id: number;
  img: string;
  title: string;
}

const props = defineProps<{
  computerData: PCspecs[];
}>();
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

  .img {
    width: 100%;
    height: 300px;
  }
}

.options {
  position: absolute;
  display: flex;
  gap: 10px;
  top: 5px;
  right: 5px;
  z-index: 100;
}

.pc__title__wrapper {
  background-color: #fff;
  margin-top: 10px;

  .pc__title {
    font-weight: 400;
    text-align: center;
    font-size: var(--fz-card-title);
    padding: 16px 16px;
    text-wrap: nowrap;
  }
}
</style>
