<template>
  <div>
    <Header @filter="handleFilter" />
    <div class="pc__components--wrapper">
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
.pc__components--wrapper {
  margin-top: 20px;
  font-size: 28px;
}
</style>
