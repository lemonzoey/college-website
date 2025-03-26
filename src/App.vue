<script setup>
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navigation from './components/Navigation.vue'

const route = useRoute()
const showNav = computed(() => {
  return route.path !== '/login' && localStorage.getItem('isLoggedIn') === 'true'
})
</script>

<template>
  <Navigation v-if="showNav" />
  <main :class="{ 'with-nav': showNav }">
    <RouterView />
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

main {
  min-height: 100vh;
}

.with-nav {
  padding-top: 70px;
}

:root {
  --primary-color: #4CAF50;
  --primary-hover: #45a049;
  --text-color: #333;
  --text-light: #666;
  --background: #f5f5f5;
  --border: #eee;
}

button {
  cursor: pointer;
}

.section {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
</style>
