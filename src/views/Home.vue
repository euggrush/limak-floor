<template>
  <div class="home">
    <About />
    <Services/>
  </div>
</template>

<script>
import About from "../components/Partials/About.vue";
import Services from "../components/Partials/Services.vue"

export default {
  name: "Home",
  components: {
    About,
    Services
  },
};
</script>
