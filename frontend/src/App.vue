<template>
  <div class="container-fluid p-4 position-absolute top-50" style="z-index: 10">
    <router-view />
  </div>
  <a-background />
</template>

<script>
import aBackground from "@/components/aniBackground.vue";

export default {
  components: {
    aBackground,
  },
};
</script>
