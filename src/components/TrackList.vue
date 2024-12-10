<template>
  <div class="track-list">
    <ul>
      <li v-for="track in tracks" :key="track.id" class="track-list__item">
        <span>{{ track.name }}</span>
        <span>{{ track.artist }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TrackList',
  props: {
    tracks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.track-list {
  color: white;
  padding: 1rem;

  &__item {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #333;

    &:hover {
      background-color: #1db954;
    }
  }
}
</style>
