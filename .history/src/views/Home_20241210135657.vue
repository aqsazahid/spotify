<template>
  <div class="home">
    <Header />
    <Sidebar />
    <div class="home__content">
      <h2>Welcome to Spotify!</h2>
      <!-- Playlist content can go here -->
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'Home',
  components: { AppHeader, Sidebar },
};
</script>

<style scoped>
.home {
  display: flex;

  &__content {
    margin-left: 200px;
    padding: 1rem;
  }
}
</style>
