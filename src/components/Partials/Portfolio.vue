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
          {
            projectDataFilter: `filter-wire-brushed`,
            projectPicture: `portfolio-1.jpg`,
            projectTitle: `Wire Brushed`,
            projectDescription: `Wire Brushed`,
          },
          {
            projectDataFilter: `filter-maple-hardwood`,
            projectPicture: `portfolio-2.jpg`,
            projectTitle: `Web 3`,
            projectDescription: `Web`,
          },
          {
            projectDataFilter: `filter-wire-brushed`,
            projectPicture: `portfolio-3.jpg`,
            projectTitle: `Wire Brushed`,
            projectDescription: `App`,
          },
          {
            projectDataFilter: `filter-red-oak`,
            projectPicture: `portfolio-4.jpg`,
            projectTitle: `Card 2`,
            projectDescription: `Card`,
          },
          {
            projectDataFilter: `filter-maple-hardwood`,
            projectPicture: `portfolio-5.jpg`,
            projectTitle: `Web 2`,
            projectDescription: `Web`,
          },
          {
            projectDataFilter: `filter-wire-brushed`,
            projectPicture: `portfolio-6.jpg`,
            projectTitle: `App 3`,
            projectDescription: `App`,
          },
          {
            projectDataFilter: `filter-red-oak`,
            projectPicture: `portfolio-7.jpg`,
            projectTitle: `Card 1`,
            projectDescription: `Card`,
          },
          {
            projectDataFilter: `filter-red-oak`,
            projectPicture: `portfolio-8.jpg`,
            projectTitle: `Card 3`,
            projectDescription: `Card`,
          },
          {
            projectDataFilter: `filter-maple-hardwood`,
            projectPicture: `portfolio-9.jpg`,
            projectTitle: `Web 3`,
            projectDescription: `Web`,
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
  background: $logoGreen;
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

/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
.portfolio-details {
  padding-top: 40px;
}

.portfolio-details .portfolio-details-slider img {
  width: 100%;
}

.portfolio-details .portfolio-details-slider .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.portfolio-details
  .portfolio-details-slider
  .swiper-pagination
  .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid $logoGreen;
}

.portfolio-details
  .portfolio-details-slider
  .swiper-pagination
  .swiper-pagination-bullet-active {
  background-color: $logoGreen;
}

.portfolio-details .portfolio-info {
  padding: 30px;
  box-shadow: 0px 0 30px rgba(34, 34, 34, 0.08);
}

.portfolio-details .portfolio-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.portfolio-details .portfolio-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.portfolio-details .portfolio-info ul li + li {
  margin-top: 10px;
}

.portfolio-details .portfolio-description {
  padding-top: 30px;
}

.portfolio-details .portfolio-description h2 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}

.portfolio-details .portfolio-description p {
  padding: 0;
}
</style>