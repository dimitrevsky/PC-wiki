<template>
  <header>
    <div class="header">
      <ul class="nav">
        <li class="nav__item" v-for="item in option" :key="item.id" @click="filterByType(item.value)">
          {{ item.HTMLrender }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(["filter"]);

const option = [
  {
    id: 1,
    value: "all",
    HTMLrender: "ГЛАВНАЯ",
  },
  {
    id: 2,
    value: "Case",
    HTMLrender: "КОРПУСА",
  },
  {
    id: 3,
    value: "Processor",
    HTMLrender: "ПРОЦЕССОРЫ",
  },
];

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

@media (max-width: 521px) {
  .nav {
    font-size: 18px;
  }
}

@media (max-width: 359px) {
  .nav {
    font-size: 14px;
  }
}
</style>
