<script setup lang="ts">
import NavBarPage from '@/views/NavBar.vue'
import BodyPage from '@/views/Body.vue'
</script>

<template>
  <div>
    <div id="background">
    </div>
    <NavBarPage />
    <BodyPage />
  </div>
</template>

<style scoped lang="scss">
#background {
  background-image: url(@/assets/img/background.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.7);
  width: 100vw;
  height: 100vh;
  position: fixed;
}
</style>
