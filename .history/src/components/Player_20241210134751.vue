<template>
  <div class="player">
    <div class="player__controls">
      <button class="player__button">⏮</button>
      <button class="player__button">▶</button>
      <button class="player__button">⏭</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
};
</script>

<style scoped lang="scss">
.player {
  background-color: #282828;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &__controls {
    display: flex;
    gap: 1rem;
  }

  &__button {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1db954;
    }
  }
}
</style>
