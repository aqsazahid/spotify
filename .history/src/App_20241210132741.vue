<template>
  <div id="app">
    <Header />
    <Hero />
    <Browse />
    <Footer />
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Hero from './components/hero/Hero.vue'
import Browse from './components/browse/Browse.vue'
import Footer from './components/footer/Footer.vue'

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