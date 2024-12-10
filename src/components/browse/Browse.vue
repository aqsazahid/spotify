<template>
  <section class="browse">
    <h1>Browse Music</h1>
    <ul>
      <li v-for="genre in genres" :key="genre.id">
        {{ genre.name }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Browse',
  data() {
    return {
      genres: [
        { id: 1, name: 'Rock' },
        { id: 2, name: 'Pop' },
        { id: 3, name: 'Hip-Hop' }
      ]
    }
  }
}
</script>