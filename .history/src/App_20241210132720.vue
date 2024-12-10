<template>
  <div id="app">
    <Header />
    <Hero />
    <Browse />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Browse from './components/Browse.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Browse,
    Footer
  }
}
</script>