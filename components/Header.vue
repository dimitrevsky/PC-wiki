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
@custom-media --medium-viewport (max-width: 521px);
@custom-media --small-viewport (max-width: 359px);

.header {
  border-bottom: 1px solid #000;
}

.nav {
  display: flex;
  list-style: none;
  font-size: var(--fz-nav-title);
  justify-content: space-between;

  /* медиа запросы решил показать в двух вариантах */

  /* 1-ый вариант реализации */
  /* @media (width <= 521px) {
    font-size: 18px;
  }

  @media (width <= 359px) {
    font-size: 14px;
  } */


  /* 2-ой вариант раелизации */
  @media (--medium-viewport) {
    font-size: 18px;
  }

  @media (--small-viewport) {
    font-size: 14px;
  }
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
