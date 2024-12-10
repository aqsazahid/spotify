<template>
  <div class="playlist-card">
    <img :src="playlist.image" alt="Playlist cover" class="playlist-card__image" />
    <h3 class="playlist-card__title">{{ playlist.name }}</h3>
  </div>
</template>

<script>
export default {
  name: 'PlaylistCard',
  props: {
    playlist: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.playlist-card {
  background-color: #282828;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  &__image {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }

  &__title {
    font-size: 1rem;
    font-weight: bold;
  }

  &:hover {
    background-color: #1db954;
  }
}
</style>
