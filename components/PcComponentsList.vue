<template>
  <div>
    <Header @filter="handleFilter" />
    <div class="pc__components__wrapper">
      <div class="pc__components--list">
        <PсСard :computerData="filteredData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import PсСard from "./PсСards/PсСard.vue";
import { data } from "~/utils/dataList";
import { ref, computed } from "vue";

const dataList = data;
const filterType = ref("all");

const filteredData = computed(() => {
  if (filterType.value === "all") {
    return dataList;
  }
  return dataList.filter((item) => item.type === filterType.value);
});

const handleFilter = (type) => {
  filterType.value = type;
};
</script>

<style scoped>
.pc__components__wrapper {
  margin-top: 20px;
  font-size: 28px;
}

.pc__components--list {
  display: grid;
  grid: auto-flow / repeat(auto-fill, minmax(280px, 1fr));
  justify-items: center;
  gap: 70px 20px;
  margin-top: 20px;
  background: #dbd4d4;
  padding: 50px 0;
}
</style>
