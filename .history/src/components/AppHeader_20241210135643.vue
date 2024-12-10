<template>
  <header class="header">
    <nav class="header__nav">
      <h1 class="header__logo">Spotify</h1>
      <ul class="header__menu">
        <li><a href="/" class="header__link">Home</a></li>
        <li><a href="/search" class="header__link">Search</a></li>
        <li><a href="/library" class="header__link">Library</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="scss">
.header {
  background-color: #191414;
  padding: 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__nav {
    display: flex;
    align-items: center;
  }

  &__logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &__menu {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    li {
      margin-left: 1rem;

      .header__link {
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
<template>
  <header class="header">
    <nav class="header__nav">
      <h1 class="header__logo">Spotify</h1>
      <ul class="header__menu">
        <li><a href="/" class="header__link">Home</a></li>
        <li><a href="/search" class="header__link">Search</a></li>
        <li><a href="/library" class="header__link">Library</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="scss">
.header {
  background-color: #191414;
  padding: 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__nav {
    display: flex;
    align-items: center;
  }

  &__logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &__menu {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    li {
      margin-left: 1rem;

      .header__link {
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
