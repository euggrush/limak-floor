<template>
  <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Portfolio Details</h2>
          <ol>
            <li><router-link to="/">Home</router-link></li>
            <li>Portfolio Details</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Breadcrumbs -->

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">
                <div class="swiper-slide">
                  <img src="../assets/img/portfolio/portfolio-1.jpg" alt="" />
                </div>

                <div class="swiper-slide">
                  <img src="../assets/img/portfolio/portfolio-2.jpg" alt="" />
                </div>

                <div class="swiper-slide">
                  <img src="../assets/img/portfolio/portfolio-3.jpg" alt="" />
                </div>
              </div>
              <div class="swiper-pagination">HAHAHA</div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: Web design</li>
                <li><strong>Client</strong>: ASU Company</li>
                <li><strong>Project date</strong>: 01 March, 2020</li>
                <li>
                  <strong>Project URL</strong>: <a href="#">www.example.com</a>
                </li>
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>This is an example of portfolio detail</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                itaque inventore commodi labore quia quia. Exercitationem
                repudiandae officiis neque suscipit non officia eaque itaque
                enim. Voluptatem officia accusantium nesciunt est omnis tempora
                consectetur dignissimos. Sequi nulla at esse enim cum deserunt
                eius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Portfolio Details Section -->
  </main>
  <!-- End #main -->
</template>

<script>
export default {
  mounted() {
    // eslint-disable-next-line no-undef
    new Swiper(".swiper", {
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
  },
};
</script>

<style lang="scss">
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