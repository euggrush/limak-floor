<template>
  <div class="home">
    <WelcomeSlider />
    <Services />
    <About />
    <!-- <WhyUs /> -->
    <!-- <OurClients /> -->
    <Services2 />
    <CallToAction />
    <Portfolio />
    <Team />
    <Contact />
  </div>
</template>

<script>
import About from "../components/Partials/About.vue";
import Services from "../components/Partials/Services.vue";
import WelcomeSlider from "../components/Partials/WelcomeSlider.vue";
// import WhyUs from "../components/Partials/WhyUs.vue";
// import OurClients from "../components/Partials/OurClients.vue";
import Services2 from "../components/Partials/Services2.vue";
import CallToAction from "../components/Partials/CallToAction.vue";
import Portfolio from "../components/Partials/Portfolio.vue";
import Team from "../components/Partials/Team.vue";
import Contact from "../components/Partials/Contact.vue";

export default {
  name: "Home",
  components: {
    About,
    Services,
    WelcomeSlider,
    // WhyUs,
    // OurClients,
    Services2,
    CallToAction,
    Portfolio,
    Team,
    Contact,
  },
};
</script>
