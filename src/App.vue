<template>
  <Navigation />
  <router-view />
  <Footer />
  <BackToTop />
</template>

<script>
import Navigation from "./components/Partials/Navigation.vue";
import Footer from "./components/Partials/Footer.vue";
import BackToTop from "./components/Partials/BackToTop.vue";

export default {
  components: {
    Navigation,
    Footer,
    BackToTop,
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}

body {
  font-family: "Open Sans", sans-serif;
  color: #444444;
}

a {
  text-decoration: none;
  color: $logoGreen;
}

a:hover {
  color: #80c792;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
}

.section-bg {
  background-color: #f8fcf9;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}

.section-title h2::before {
  content: "";
  position: absolute;
  display: block;
  width: 120px;
  height: 1px;
  background: #ddd;
  bottom: 1px;
  left: calc(50% - 60px);
}

.section-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 40px;
  height: 3px;
  background: $logoGreen;
  bottom: 0;
  left: calc(50% - 20px);
}

.section-title p {
  margin-bottom: 0;
  font-size: 14px;
  color: #919191;
}

/*--------------------------------------------------------------
# Why Us
--------------------------------------------------------------*/
.why-us {
  padding: 0;
}

.why-us .row {
  overflow: hidden;
}

.why-us .content-item {
  padding: 40px;
  border-left: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin: -1px;
}

.why-us .content-item span {
  display: block;
  font-size: 24px;
  font-weight: 400;
  color: #6ec083;
}

.why-us .content-item h4 {
  font-size: 26px;
  font-weight: 300;
  padding: 0;
  margin: 20px 0;
}

.why-us .content-item p {
  color: #aaaaaa;
  font-size: 15px;
  margin: 0;
  padding: 0;
}

@media (max-width: 768px) {
  .why-us .content-item {
    padding: 40px 0;
  }
}

/*--------------------------------------------------------------
# Our Clients
--------------------------------------------------------------*/
.clients .swiper-slide img {
  opacity: 0.5;
  transition: 0.3s;
}

.clients .swiper-slide img:hover {
  opacity: 1;
}

.clients .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.clients .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #5cb874;
}

.clients .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #5cb874;
}

/*--------------------------------------------------------------
# Team
--------------------------------------------------------------*/
.team .member {
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0px 0px 12px 0px rgba(34, 34, 34, 0.07);
  padding: 30px 20px;
  background: #fff;
}

.team .member img {
  max-width: 60%;
  border-radius: 50%;
  margin: 0 0 30px 0;
}

.team .member h4 {
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 18px;
}

.team .member span {
  font-style: italic;
  display: block;
  font-size: 13px;
}

.team .member p {
  padding-top: 10px;
  font-size: 14px;
  font-style: italic;
  color: #aaaaaa;
}

.team .member .social {
  margin-top: 15px;
}

.team .member .social a {
  color: #919191;
  transition: 0.3s;
}

.team .member .social a:hover {
  color: #5cb874;
}

.team .member .social i {
  font-size: 18px;
  margin: 0 2px;
}

/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
.breadcrumbs {
  padding: 15px 0;
  background: #fbfbfb;
  min-height: 40px;
}

@media (max-width: 992px) {
  .breadcrumbs {
    margin-top: 66px;
  }
}

.breadcrumbs h2 {
  font-size: 28px;
  font-weight: 300;
}

.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
}

.breadcrumbs ol li + li {
  padding-left: 10px;
}

.breadcrumbs ol li + li::before {
  display: inline-block;
  padding-right: 10px;
  color: #3c3c3c;
  content: "/";
}

@media (max-width: 768px) {
  .breadcrumbs .d-flex {
    display: block !important;
  }

  .breadcrumbs ol {
    display: block;
  }

  .breadcrumbs ol li {
    display: inline-block;
  }
}
</style>
