<template>
  <div class="grid-main">
    <header id="pageHeader">
      <Header />
    </header>
    <article id="mainArticle">
      <slot />
    </article>
    <nav id="mainNav">
      <ads-bar />
    </nav>
    <section id="siteAds">
      <side-bar />
    </section>
    <footer id="pageFooter">
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import Header from '../components/client/Header.vue';
import Footer from '../components/client/Footer.vue';
import AdsBar from '../components/client/AdsBar.vue';
import SideBar from '../components/client/SideBar.vue';
</script>
