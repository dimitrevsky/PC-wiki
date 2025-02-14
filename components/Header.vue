<template>
  <header>
    <div class="header">
      <ul class="nav">
        <li class="nav__item" @click="filterByType('all')">ГЛАВНАЯ</li>
        <li class="nav__item" @click="filterByType('Case')">КОРПУСА</li>
        <li class="nav__item" @click="filterByType('Processor')">ПРОЦЕССОРЫ</li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(["filter"]);

function filterByType(type) {
  emit("filter", type);
}
</script>

<style scoped>
.header {
  border-bottom: 1px solid #000;
}

.nav {
  display: flex;
  list-style: none;
  font-size: 24px;
  justify-content: space-between;
}

.nav__item {
  cursor: pointer;
  color: #afafaf;
  transition: color 0.3s linear;
}

.nav__item:hover {
  color: #000;
}
</style>
