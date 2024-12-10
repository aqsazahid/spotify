<template>
  <nav class="navbar">
    <div class="navbar__left">
      <img class="navbar__logo" src="@/assets/spotify-logo.svg" alt="Spotify" />
      <input class="navbar__search" type="text" placeholder="Search" />
    </div>
    <div class="navbar__right">
      <img class="navbar__profile" src="@/assets/user-avatar.png" alt="User Profile" />
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
