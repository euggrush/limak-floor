<template>
  <!-- ======= Our Clients Section ======= -->
  <section id="clients" class="clients">
    <div class="container">
      <div class="section-title">
        <h2>Our Clients</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div class="clients-slider swiper">
        <div class="swiper-wrapper align-items-center">
          <div class="swiper-slide">
            <img
              src="../../assets/img/clients/client-1.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="../../assets/img/clients/client-2.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="../../assets/img/clients/client-3.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="../../assets/img/clients/client-4.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="../../assets/img/clients/client-5.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="../../assets/img/clients/client-6.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="../../assets/img/clients/client-7.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="../../assets/img/clients/client-8.png"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
  <!-- End Our Clients Section -->
</template>

<script>
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  mounted() {
    this.getClientsSlider();
  },
  methods: {
    getClientsSlider() {
      new Swiper(".clients-slider", {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 120,
          },
        },
        modules: [Navigation, Pagination],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>