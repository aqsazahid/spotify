<template>
  <aside class="sidebar">
    <ul class="sidebar__menu">
      <li><a href="/" class="sidebar__link">Home</a></li>
      <li><a href="/search" class="sidebar__link">Search</a></li>
      <li><a href="/library" class="sidebar__link">Your Library</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style lang="scss">
.sidebar {
  background-color: #000;
  color: #fff;
  width: 200px;
  height: 100vh;
  padding: 1rem;

  &__menu {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 1rem;

      .sidebar__link {
        color: #fff;
        text-decoration: none;

        &:hover {
          color: #1db954;
        }
      }
    }
  }
}
</style>
