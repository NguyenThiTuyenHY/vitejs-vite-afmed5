<script setup>
import { useRoute } from 'vue-router';
import { ref, computed, watch } from 'vue';

const route = ref(useRoute());
</script>

<template>
  <component :is="route.meta.layout || 'div'">
    <router-view />
    asdasda
  </component>
</template>
