<template>
  <!-- ======= Portfolio Section ======= -->
  <section id="portfolio" class="portfolio pb-0">
    <div class="container">
      <div class="section-title">
        <h2>Portfolio</h2>
        <p>Get inspired by our beautiful flooring projects</p>
      </div>

      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters" @click="filterPorfolio($event)">
            <li
              v-for="(tabItem, i) in portfolioData.tabs"
              :key="i"
              :data-filter="tabItem.dataFilter"
              :class="{ 'filter-active': tabItem.dataFilter === `*` }"
            >
              {{ tabItem.title }}
            </li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container">
        <div
          v-for="(projectItem, index) in portfolioData.portfolioProjects"
          :key="index"
          class="col-lg-4 col-md-6 portfolio-item"
          :class="projectItem.projectDataFilter"
        >
          <div class="portfolio-wrap">
            <img
              :src="
                require(`@/assets/img/portfolio/${projectItem.projectPicture}`)
              "
              class="img-fluid"
              alt="image"
            />
            <div class="portfolio-info">
              <h4>{{ projectItem.projectTitle }}</h4>
              <p>{{ projectItem.projectDescription }}</p>
              <div class="portfolio-links">
                <a
                  :href="
                    require(`@/assets/img/portfolio/${projectItem.projectPicture}`)
                  "
                  data-gallery="portfolioGallery"
                  class="portfolio-lightbox"
                  :title="projectItem.projectTitle"
                  ><i class="bx bx-plus"></i
                ></a>
                <router-link to="/portfolio-details" title="More Details"
                  ><i class="bx bx-link"></i
                ></router-link>
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
// import GLightbox from "glightbox";
// import Isotope from "isotope-layout";
// import Swiper from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
export default {
  data() {
    return {
      portfolioData: {
        tabs: [
          { title: `All`, dataFilter: `*` },
          { title: `Wire Brushed`, dataFilter: `.filter-wire-brushed` },
          { title: `Red Oak Hardwood`, dataFilter: `.filter-red-oak` },
          { title: `Maple Hardwood`, dataFilter: `.filter-maple-hardwood` },
          { title: `Herringbone`, dataFilter: `.filter-herringbone` },
          { title: `Laminate`, dataFilter: `.filter-laminate` },
          { title: `Vinyl`, dataFilter: `.filter-vinyl` },
        ],
        portfolioProjects: [
          // Wire Brushed
          {
            projectDataFilter: `filter-wire-brushed`,
            projectPicture: `wire-brushed-1.jpg`,
            projectTitle: `Wire Brushed`,
            projectDescription: `Wire Brushed`,
          },
          {
            projectDataFilter: `filter-wire-brushed`,
            projectPicture: `wire-brushed-2.jpg`,
            projectTitle: `Wire Brushed`,
            projectDescription: `Wire Brushed`,
          },
          {
            projectDataFilter: `filter-wire-brushed`,
            projectPicture: `wire-brushed-3.jpg`,
            projectTitle: `Wire Brushed`,
            projectDescription: `Wire Brushed`,
          },
          // Red Oak Hardwood
          {
            projectDataFilter: `filter-red-oak`,
            projectPicture: `red-oak-1.jpg`,
            projectTitle: `Red Oak Hardwood`,
            projectDescription: `Red Oak Hardwood`,
          },
          {
            projectDataFilter: `filter-red-oak`,
            projectPicture: `red-oak-2.jpg`,
            projectTitle: `Red Oak Hardwood`,
            projectDescription: `Red Oak Hardwood`,
          },
          // Maple Hardwood
          {
            projectDataFilter: `filter-maple-hardwood`,
            projectPicture: `maple-1.jpg`,
            projectTitle: `Maple Hardwood`,
            projectDescription: `Maple Hardwood`,
          },
          {
            projectDataFilter: `filter-maple-hardwood`,
            projectPicture: `maple-2.jpg`,
            projectTitle: `Maple Hardwood`,
            projectDescription: `Maple Hardwood`,
          },
          {
            projectDataFilter: `filter-maple-hardwood`,
            projectPicture: `maple-3.jpg`,
            projectTitle: `Maple Hardwood`,
            projectDescription: `Maple Hardwood`,
          },
          // Herringbone
          {
            projectDataFilter: `filter-herringbone`,
            projectPicture: `herringbone-1.jpg`,
            projectTitle: `Herringbone`,
            projectDescription: `Herringbone`,
          },
          {
            projectDataFilter: `filter-herringbone`,
            projectPicture: `herringbone-2.jpg`,
            projectTitle: `Herringbone`,
            projectDescription: `Herringbone`,
          },
          {
            projectDataFilter: `filter-herringbone`,
            projectPicture: `herringbone-3.jpg`,
            projectTitle: `Herringbone`,
            projectDescription: `Herringbone`,
          },
          // Laminate
          {
            projectDataFilter: `filter-laminate`,
            projectPicture: `laminate-1.jpg`,
            projectTitle: `Laminate`,
            projectDescription: `Laminate`,
          },
          {
            projectDataFilter: `filter-laminate`,
            projectPicture: `laminate-2.jpg`,
            projectTitle: `Laminate`,
            projectDescription: `Laminate`,
          },
          // Vinyl
          {
            projectDataFilter: `filter-vinyl`,
            projectPicture: `vinyl-1.jpg`,
            projectTitle: `Vinyl`,
            projectDescription: `Vinyl`,
          },
        ],
      },
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

      // eslint-disable-next-line no-undef
      new Isotope(document.querySelector(".portfolio-container"), {
        itemSelector: ".portfolio-item",
      }).arrange({
        filter: el.getAttribute("data-filter"),
      });
      this.organizePorfolioLayout();
    },

    organizePorfolioLayout() {
      // eslint-disable-next-line no-undef
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
      // eslint-disable-next-line no-undef
      GLightbox({
        selector: ".portfolio-lightbox",
      });
      // eslint-disable-next-line no-undef
      // new Isotope(document.querySelector(".portfolio-container"), {
      //   itemSelector: ".portfolio-item",
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
/*--------------------------------------------------------------
# Portfolio
--------------------------------------------------------------*/
.portfolio .portfolio-item {
  margin-bottom: 30px;
}

.portfolio #portfolio-flters {
  padding: 0;
  margin: 0 auto 20px auto;
  list-style: none;
  text-align: center;
}

.portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  padding: 8px 15px 10px 15px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  color: #444444;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;
  border-radius: 3px;
}

.portfolio #portfolio-flters li:hover,
.portfolio #portfolio-flters li.filter-active {
  color: #fff;
  background: $logoBlue;
}

.portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}

.portfolio .portfolio-wrap {
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: rgba(34, 34, 34, 0.6);
}

.portfolio .portfolio-wrap::before {
  content: "";
  background: rgba(34, 34, 34, 0.6);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all ease-in-out 0.3s;
  z-index: 2;
  opacity: 0;
}

.portfolio .portfolio-wrap img {
  transition: all ease-in-out 0.3s;
}

.portfolio .portfolio-wrap .portfolio-info {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px;
}

.portfolio .portfolio-wrap .portfolio-info h4 {
  font-size: 20px;
  color: #fff;
  font-weight: 600;
}

.portfolio .portfolio-wrap .portfolio-info p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  font-style: italic;
}

.portfolio .portfolio-wrap .portfolio-links {
  text-align: center;
  z-index: 4;
}

.portfolio .portfolio-wrap .portfolio-links a {
  color: #fff;
  margin: 0 5px 0 0;
  font-size: 28px;
  display: inline-block;
  transition: 0.3s;
}

.portfolio .portfolio-wrap .portfolio-links a:hover {
  color: #6ec083;
}

.portfolio .portfolio-wrap:hover::before {
  opacity: 1;
}

.portfolio .portfolio-wrap:hover img {
  transform: scale(1.2);
}

.portfolio .portfolio-wrap:hover .portfolio-info {
  opacity: 1;
}
</style>