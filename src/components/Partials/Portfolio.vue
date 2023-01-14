<template>
  <!-- ======= Portfolio Section ======= -->
  <section id="portfolio" class="portfolio">
    <div class="container">
      <div class="section-title">
        <h2>Portfolio</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters" @click="filterPorfolio($event)">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container">
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img
              src="../../assets/img/portfolio/portfolio-1.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <div class="portfolio-links">
                <a
                  href="../../assets/img/portfolio/portfolio-1.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="App 1"
                  ><i class="bx bx-plus"></i
                ></a>
                <a href="portfolio-details.html" title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img
              src="../../assets/img/portfolio/portfolio-2.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <a
                  href="../../assets/img/portfolio/portfolio-2.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Web 3"
                  ><i class="bx bx-plus"></i
                ></a>
                <a href="portfolio-details.html" title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img
              src="../../assets/img/portfolio/portfolio-3.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <div class="portfolio-links">
                <a
                  href="../../assets/img/portfolio/portfolio-3.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="App 2"
                  ><i class="bx bx-plus"></i
                ></a>
                <a href="portfolio-details.html" title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <div class="portfolio-wrap">
            <img
              src="../../assets/img/portfolio/portfolio-4.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <div class="portfolio-links">
                <a
                  href="../../assets/img/portfolio/portfolio-4.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Card 2"
                  ><i class="bx bx-plus"></i
                ></a>
                <a href="portfolio-details.html" title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img
              src="../../assets/img/portfolio/portfolio-5.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <a
                  href="../../assets/img/portfolio/portfolio-5.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Web 2"
                  ><i class="bx bx-plus"></i
                ></a>
                <a href="portfolio-details.html" title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img
              src="../../assets/img/portfolio/portfolio-6.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <div class="portfolio-links">
                <a
                  href="../../assets/img/portfolio/portfolio-6.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="App 3"
                  ><i class="bx bx-plus"></i
                ></a>
                <a href="portfolio-details.html" title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <div class="portfolio-wrap">
            <img
              src="../../assets/img/portfolio/portfolio-7.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <div class="portfolio-links">
                <a
                  href="../../assets/img/portfolio/portfolio-7.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Card 1"
                  ><i class="bx bx-plus"></i
                ></a>
                <a href="portfolio-details.html" title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <div class="portfolio-wrap">
            <img
              src="../../assets/img/portfolio/portfolio-8.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <div class="portfolio-links">
                <a
                  href="../../assets/img/portfolio/portfolio-8.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Card 3"
                  ><i class="bx bx-plus"></i
                ></a>
                <a href="portfolio-details.html" title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img
              src="../../assets/img/portfolio/portfolio-9.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <div class="portfolio-links">
                <a
                  href="../../assets/img/portfolio/portfolio-9.jpg"
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  title="Web 3"
                  ><i class="bx bx-plus"></i
                ></a>
                <a href="portfolio-details.html" title="More Details"
                  ><i class="bx bx-link"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Portfolio Section -->
</template>

<script>
import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
  data() {
    return {
      portfolioIsotope: ``,
    };
  },
  mounted() {
    window.addEventListener("load", this.organizePorfolioLayout);
  },
  unmounted() {
    window.removeEventListener("load", this.organizePorfolioLayout);
  },
  methods: {
    filterPorfolio(e) {
      let el = e.target;

      document.querySelectorAll("#portfolio-flters li").forEach((item) => {
        item.classList.remove("filter-active");
      });
      el.classList.add("filter-active");
      document.querySelectorAll(`.portfolio-item`).forEach((item) => {
        item.style.display = null;
      });

      this.portfolioIsotope.arrange({
        filter: el.getAttribute("data-filter"),
      });
      this.organizePorfolioLayout();
    },

    organizePorfolioLayout() {
      new Swiper(".portfolio-details-slider", {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
      GLightbox({
        selector: ".portfolio-lightbox",
      });
      this.portfolioIsotope = new Isotope(
        document.querySelector(".portfolio-container"),
        {
          itemSelector: ".portfolio-item",
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>