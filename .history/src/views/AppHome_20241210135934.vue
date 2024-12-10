<template>
  <div class="home">
    <AppHeader />
    <AppSidebar />
    <div class="home__content">
      <h2>Welcome to Spotify!</h2>
      <!-- Playlist content can go here -->
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppSidebar from '@/components/AppSidebar.vue';

export default {
  name: 'AppHome',
  components: { AppHeader, AppSidebar },
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
