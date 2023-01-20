<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero">
    <div
      id="heroCarousel"
      data-bs-interval="5000"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div class="carousel-inner" role="listbox">
        <!-- Slide 1 -->
        <div class="carousel-item slide-one active">
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">
                Transform Your Space with Limak Flooring
              </h2>
              <p class="animate__animated animate__fadeInUp">
                Upgrade the look and feel of any room in your home or office
                with Limak Floor Service. Our wide selection of flooring
                options, including hardwood, laminate, tile, and more, will give
                you the perfect finish to any space. Let us help you transform
                your space today.
              </p>
              <a
                href="#about"
                class="
                  btn-get-started
                  animate__animated animate__fadeInUp
                  scrollto
                "
                >Read More</a
              >
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item slide-two">
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">
                Expert Installation and Repair Services
              </h2>
              <p class="animate__animated animate__fadeInUp">
                Don't trust just anyone with your flooring needs. Limak Floor
                Service has been providing expert installation and repair
                services for over a decade. Our skilled technicians have the
                experience and knowledge to ensure your flooring is installed or
                repaired to the highest standard.
              </p>
              <a
                href="#about"
                class="
                  btn-get-started
                  animate__animated animate__fadeInUp
                  scrollto
                "
                >Read More</a
              >
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item slide-three">
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">
                Affordable Prices, Exceptional Quality
              </h2>
              <p class="animate__animated animate__fadeInUp">
                At Limak Floor Service, we believe that everyone should have
                access to high-quality flooring. That's why we offer a wide
                range of options at affordable prices. From premium hardwood to
                budget-friendly laminate, we have something for every budget
                without compromising on quality. Let us help you achieve the
                flooring of your dreams at a price you can afford.
              </p>
              <a
                href="#about"
                class="
                  btn-get-started
                  animate__animated animate__fadeInUp
                  scrollto
                "
                >Read More</a
              >
            </div>
          </div>
        </div>
      </div>

      <a
        class="carousel-control-prev"
        href="#heroCarousel"
        role="button"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon bi bi-chevron-left"
          aria-hidden="true"
        ></span>
      </a>

      <a
        class="carousel-control-next"
        href="#heroCarousel"
        role="button"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon bi bi-chevron-right"
          aria-hidden="true"
        ></span>
      </a>
    </div>
  </section>
  <!-- End Hero -->
</template>

<script>
export default {
  mounted() {
    this.getSlider();
  },
  methods: {
    getSlider() {
      let heroCarouselIndicators = document.querySelector(
        "#hero-carousel-indicators"
      );
      let heroCarouselItems = document.querySelectorAll(
        "#heroCarousel .carousel-item",
        true
      );

      heroCarouselItems.forEach((item, index) => {
        index === 0
          ? (heroCarouselIndicators.innerHTML +=
              "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
              index +
              "' class='active'></li>")
          : (heroCarouselIndicators.innerHTML +=
              "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
              index +
              "'></li>");
      });
    },
  },
};
</script>

<style lang="scss">
.slide-one {
  background-image: url("../../assets/img/slide/slide-4.jpg");
}
.slide-two {
  background-image: url("../../assets/img/slide/slide-5.jpg");
}
.slide-three {
  background-image: url("../../assets/img/slide/slide-6.jpg");
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  width: 100%;
  height: 70vh;
  background-color: rgba(9, 9, 9, 0.8);
  overflow: hidden;
  position: relative;
}

#hero .carousel,
#hero .carousel-inner,
#hero .carousel-item,
#hero .carousel-item::before {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

#hero .carousel-item::before {
  content: "";
  // background-color: rgba(45, 103, 60, 0.8);
  background-color: $logoGreenRgba;
}

#hero .carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 50px;
  right: 50px;
}

#hero .container {
  text-align: center;
}

#hero h2 {
  color: $mainWhite;
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 700;
}

#hero p {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
  margin: 0 auto 30px auto;
  color: $mainWhite;
  font-weight: bold;
}

#hero .carousel-inner .carousel-item {
  transition-property: opacity;
  background-position: center top;
}

#hero .carousel-inner .carousel-item,
#hero .carousel-inner .active.carousel-item-start,
#hero .carousel-inner .active.carousel-item-end {
  opacity: 0;
}

#hero .carousel-inner .active,
#hero .carousel-inner .carousel-item-next.carousel-item-start,
#hero .carousel-inner .carousel-item-prev.carousel-item-end {
  opacity: 1;
  transition: 0.5s;
}

#hero .carousel-control-next-icon,
#hero .carousel-control-prev-icon {
  background: none;
  font-size: 30px;
  line-height: 0;
  width: auto;
  height: auto;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  transition: 0.3s;
  color: rgba(255, 255, 255, 0.5);
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#hero .carousel-control-next-icon:hover,
#hero .carousel-control-prev-icon:hover {
  background: rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.8);
}

#hero .carousel-indicators li {
  cursor: pointer;
  background: #fff;
  overflow: hidden;
  border: 0;
  width: 12px;
  height: 12px;
  border-radius: 50px;
  opacity: 0.6;
  transition: 0.3s;
}

#hero .carousel-indicators li.active {
  opacity: 1;
  background: #5cb874;
}

#hero .btn-get-started {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 4px;
  transition: 0.5s;
  line-height: 1;
  color: #fff;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
  background: $logoBlue;
}

#hero .btn-get-started:hover {
  background: $logoBlueHover;
}

@media (max-width: 992px) {
  #hero {
    height: 100vh;
  }

  #hero .carousel-container {
    top: 66px;
  }
}

@media (max-width: 768px) {
  #hero h2 {
    font-size: 28px;
  }
}

@media (min-width: 1024px) {
  #hero .carousel-control-prev,
  #hero .carousel-control-next {
    width: 5%;
  }
}

@media (max-height: 500px) {
  #hero {
    height: 120vh;
  }
}
</style>